import { Component } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public env = environment;
  public staticDomain = this.env['staticDomain'];

  constructor(){
    localStorage.setItem("staticDomain",this.staticDomain);
  }
}
