import { Component } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { ListaReceitas } from './components/lista-receitas/lista-receitas';
import { ReceitaDetalhes } from './components/receita-detalhes/receita-detalhes';
import { Rodape } from './components/rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, ListaReceitas, ReceitaDetalhes, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
