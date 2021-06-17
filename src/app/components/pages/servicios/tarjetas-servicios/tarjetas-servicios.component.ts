import { Component, OnInit } from '@angular/core';
import services from '../../../../data/services.json';

@Component({
  selector: 'app-tarjetas-servicios',
  templateUrl: './tarjetas-servicios.component.html',
  styleUrls: ['./tarjetas-servicios.component.css']
})
export class TarjetasServiciosComponent implements OnInit {
  // pagination
  page = 1;
  public serviceblock = services;

  constructor() { }

  ngOnInit(): void {
  }

}
