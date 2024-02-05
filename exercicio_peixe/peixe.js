var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
        
};

var game = new Phaser.Game(config);

var tartaruga;

function preload(){
    //Carregar o Plano de Fundo
    this.load.image('mar', 'assets/bg_azul-claro.png');

    //Carregar o logo 
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //Carregar a Tartaruga
    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');

    //Carregar Novo Elemento
    this.load.image('bolhas', 'assets/bolhinhas.gif');
};

function create(){
    //Adicionar o fundo na tela
    this.add.image(400, 300, 'mar');

    //Adicionar o Logo e alterar o tamanho
    this.add.image(400, 525, 'logo').setScale(0.5);

    //Adicionar o Peixe na tela, definir o centro como origem do elemeto, e a orientação de espelhamento
    tartaruga = this.add.image(400, 300, 'tartaruga').setOrigin(0.5, 0.5).setFlip(true, false)

    //Transformar a tartaruga em variável
    tartaruga.setFlip(true, false);

    //Adicionar novo elemento
    this.add.image(400, 300, 'bolhas');
};

function update(){

//Adicionar controles a Tartaruga
tartaruga.x = this.input.x;
tartaruga.y = this.input.y;

};
