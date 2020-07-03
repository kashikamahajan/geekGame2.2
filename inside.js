class Inside{
    constructor(){
      
      this.image =cbinside;
      
      this.startButton=createButton('start');
      this.greeting1=createElement('h2');
      this.greeting2=createElement('h2');
      this.greeting3=createElement('h2');
      this.lessonInput=createInput('Enter Lesson Number');
      
       

      

        }


        hide()
        {
            this.startButton.hide();
            this.lessonInput.hide();
        }
  
   display(){

      background(cbinside);
       
       push();
       
      this.lessonInput.position(370,250);
      this.startButton.mousePressed(()=>{
            
       lessonNumber=this.lessonInput.value();
       this.goToLesson();
  
        
      });

      
       
       
       
       imageMode(CENTER);
       image(this.image,400, 200, 800, 400);
       pop();
       
       this.startButton.position(370,270);



       form.playGame.mousePressed(()=>{
        this.hide();
        game=new Game();
        
        form.nameInput.hide();
        form.button.hide();
        
        playerCount+=1;
        geek.index = playerCount;
        
        geek.updateCount(playerCount);
        geek.update();

        gs=1;
        game.updateState(gs);

      });

       
     }

     goToLesson(){
     if(lessonNumber==='1'){
     window.open("https://partners.disney.com/hour-of-code/wayfinding-with-code?cds"); 
     }
     if(lessonNumber==='2'){
      window.open("https://studio.code.org/flappy/1"); 
      }
      if(lessonNumber==='3'){
        window.open("https://csfirst.withgoogle.com/c/cs-first/en/animate-a-name/animate-a-name/animate-a-name.html"); 
        }
        if(lessonNumber==='4'){
          window.open("https://studio.code.org/s/oceans/stage/1/puzzle/2"); 
          }
          if(lessonNumber==='5'){
            window.open("https://www.codesters.com/curriculum/hour-of-code-2019/Basketball/2/"); 
            }

     }





  
 



}


    
  
  
  
