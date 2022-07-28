class Insult {
    private name: string;
    private insultMessage: string;

    public Insult(name: string){
        this.name = name;
        this.GenerateInsult();
    }

    private GenerateInsult(){
        this.insultMessage = `Default insult for now! ${this.name} you suck!`;
    }

    public GetInsult(){
        return this.insultMessage;
    }
}