import { Component } from '@angular/core';
import { ReceitaCard } from '../receita-card/receita-card';
import { ReceitaDetalhes } from '../receita-detalhes/receita-detalhes';
import { RECEITAS } from '../../data/receitas';

@Component({
  selector: 'app-lista-receitas',
  imports: [ReceitaCard, ReceitaDetalhes],
  templateUrl: './lista-receitas.html',
  styleUrl: './lista-receitas.css'
})
export class ListaReceitas {
  titulo = 'Receitas disponíveis';
  receitas = RECEITAS;
}
