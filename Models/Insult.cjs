class Insult {
  constructor(name) {
    this.name = name;
    this.insultMessage = this.GenerateInsult();
  }
  GenerateInsult(){
    return `Default insult for now! <@${this.name}> you suck!`;
  }
}

module.exports = Insult;