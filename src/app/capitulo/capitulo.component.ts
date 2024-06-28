import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-capitulo',
  standalone: true,
  imports: [],
  templateUrl: './capitulo.component.html',
  styleUrl: './capitulo.component.css'
})
export class CapituloComponent {
  capitulos = [
    {id:0, numero:1, nome: "Introdução"},
    {id:1, numero:2, nome: "Desenvolvimento"},
    {id:2, numero:3, nome: "Conclusão"}
  ]
}
