import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgIconService {
  private iconCache = new Map<string, SafeHtml>();

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  getIcon(iconName: string): Observable<SafeHtml> {
    if (this.iconCache.has(iconName)) {
      return of(this.iconCache.get(iconName)!);
    }

    return this.http.get(`assets/images/icons/${iconName}.svg`, { responseType: 'text' })
      .pipe(
        map(svg => {
          const sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
          this.iconCache.set(iconName, sanitizedSvg);
          return sanitizedSvg;
        })
      );
  }
}