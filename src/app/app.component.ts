import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MetaModule } from '../services/meta.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MetaModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formatdecision';
}
