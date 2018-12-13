import { Component } from '@angular/core';
import {TextService} from './text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wrapSample';
  text: string;
  splited: string[];


  constructor(private textService: TextService) {
    this.text = this.textService.getText();
    this.splited = this.text.split('\\n');
  }
}
