import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  getText(): string {
    return 'このあと改行されてほしい。\\nこの文の直前は¥¥n\\nああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ\nこの文の直前は¥n';
  }
}
