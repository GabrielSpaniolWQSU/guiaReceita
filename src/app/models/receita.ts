export interface Receita {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  dificuldade: "Fácil" | "Média";
  tempo: number;
  porcoes: number;
  imagem: string;
  ingredientes: string[];
  preparo: string[];
  dica: string;
}
