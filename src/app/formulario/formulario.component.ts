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

  formularioPerfil = new FormGroup(
    {
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required, Validators.email ])
    }
  );

  Submit() {
    this.mensagem = 'Dados enviados com sucesso!';
  }

}