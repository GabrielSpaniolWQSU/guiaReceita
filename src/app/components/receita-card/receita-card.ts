import { Component, input } from '@angular/core';
import { Receita } from '../../models/receita';

@Component({
  selector: 'app-receita-card',
  imports: [],
  templateUrl: './receita-card.html',
  styleUrl: './receita-card.css'
})
export class ReceitaCard {
  receita = input.required<Receita>();
}
