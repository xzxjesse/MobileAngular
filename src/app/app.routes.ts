import { Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    { path: 'biblioteca', title: 'Biblioteca', component: BibliotecaComponent },
    { path: 'formulario', title: 'Formulário', component: FormularioComponent }
];