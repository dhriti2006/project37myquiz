class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.Allhide()



    //write code to change the background color here
     background("pink");



    //write code to show a heading for showing the result of Quiz
    text("YOUR RESULLT",350,50);


    //call getContestantInfo( ) here

    Contestant.getPlayerInfo()
    if(allContestants  !==undefined){
      var textypos=200;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted  in green color!",130,230);}




    //write condition to check if contestantInfor is not undefined
    for(var contestantinfor in allContestants){
      var correctanswer = "2"
      if(correctanswer===allContestants[contestantinfor].answer){
      fill("green");

      }

      else{fill("red")}

      
    }

    textypos+=30;

    
   text(allContestants[contestantinfor].name+"-"+allContestants[contestantinfor].answer,250,textypos)

   //write code to add a note here



    //write code to highlight contest who answered correctly
    
  }

}
