var database;
var form
var geek;
var allGeeks;
var geekName="";
var bg,bg2;
var playerCount;
var gs=0;;
var game;

var t=0;

var cb;

var cbi;

var inside;

var cbinside;

var lessonNumber=0;


function preload()
{
bg=loadImage("bg.jpg");
bg2=loadImage("bg2.jpg");
cbi=loadImage("cocoBuilding.jpg");
cbinside=loadImage("inside.jpg");
}
function setup() {
  createCanvas(800,400);
  database=firebase.database();



  start();

  
  
}
async function start()
{
  geek = new Geek();
  var playerCountRef = await database.ref('PlayerCount').once('value');
  if(playerCountRef.exists()){
    playerCount = playerCountRef.val();
    geek.getCount();
  }
  form = new Form()
  form.display();
}



function draw() {
  background(bg);

console.log(gs);
  if(gs===1)
  {   
    
    form.title.hide();
    
    game.displayGames();
    imageMode(CENTER);
    image(bg2,400,200,800,400);
  }

  if(gs===2)
  {

    window.open("https://kashikamahajan.github.io/Lucidium/");
    imageMode(CENTER);
    image(bg2,400,200,800,400);
    
  }

  if(gs===3)
  {
    window.open("https://studio.code.org/projects/gamelab/onIIKvJVMx8Oxkdnjlh1x6R7ZBREtM5PMPCpo0UNhOo");
    imageMode(CENTER);
    image(bg2,400,200,800,400);
  }
 if(gs===4)
 {
  window.open("https://studio.code.org/projects/gamelab/i4LynOObV7UqmwJ89VpD_Mr0IjzpU3gyoNnauTV3_I0");
  imageMode(CENTER);
    image(bg2,400,200,800,400);
 }

 if(gs===5)
 {
   
   cb=new cocoBuilding(); 
   cb.display();
 }
 if(gs===7)
 cb.display();

 if(gs===10)
 inside.display();
  
}