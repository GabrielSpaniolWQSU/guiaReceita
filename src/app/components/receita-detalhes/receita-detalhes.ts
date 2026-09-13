import { Component, input } from '@angular/core';
import { Receita } from '../../models/receita';

@Component({
  selector: 'app-receita-detalhes',
  imports: [],
  templateUrl: './receita-detalhes.html',
  styleUrl: './receita-detalhes.css'
})
export class ReceitaDetalhes {
  receita = input.required<Receita>();
}
