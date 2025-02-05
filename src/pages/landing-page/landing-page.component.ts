import { Component } from '@angular/core';
import { MetaModule } from '../../services/meta.module';
import { FormatdecisionappComponent } from '../formatdecisionapp/formatdecisionapp.component';

@Component({
  selector: 'app-landing-page',
  imports: [MetaModule, FormatdecisionappComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
