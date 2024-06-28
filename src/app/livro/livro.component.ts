import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CapituloComponent } from '../capitulo/capitulo.component';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CapituloComponent],
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {
  @Input() titulo = 'titulo';
  @Input() autor = 'autor';

  @Output() incrementouLikes = new EventEmitter();

  contadorLikes = 0;
  incrementarLikes() {
    this.contadorLikes++;
    this.incrementouLikes.emit(this.contadorLikes);
  }
  
}
