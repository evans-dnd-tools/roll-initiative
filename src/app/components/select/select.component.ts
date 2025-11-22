import {
  Component,
  ElementRef,
  Inject,
  Injector,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  forwardRef,
  AfterViewInit,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { BasicInput } from 'src/models/basic-input'

////    MISC    ////

const QUICK_SELECT_REGEX = /^[a-zA-Z0-9]$/i

////    COMPONENT    ////

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class SelectComponent
  extends BasicInput
  implements OnInit, ControlValueAccessor, OnChanges, AfterViewInit
{
  ////    READ-ONLY    ////

  readonly OPTION_HEIGHT = 38
  readonly OPTION_LIST_EXTRA_PADDING = 2
  readonly DEFAULT_VIEW_HEIGHT = 152

  readonly FILTER_INPUT_HEIGHT = 52
  readonly SMALL_FILTER_INPUT_HEIGHT = 48

  readonly QUICK_SELECT_TIMEOUT = 400
  readonly ALL_SELECTED_TIMEOUT = 160

  readonly SEPARATOR_HEIGHT = 5

  ////    INPUTS    ////

  // CONTENT
  @Input() label: string = ''
  @Input() placeholder: string = 'Rechercher'
  @Input() noResultMessage: string = 'Aucun résultat...'
  @Input() clearable: boolean = true

  @Input() maxDropdownHeight: number
  @Input() separatorsIndex: number[] = []

  // DATA
  @Input() enableFilter: boolean = true

  @Input() strict: boolean = false
  @Input() multiple: boolean = false
  @Input() selectAll: boolean = false

  _options: any[] = [] // @Input() in getters & setters

  // FUNCTIONS
  @Input() labelFromElement?: (element: any) => any = (e) => e
  @Input() valueFromElement?: (element: any) => any = (e) => e

  ////    ATTRIBUTES    ////

  // STATE
  _filter: string
  open = false

  allSelected = false
  allSelectedTimeout: any = null

  listView: any[] = []
  listOffset: number = 0

  overlayWidth: number = 0
  overlayHeight: number = 0
  scrollBodyHeight: number = 0
  virtualScrollPadding: number = 0

  focusedOption: any = null

  quickSelectFilter: string = ''
  quickSelectTimeout: any = null

  // REFS

  @ViewChild('select') select: ElementRef
  @ViewChild('overlay') overlay: ElementRef

  @ViewChild('filterInput') filterInput: ElementRef
  @ViewChild('scrollBox') scrollBox: ElementRef

  ////    LIFE CYCLE    ////

  constructor(
    @Inject(Injector) injector: Injector,
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef,
  ) {
    super(injector)
    this.overlayHeight = this.maxOverlayHeight
  }

  ngOnChanges() {
    if (this.options && this.selectAll) this.updateAllSelected()
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges()
  }

  ////    EVENTS    ////

  onBlur(event: Event) {
    setTimeout(() => {
      if (!this.focused) this.close(event)
    }, 0)
  }

  close(event: any) {
    if (!this.open) return
    this.open = false
    this.focusedOption = null
    this.filter = ''
    this.onTouch(event)

    // Put focus right after the select element
    this.select.nativeElement.focus()
    this.select.nativeElement.blur()
  }

  openList() {
    if (this.open || this.disabled) return
    this.open = true

    this.zone.run(() => {
      setTimeout(() => {
        this.changeDetector.detectChanges()

        this.matchOverlayWidth()
        this.setDefaultListView()

        if (!this.multiple) {
          const selectedOption = this.options.find(
            (element: any) => this.valueFromElement(element) === this.data,
          )
          if (selectedOption && this.filteredOptions.includes(selectedOption)) {
            this.focusedOption = selectedOption
            this.scrollToFocusedOption()
          }
        }

        if (this.enableFilter) this.filterInput.nativeElement.focus()
      }, 0)
    })
  }

  /**
   * Changes the list view depending on visible elements in the virtual scroll
   * based on the overlay scroll value.
   *
   * @param event - The scroll event object.
   */
  updateListView() {
    const filteredOptions = this.filteredOptions
    const view = this.scrollBox.nativeElement
    const listViewLength = this.listView.length

    let firstVisibleElement = Math.floor(view.scrollTop / this.OPTION_HEIGHT)

    if (firstVisibleElement + listViewLength > filteredOptions.length)
      firstVisibleElement = filteredOptions.length - listViewLength

    const newListView = []
    for (let i = 0; i < listViewLength; i++)
      newListView.push(filteredOptions[i + firstVisibleElement])

    this.listView = newListView
    this.listOffset = firstVisibleElement

    this.virtualScrollPadding = firstVisibleElement * this.OPTION_HEIGHT
    if (!this.filter)
      this.virtualScrollPadding +=
        this.separatorsIndex.filter((index) => index < firstVisibleElement).length *
        this.SEPARATOR_HEIGHT
  }

  /**
   * Tracks the id of items in a list to optimize rendering.
   * Used with Angular's `*ngFor` directive to improve performance
   * by letting Angular know how to track changes in the list.
   *
   * @see https://angular.dev/api/core/TrackByFunction
   *
   * @param index - The index of the current item in the list.
   * @param elem - The current item in the list.
   * @returns The index of the item, which serves as its unique identifier.
   */
  track(index: number, elem: any) {
    return index
  }

  /**
   * Updates the selection based on the provided option.
   * Used when the user clicks on an option or presses
   * enter or space while an option is focused.
   *
   * @param option The option to update the selection with.
   */
  updateSelection(option: any) {
    const value = this.valueFromElement(option)

    if (this.multiple) {
      if (!this.data) this.data = [value]
      else {
        const index = this.data.indexOf(value)
        if (index > -1) this.data = this.data.filter((element: any) => element !== value)
        else this.data = [...this.data, value]
      }
    } else {
      this.data = value
      this.close(null)
    }
  }

  toggleAll() {
    if (!this.multiple || !this.selectAll) return

    if (this.allSelected) this.data = []
    else this.data = this.filteredOptions.map((option: any) => this.valueFromElement(option))
  }

  /**
   * Handles the keydown events for the select component.
   * Used on the wrapper and the filter input events.
   * @param event The keyboard event.
   */
  onKeydown(event: KeyboardEvent) {
    if (this.disabled) return

    const caughtKeys = ['ArrowUp', 'ArrowDown', 'Enter']
    if (event.target !== this.filterInput?.nativeElement) caughtKeys.push(' ')

    // If the key is basically a letter, it is sent to quickSelect
    if (!caughtKeys.includes(event.key)) {
      if (!this.open) this.quickSelect(event)
      return
    }

    // Cancel default behavior for caught keys to prevent scrolling
    event.preventDefault()
    event.stopPropagation()

    switch (event.key) {
      case 'ArrowDown':
        if (!this.open && this.multiple) this.openList()
        else if (!this.open) this.selectNextValue(1)
        else this.focusNextValue(1)
        break
      case 'ArrowUp':
        if (!this.open && this.multiple) this.openList()
        else if (!this.open) this.selectNextValue(-1)
        else this.focusNextValue(-1)
        break
      case 'Enter':
        if (!this.open) this.openList()
        else if (this.focusedOption) this.updateSelection(this.focusedOption)
        break
      case ' ':
        if (!this.open) this.openList()
        else if (this.focusedOption) this.updateSelection(this.focusedOption)
        break
    }
  }

  /**
   * Handles extra cases for the list keydown, on top of
   * the existing `onKeyDown()`.
   * Used on the option list events.
   * @param event The keyboard event.
   */
  onListKeydown(event: KeyboardEvent) {
    if (this.disabled) return

    // Handle tab key by hand to prevent weird focus
    // behavior of cdkOverlay when the select is closed
    if (!event.shiftKey && event.key === 'Tab') {
      event.preventDefault()
      event.stopPropagation()
      this.close(event)
      return
    }

    this.onKeydown(event)
  }

  onListFocus() {
    if (!this.focusedOption) this.focusedOption = this.filteredOptions[0]
  }

  ////    METHODS    ////

  isSelected(option: any): boolean {
    const value = this.valueFromElement(option)
    if (this.multiple) return this.data?.includes(value)
    else return this.data === value
  }

  clearSelection(event: Event): void {
    event.stopPropagation()
    event.preventDefault()

    this.data = this.multiple ? [] : null
    this.filter = ''
  }

  override setData(value: any, emitEvent: boolean): void {
    const initialValue = value

    if (this.strict && value != null) {
      if (this.multiple) {
        if (
          value.length &&
          value.some((v: any) => !this.options.some((o: any) => this.valueFromElement(o) === v))
        )
          value = []
      } else if (!this.options.some((o: any) => this.valueFromElement(o) === value)) value = null
    }

    this._data = value
    if (emitEvent || value != initialValue) {
      this.onChange(value)
      this.onTouch(value)
    }
    this.updateAllSelected()
  }

  ////    PRIVATE METHODS    ////

  protected matchOverlayWidth() {
    this.overlayWidth = this.select.nativeElement.offsetWidth
  }

  /**
   * Populates the visible elements in the virtual scroll list view
   * and resets / recalculates position-related attributes.
   * Used when the select is opened or the filter is changed.
   */
  private setDefaultListView() {
    const filteredOptions = this.filteredOptions

    let scrollBodyHeight = this.OPTION_HEIGHT * filteredOptions.length
    if (!this.filter) scrollBodyHeight += this.separatorsIndex.length * this.SEPARATOR_HEIGHT
    this.scrollBodyHeight = scrollBodyHeight

    this.overlayHeight = this.maxOverlayHeight
    this.virtualScrollPadding = 0
    this.listOffset = 0

    const visibleElements = []

    while (
      (visibleElements.length - this.OPTION_LIST_EXTRA_PADDING) * this.OPTION_HEIGHT <
        this.overlayHeight &&
      visibleElements.length < filteredOptions.length
    ) {
      visibleElements.push(filteredOptions[visibleElements.length])
    }

    const visibleElementsHeight = visibleElements.length * this.OPTION_HEIGHT
    if (visibleElementsHeight < this.overlayHeight) {
      this.overlayHeight =
        filteredOptions.length * this.OPTION_HEIGHT +
        this.separatorsIndex.length * this.SEPARATOR_HEIGHT
      if (this.enableFilter) this.overlayHeight += this.FILTER_INPUT_HEIGHT
      if (visibleElements.length === 0) this.overlayHeight += this.OPTION_HEIGHT
    }

    this.listView = visibleElements
  }

  /**
   * Selects the next value based on the given delta.
   * If the component is in multiple selection mode, the function does nothing.
   * Used on arrow up and down when the select is closed.
   * In this function, we use options instead of filteredOptions because the
   * filter is always empty when the select is closed.
   *
   * @param delta - The change in index to select the next value.
   */
  private selectNextValue(delta: number) {
    if (this.multiple) return

    const selectedOption = this.options.find(
      (element: any) => this.valueFromElement(element) === this.data,
    )
    const currentIndex = this.options.indexOf(selectedOption)

    if ((currentIndex === 0 && delta < 0) || currentIndex + delta === -2)
      this.data = this.valueFromElement(this.options[this.options.length - 1])
    else if (currentIndex === this.options.length - 1 && delta > 0)
      this.data = this.valueFromElement(this.options[0])
    else this.data = this.valueFromElement(this.options[currentIndex + delta])
  }

  /**
   * Moves the focus to the next value in the select component.
   * Used on arrow up and down when the select is open.
   *
   * @param delta - The change in index to move the focus by.
   */
  private focusNextValue(delta: number) {
    const filteredOptions = this.filteredOptions
    const focusedOptionIndex = filteredOptions.indexOf(this.focusedOption)

    if ((focusedOptionIndex === 0 && delta < 0) || focusedOptionIndex + delta === -2)
      this.focusedOption = filteredOptions[filteredOptions.length - 1]
    else if (focusedOptionIndex === filteredOptions.length - 1 && delta > 0)
      this.focusedOption = filteredOptions[0]
    else this.focusedOption = filteredOptions[focusedOptionIndex + delta]

    this.scrollToFocusedOption()
  }

  /**
   * Scrolls the overlay to the focused option.
   * Used on arrow up and down when the select is open.
   */
  private scrollToFocusedOption() {
    const focusedOptionIndex = this.filteredOptions.indexOf(this.focusedOption)
    const scrollBox = this.scrollBox.nativeElement

    if (this.filteredOptions.length * this.OPTION_HEIGHT < this.overlayHeight) return

    let position = focusedOptionIndex * this.OPTION_HEIGHT - this.OPTION_HEIGHT
    if (!this.filter)
      position +=
        this.separatorsIndex.filter((index) => index < focusedOptionIndex).length *
        this.SEPARATOR_HEIGHT

    scrollBox.scrollTo({
      top: position,
      behavior: 'auto',
    })
  }

  /**
   * Selects an option based on the key pressed by the user.
   * Used on keydown when the select is closed.
   * If the component is in multiple selection mode, it opens the select and filters the options.
   *
   * @param event - The keyboard event.
   */
  private quickSelect(event: KeyboardEvent) {
    if (!this.options) return

    const key = event.key.toUpperCase()
    if (!QUICK_SELECT_REGEX.test(key)) return

    event.preventDefault()
    event.stopPropagation()

    if (this.multiple) {
      this.openList()
      this.filter = key
      return
    }

    if (this.quickSelectTimeout) clearTimeout(this.quickSelectTimeout)

    this.quickSelectFilter += key

    this.quickSelectTimeout = setTimeout(() => {
      this.quickSelectFilter = ''
    }, this.QUICK_SELECT_TIMEOUT)

    const selectedOption = this.options.find(
      (elem: any) =>
        this.labelFromElement(elem).toUpperCase().startsWith(this.quickSelectFilter) === true,
    )

    const newValue = this.valueFromElement(selectedOption)
    if (selectedOption && newValue !== this.data) this.data = newValue
  }

  /**
   * Updates the `allSelected` attribute based on the selected
   * options, after a timeout to reduce the number of calls.
   * Called when data or filter is updated.
   * Used to display the state of select-all checkbox.
   */
  private updateAllSelected() {
    if (!this.multiple || !this.selectAll) return

    if (this.allSelectedTimeout) clearTimeout(this.allSelectedTimeout)

    this.allSelectedTimeout = setTimeout(() => {
      let allSelected = true
      if (this.filteredOptions) {
        for (const option of this.filteredOptions) {
          if (!this.isSelected(option)) {
            allSelected = false
            break
          }
        }
      }

      this.allSelected = allSelected
    }, this.ALL_SELECTED_TIMEOUT)
  }

  ////    SPECIAL GETTERS    ////

  /**
   * Returns the label of selected options.
   * If the component is in multiple selection mode, it returns a comma-separated string of selected labels.
   * @returns The selected text.
   */
  get selectedText(): string {
    if (this.data == null) return this.label
    if (this.options?.length === 0) return this.label
    if (this.multiple && this.data?.length === 0) return this.label

    if (this.multiple) {
      return this.data
        .map((selected: any) =>
          this.labelFromElement(
            this.options?.find((element: any) => this.valueFromElement(element) === selected),
          ),
        )
        .join(', ')
    } else {
      return this.labelFromElement(
        this.options?.find((element: any) => this.valueFromElement(element) === this.data),
      )
    }
  }

  get hasValue(): boolean {
    if (this.data == null) return false

    if (this.multiple) return this.data?.length > 0
    else return this.data != null
  }

  /**
   * Returns a boolean value indicating whether parts of the select component are focused.
   * Used to close the select when the user clicks or focus outside of it.
   * @returns {boolean} True if the select component is focused, false otherwise.
   */
  get focused(): boolean {
    return (
      this.overlay?.nativeElement?.contains(document.activeElement) ||
      (this.select?.nativeElement && this.select.nativeElement === document.activeElement)
    )
  }

  get filteredOptions(): any[] {
    if (!this.enableFilter) return this.options

    const filter = (this.filter ?? '').toUpperCase()

    if (this.options && this.options.length > 0) {
      return this.options.filter((option: any) =>
        this.labelFromElement(option).toUpperCase().includes(filter),
      )
    } else {
      return []
    }
  }

  get maxOverlayHeight(): number {
    return this.maxDropdownHeight ?? this.DEFAULT_VIEW_HEIGHT
  }

  ////    GETTERS & SETTERS    ////

  set filter(value: string) {
    this._filter = value
    if (!this.open) return
    this.matchOverlayWidth()
    this.setDefaultListView()
    this.updateListView()
    this.updateAllSelected()
  }

  get filter(): string {
    return this._filter
  }

  @Input() set options(options: any[]) {
    const value = this.data
    if (this.strict && options != null && value != null) {
      if (this.multiple) {
        if (
          value &&
          value.some((v: any) => !options.some((o: any) => this.valueFromElement(o) === v))
        )
          this.data = []
      } else if (!options.some((o: any) => this.valueFromElement(o) === value)) this.data = null
    }

    this._options = options
  }

  get options(): any[] {
    return this._options
  }

  get showClearButton(): boolean {
    return this.clearable && this.hasValue && !this.disabled
  }
}
