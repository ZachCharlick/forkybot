class Insult {
  constructor(name) {
    this.name = name;

    this.insultArray = [
      "ASS IS WAY BETTER THAN TITTIES AND YOURE A BITCH IF YOU SAY OTHERWISE YOU FUCKING DEGENERATE MUTTON SHEEPLE COMMUNIST DIPSHIT MOTHER FUCKER",
      "YOUR MOM LIKES BUTTPLAY LIKE I LIKE ICECREAM, LETS GET SOME FUCKIN VANILLA. IF YOU DON'T LIKE IT YOU CAN GET FUCKED",
      "CAN YOU ASK YOUR MOM TO PICK UP YOUR MATE'S MOM ON THE WAY OVER TO MY PLACE? I DOUBLE BOOKED THEM BY MISTAKE, YOU FUCKING LOSER. I FUCKING HATE YOU!!!!!!",
      "YOU’RE A DISAPPOINTMENT TO YOUR PARENTS. WHO I FUCKED LAST NIGHT YOU EIGHT-BIT FUCKNUGGET",
      "I FUCKING HATE YOU YOURE SUCH A PATHETIC PIECE OF SHIT WITLESS FUCKING COCKSPLAT",
      "I AM MAKING A WISH .. WISH YOU WEREN'T SO FUCKIN AWKWARD. I'LL EAT YOUR FUCKING CORPSE",
      "SHUT YOUR GOD DAMN MOUTH I WILL EAT YOUR CHILDREN, SHIT THEM OUT AND EAT THAT SHIT AND PUKE IT IN YOUR GODDAMN FACE",
      "YOU ARE SO FUCKING STUPID I COULD DROP YOU IN A BARREL FULL OF TITS AND YOU WOULD COME UP SUCKING YOUR OWN GODDAMN THUMB YOU'VE OBVIOUSLY MISTAKEN ME FOR SOMEONE WHO GIVES A DAMN"
    ];

    this.insultMessage = this.generateInsult();
  }
  generateInsult(){
    return `Robert Says: "<@${this.name}>, ${this.getRandomMessage()}"`;
  }
  getRandomMessage(){
    var randomIndex = Math.floor(Math.random() * this.insultArray.length);
    return this.insultArray[randomIndex];
  }
}

module.exports = Insult;