import { Component } from '@angular/core';
import { ReceitaCard } from '../receita-card/receita-card';

@Component({
  selector: 'app-lista-receitas',
  imports: [ReceitaCard],
  templateUrl: './lista-receitas.html',
  styleUrl: './lista-receitas.css'
})
export class ListaReceitas {}
