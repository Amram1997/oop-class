class Shiritori{
    constructor(){
        this.words = [];
        this.game_over = true;
    }

    play(words){
      let endWord = words[words.length - 1]
      console.log(endWord)
      let startWord = words[0];
      console.log(startWord)
    
     
    }
}
 let myShiritori = new Shiritori();
 console.log(myShiritori.play("word"))
 console.log(myShiritori.play("draw"))