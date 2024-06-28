import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro.component'; 

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [LivroComponent],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {
  contadorLikesLivro = 0;
  incrementarLikesLivros(contador:number) {
    this.contadorLikesLivro++;
    console.log("Contador: " + contador)
  }
}
