import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
}
