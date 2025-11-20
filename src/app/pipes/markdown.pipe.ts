import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownService } from 'src/app/services/markdown.service';

@Pipe({
    name: 'markdown',
    standalone: false
})
export class MarkdownPipe implements PipeTransform {

  constructor(private markdownService: MarkdownService, private sanitized: DomSanitizer) {}

  transform(markdown: string): unknown {
    const html = this.markdownService.markdownToHtml(markdown);
    return this.sanitized.bypassSecurityTrustHtml(html);
  }

}
