import { Component } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clima',
  imports: [FormsModule,CommonModule],
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css'
})
export class ClimaComponent {
  nombreCiudad = '';
  err = '';
  datosClima: any;

  constructor(private climaService: ClimaService){}

  searchWeather(){
    this.climaService.getWeather(this.nombreCiudad).subscribe({
      next: datos => {
        this.datosClima = datos;
        this.err = ''
      },
      error: err => {
        this.err = 'no se encontraron coincidencias en la busqueda';
        this.datosClima = null;
      }
    })
  }
}
