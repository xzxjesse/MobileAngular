import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-info-pessoais',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatToolbar,
    MatFormField,
    MatButton,
    MatTableModule,
  ],
  templateUrl: './info-pessoais.component.html',
  styleUrl: './info-pessoais.component.css'
})
export class InfoPessoaisComponent {
  colunas = ['nome', 'telefone', 'email', 'nascimento'];
  dados = [
    {nome:'Jesse', telefone:'61993847564', email:'jesse@gmail.com', nascimento:'04-10-2003'},
    {nome:'Eveline', telefone:'61984736203', email:'eveline@gmail.com', nascimento:'06-09-2002'}
  ];
  conteudo = new MatTableDataSource(this.dados);

  formulario = new FormGroup(
    {
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required]),
      nascimento: new FormControl('', [Validators.required])
    }
  );

  novoDado: any[] = [];
  enviarInfos(infos : any){
    this.novoDado = this.conteudo.data.slice();
    this.novoDado.push ( { nome: infos.nome, telefone: infos.telefone, email: infos.email, nascimento: infos.nascimento});
    this.conteudo.data = this.novoDado;
  }
}
