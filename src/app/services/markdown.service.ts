import { Injectable } from '@angular/core';
import { IndexElementType } from 'src/models/enums/index-element-type';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  markdownToHtml(markdown: string): string {
    if (markdown === undefined) return "";
    
    let html = "";

    for (const line of markdown.split("\n")) {
      if (line.match(/^\s*$/)) html += "<br />\n";
      else if (line.match(/^\s*---\s*$/g)) html += "<hr class='mhr'/>\n";

      else if (line.startsWith("### ")) html += `<p class='mh3'>${line.substring(4)}</p>\n`;
      else if (line.startsWith("## ")) html += `<p class='mh2'>${line.substring(3)}</p>\n`;
      else if (line.startsWith("# ")) html += `<p class='mh1'>${line.substring(2)}</p>\n`;

      else if (line.startsWith(" - ")) html += `<li class='mli'><span>${line.substring(3)}</span></li>\n`;
      else if (line.startsWith("> ")) html += `<p class='mquote'>${line.substring(2)}</p>\n`;

      else html += `<p>${line}</p>\n`;
    }

    html = this.replaceReferences(html);

    html = html
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2'>$1</a>")

    return html;
  }

  private replaceReferences(markdown: string): string {
    const indexElementTypes = Object.values(IndexElementType).join("|"); 
    const regex = new RegExp(`<\\@(${indexElementTypes}):(.*?)>`, "g");

    return markdown.replace(regex, (match, type, name) => {
      return `<span class='index-elem-ref' data-type="${type}" data-name='${name}'>${name}</span>`;
    });
  }
}
