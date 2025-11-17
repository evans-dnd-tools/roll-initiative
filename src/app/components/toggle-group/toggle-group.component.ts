import { Component, Inject, Injector, Input, OnInit, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { BasicInput } from 'src/models/basic-input'

////    MISC    ////

function getReferentialLabel(element: any) {
  return element?.label
}

function getReferentialId(element: any) {
  return element?.id
}

////    COMPONENT    ////

@Component({
  selector: 'app-toggle-group',
  templateUrl: './toggle-group.component.html',
  styleUrls: ['./toggle-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleGroupComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class ToggleGroupComponent extends BasicInput implements OnInit, ControlValueAccessor {
  ////    INPUTS    ////

  @Input() options: any[] = []

  @Input() labelFromElement?: (element: any) => any = getReferentialLabel
  @Input() valueFromElement?: (element: any) => any = getReferentialId

  ////    LIFE CYCLE    ////

  constructor(@Inject(Injector) injector: Injector) {
    super(injector)
  }

  override ngOnInit() {
    super.ngOnInit()

    if (this.options?.length > 0) this.data = this.valueFromElement(this.options[0])
    else this.data = null
  }

  ////    METHODS    ////

  isSelected(option: any): boolean {
    const value = this.valueFromElement(option)
    return this.data === value
  }
}
