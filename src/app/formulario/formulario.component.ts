import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  nome!: string;
  telefone!: string;
  email!: string;
  dataNascimento!: string;

  mensagem: string = '';

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    this.mensagem = 'Dados enviados com sucesso!';
  }
}