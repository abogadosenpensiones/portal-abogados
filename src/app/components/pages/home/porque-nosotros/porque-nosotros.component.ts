import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porque-nosotros',
  templateUrl: './porque-nosotros.component.html',
  styleUrls: ['./porque-nosotros.component.css'],
})
export class PorqueNosotrosComponent implements OnInit {
  whychooseus = [
    {
      icon: 'fal fa-bolt',
      title: 'Solución rápida',
      text: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam rem aperiam eaque ipsa',
    },
    {
      icon: 'fal  fa-balance-scale',
      title: 'Expertos en derecho',
      text: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam rem aperiam eaque ipsa',
    },
    {
      icon: 'fal fa-user',
      title: 'Constante contacto',
      text: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam rem aperiam eaque ipsa',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
