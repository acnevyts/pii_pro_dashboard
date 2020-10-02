import { Pipe, PipeTransform } from '@angular/core';
import * as jp from 'jsonpath';

@Pipe({
  name: 'jsonPathHighlight',
})
export class JsonPathHighlightPipe implements PipeTransform {
  transform(value: unknown, config: any): unknown {
    const highlightStrings = [];
    let strVal = JSON.stringify(value, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
    let roots = [value];
    if (value && config) {
      if (config.collectionDelimeter) {
        roots = jp.query(value, config.collectionDelimeter);
      }
      for (const root of roots) {
        for (const piiConfig of config.PIIData) {
          console.log(piiConfig);
          let jsonPath = piiConfig.jsonPath;
          if (jsonPath[0] === '@') {
            jsonPath = jsonPath.substring(2);
          }
          const pii = jp.query(root, jsonPath);
          for (const result of pii) {
            if (result && highlightStrings.indexOf(result) < 0) {
              highlightStrings.push(result.toString());
            }
          }
        }
      }
      if (highlightStrings.length > 0) {
        for (const hlString of highlightStrings) {
          let pattern = hlString.replace(
            /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
            '\\$&'
          );
          pattern = pattern
            .split(' ')
            .filter((t) => {
              return t.length > 0;
            })
            .join('|');
          const regex = new RegExp(pattern, 'gi');
          strVal = strVal.replace(
            regex,
            (match) => `<span class="search-highlight">${match}</span>`
          );
        }
      }
    }
    return strVal;
  }
}
