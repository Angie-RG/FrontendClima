import { Component, Input, OnInit } from '@angular/core';
import { Historial } from '../../models/historial';
import { HistorialService } from '../../services/historial.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  imports: [FormsModule, CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit{

  @Input() nombreCiudad!: Historial;
  historial: Historial[] = [];

  constructor(public historialService: HistorialService){}

  ngOnInit(): void {
    this.cargarHistorial();
  }

  cargarHistorial(){
    this.historialService.getHistory().subscribe(data => this.historial = data);
  }

  // agregarHistorial(){
  //   this.historialService.createHistory(this.nombreCiudad).subscribe(() => {
  //     this.cargarHistorial();
  //     this.nombreCiudad = {ciudad: ''}
  //   });
  // }

}
