import { Component } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Historial } from '../../models/historial';

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
  nuevoHistorial: Historial = {
    ciudad: ''
  };
  historial: Historial[] = [];

  constructor(public climaService: ClimaService){}

  searchWeather(){
    this.climaService.getWeather(this.nombreCiudad).subscribe({
      next: datos => {
        this.datosClima = datos;
        this.err = '';
        this.nuevoHistorial.ciudad = this.nombreCiudad;
         this.agregarHistorial();
      },
      error: err => {
        this.err = 'no se encontraron coincidencias en la busqueda';
        this.datosClima = null;
      }
    })
  };

  ngOnInit(): void {
    this.cargarHistorial();
  }

  cargarHistorial(){
    this.climaService.getHistory().subscribe(data => this.historial = data);
  }

  agregarHistorial(){
+    this.climaService.createHistory(this.nuevoHistorial).subscribe(() => {
      this.cargarHistorial();
      this.nuevoHistorial = {ciudad: ''}
    });
  }
  
}
