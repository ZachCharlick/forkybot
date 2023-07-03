class Insult {
  constructor(name) {
    this.name = name;

    this.insultArray = [
      "Insult One",
      "Insult Two"
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
