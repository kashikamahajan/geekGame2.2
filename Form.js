class Form
{
    constructor()
    {
        this.nameInput=createInput('Enter Geek Name');
        this.button=createButton('Start');
        this.greeting=createElement('h2');
        this.title=createElement('h2');
        this.playGame=createButton('Play Mind Refreshing Games');

    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.nameInput.hide();
        this.title.hide();
    }

    display()
    {
       
        

        this.title.html("The Geek Game");
        this.title.position(280,50);

        this.nameInput.position(310,275);
        this.button.position(360,350);

        this.playGame.position(600,10);

        this.button.mousePressed(()=>{
            
            game=new Game();

            this.nameInput.hide();
            this.button.hide();
            geekName=this.nameInput.value();
            playerCount+=1;
            geek.index = playerCount;
            
            geek.updateCount(playerCount);
            geek.update();

            gs=1;
            game.updateState(gs);
            
          });


          this.playGame.mousePressed(()=>{
            game=new Game();
            
            this.nameInput.hide();
            this.button.hide();
            
            playerCount+=1;
            geek.index = playerCount;
            
            geek.updateCount(playerCount);
            geek.update();

            gs=1;
            game.updateState(gs);

          });


    }
    

    
    
}