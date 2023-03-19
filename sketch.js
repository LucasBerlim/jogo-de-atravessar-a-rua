function setup() {
  createCanvas(500, 400);
  
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada); // ()cor da imagem
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}