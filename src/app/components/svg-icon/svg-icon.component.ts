import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgIconService } from '../../services/svg-icon.service';

@Component({
  selector: 'app-svg-icon',
  template: ``,
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  
  @Input() icon!: string;
  
  @HostBinding('innerHTML') 
  iconHtml: SafeHtml = '';

  constructor(private svgIconService: SvgIconService) {}

  ngOnInit() {
    this.svgIconService.getIcon(this.icon).subscribe(html => {
      this.iconHtml = html;
    });
  }
}