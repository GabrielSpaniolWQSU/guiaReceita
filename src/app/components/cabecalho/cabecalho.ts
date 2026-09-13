import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css'
})
export class Cabecalho {
  titulo = 'Guia de receitas';
  descricao = 'Receitas simples para o dia a dia.';
}
