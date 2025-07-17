import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClimaComponent } from './components/clima/clima.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClimaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendClima';
}
