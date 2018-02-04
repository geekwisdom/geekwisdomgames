/*******************************************************************************************************************************************************
 .----------------.  .----------------.  .----------------.  .----------------.                                         
| .--------------. || .--------------. || .--------------. || .--------------. |                                        
| |    ______    | || |  _________   | || |  _________   | || |  ___  ____   | |                                        
| |  .' ___  |   | || | |_   ___  |  | || | |_   ___  |  | || | |_  ||_  _|  | |                                        
| | / .'   \_|   | || |   | |_  \_|  | || |   | |_  \_|  | || |   | |_/ /    | |                                        
| | | |    ____  | || |   |  _|  _   | || |   |  _|  _   | || |   |  __'.    | |                                        
| | \ `.___]  _| | || |  _| |___/ |  | || |  _| |___/ |  | || |  _| |  \ \_  | |                                        
| |  `._____.'   | || | |_________|  | || | |_________|  | || | |____||____| | |                                        
| |              | || |              | || |              | || |              | |                                        
| '--------------' || '--------------' || '--------------' || '--------------' |                                        
 '----------------'  '----------------'  '----------------'  '----------------'                                         
 .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| | _____  _____ | || |     _____    | || |    _______   | || |  ________    | || |     ____     | || | ____    ____ | |
| ||_   _||_   _|| || |    |_   _|   | || |   /  ___  |  | || | |_   ___ `.  | || |   .'    `.   | || ||_   \  /   _|| |
| |  | | /\ | |  | || |      | |     | || |  |  (__ \_|  | || |   | |   `. \ | || |  /  .--.  \  | || |  |   \/   |  | |
| |  | |/  \| |  | || |      | |     | || |   '.___`-.   | || |   | |    | | | || |  | |    | |  | || |  | |\  /| |  | |
| |  |   /\   |  | || |     _| |_    | || |  |`\____) |  | || |  _| |___.' / | || |  \  `--'  /  | || | _| |_\/_| |_ | |
| |  |__/  \__|  | || |    |_____|   | || |  |_______.'  | || | |________.'  | || |   `.____.'   | || ||_____||_____|| |
| |              | || |              | || |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------' 

This is the main Don't poke the bear javascript game.
Version 0.1 BETA
http://geekwisdom.org
*******************************************************************************************************************************************************/


function startgame(gameboard,startlevel)
{
startgame.Gameboard=gameboard;
startgame.level=startlevel;
//start game at level level
var pattern=[];
var patternlen;
if (startlevel < 5)
{
startgame.arraysize=3;
patternlen=startlevel;
}


if( typeof startgame.lastimgrow == 'undefined' ) 
    {
        startgame.lastimgrow = 0;
    }

if( typeof startgame.lastimgrow == 'undefined' ) 
    {
        startgame.lastimgrow = 0;
    }

if( typeof startgame.lastimgcol == 'undefined' ) 
    {
        startgame.lastimgcol = 0;
    }

if( typeof startgame.lastx == 'undefined' ) 
    {
        startgame.lastx = 0;
    }

if( typeof startgame.lasty == 'undefined' ) 
    {
        startgame.lasty = 0;
    }
if( typeof startgame.lastimgcol == 'undefined' ) 
    {
        startgame.lastimgcol = 0;
    }

startgame.gameover = false;

var setImageVisible = function (id, visible) 
{
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

var jumpscare = function()
{
gameover=true;
startgame.Gameboard.innerHTML="<img src='beargrowl.png' />";
playsound("beargrowl.mp3");
startgame.gameover=true;
setTimeout(function(){ window.location="./level="+startgame.level}, 1500);
return;
}

var playsound= function()
{
var audio = new Audio(soundfile);
audio.play();
}

var drawtable = function(cols,rows,onmouse,mouseout)
{
   var body = gameboard 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 0; i < rows; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j < cols; j++) {

      var cell = document.createElement("td");
      cell.setAttribute("style","height:100px;width:100px");
      cell.addEventListener("click",clicked);
          row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
 tbl.addEventListener("mouseover",onmouse);
tbl.addEventListener("mouseout",mouseout);

 tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
 //tbl.setAttribute("border", "2")
  tbl.setAttribute("style","margin: 0px auto;");
  tbl.style.tableLayout="fixed"
}

var insultarray = function(num)
{
var insultarray=[];
var insults="";
for (i=0;i<num;i++)
insultarray[i]=doinsult();
return insultarray;
}


var onmouse = function(e)
{

 var x=e.target.cellIndex;
 var y=e.target.parentNode.rowIndex;


  if ((typeof(x) != "undefined") &&  (typeof(y) != "undefined"))
 {
 var tbl = startgame.Gameboard.getElementsByTagName("table")[0];
 var lastcell=tbl.rows[startgame.lasty].cells[startgame.lastx];
lastcell.setAttribute("style","height:100px;width:100px;background-color:transparent;");
 var cell=tbl.rows[y].cells[x];
var thenum=pattern[key];
console.log(thenum); 
 var randx = (thenum % startgame.arraysize) - 1;

 var randy = Math.floor(thenum / startgame.arraysize);
 if (randx < 0) 
 { randx=startgame.arraysize-1;
   randy--;
}
 if ((y == randy) && (x == randx))
 {
cell.innerHTML="&nbsp;"; 
cell.setAttribute("style","height:100px;width:100px;background-color:green;");
 }
 else
 {
 cell.setAttribute("style","height:100px;width:100px;background-color:red;");
 cell.innerHTML="&nbsp;";
 }
 startgame.lastx=x;
 startgame.lasty=y;
}
else
 {
 var tbl = startgame.Gameboard.getElementsByTagName("table")[0];
 var lastcell=tbl.rows[startgame.lasty].cells[startgame.lastx];
lastcell.innerHTML="&nbsp;";
 lastcell.setAttribute("style","height:100px;width:100px;background-color:transparent;");

 }
}

var mouseout = function()
{
 var tbl = startgame.Gameboard.getElementsByTagName("table")[0];
 var lastcell=tbl.rows[startgame.lasty].cells[startgame.lastx];
 lastcell.innerHTML="&nbsp;";
 lastcell.setAttribute("style","height:100px;width:100px;background-color:transparent");
var show = Math.floor(Math.random() * 100);
 if (show > 60)
 {
 var msg=document.getElementById("msg");

 sayangel(msg);
}
 }


var deleteimage = function(row,col)
{
var table = startgame.Gameboard.getElementsByTagName("table")[0];
var thecell=table.rows[row].cells[col];
thecell.innerHTML="&nbsp;";
}

var placeimage = function(row,col,image)
{
//add bear to row and col
 var table = startgame.Gameboard.getElementsByTagName("table")[0];
 var thecell=table.rows[row].cells[col];
  var img = document.createElement('img');
    img.src = image;
   thecell.appendChild(img);
}
	

var placerandom = function()
{
if (startgame.gameover == false)
 {
var x=Math.floor((Math.random() * startgame.arraysize) + 1);
var y=Math.floor((Math.random() * startgame.arraysize) + 1);
x=x-1;
y=y-1;
deleteimage(startgame.lastimgrow,startgame.lastimgcol);
placeimage(x,y,"bear.png");
startgame.lastimgrow=x;
startgame.lastimgcol=y;
domessages();
setTimeout(function(){ placerandom();}, 1500);
 }
}


var clicked = function()
{
var col = this.cellIndex; 
var row=this.parentNode.rowIndex;
if ((col == startgame.lastimgcol) && (row == startgame.lastimgrow)) 
	{
	msg=document.getElementById("msg");
	if (insults.length < 1)
		 {
		 startgame.jumpscare();
		 }
	 else
		 {
		setImageVisible("devil",true);
		setImageVisible("angel",false); 
		msg.textContent=insults.pop();
 		}
	}
var thenum=pattern[key]; 
var randx = (thenum % startgame.arraysize) - 1;

var randy = Math.floor(thenum / startgame.arraysize);
if (randx < 0) 
 { 
	randx=startgame.arraysize-1;
   	randy--;
  }

if ((row == randy) && (col == randx))
 {
  key++;
	if (key >= pattern.length)
	 {
	 alert ("You win!");
	startgame.gameover=true;
       window.localStorage.setItem("pokeround",parseInt(startgame.level)+1);
       setTimeout(function(){ window.location="./?level="+startgame.level}, 1500);
	 return;
	 }
 }
}


var evilmessage = function(theitem)
{
//return an evil 'tempting' message
var firsttime=false;
if( typeof evilmessage.master == 'undefined') 
 {
 firsttime=true;
 }
if (firsttime)
 {
evilmessage.master=["I know what your thinking!","It's really tempting isn't it?","Look at that %item% just jumping around there","That %item% is taunting you","How can you stand it?","Just one little poke...","It can't be that bad can it?","What could possibly happen?","I heard your friend poked the %item% and survived","You know you want to!","You want an invitation or something?","You only live once..right?","All the cool kids are poking the %item%","Wow! I can't believe you've waited so long. Good Job!","How can you stand it?","Be careful, Be very very careful.","What if the secret of life is revealed when you poke the %item%","na na na boo boo - you can't catch me.","Fast as fast can be, you'll never catch me!","Resistance is futile","Come over to the dark side..We have cookies!","What are you waiting for?"];
}
 
if (evilmessage.master.length == 0 && !firsttime)
 {
evilmessage.master=["I know what your thinking!","It's really tempting isn't it?","Look at that %item% just jumping around there","That %item% is taunting you","How can you stand it?","Just one little poke...","It can't be that bad can it?","What could possibly happen?","I heard your friend poked the %item% and survived","You know you want to!","You want an invitation or something?","You only live once..right?","All the cool kids are poking the %item%","Wow! I can't believe you've waited so long. Good Job!","How can you stand it?","Be careful, Be very very careful.","What if the secret of life is revealed when you poke the %item%?","na na na boo boo - you can't catch me.","Fast as fast can be, you'll never catch me!","Resistance is futile","Come over to the dark side..We have cookies!","What are you waiting for?"];
evilmessage.master = shuffle(evilmessage.master);
 }
 

var retval=evilmessage.master.shift();
retval=retval.replace("%item%",theitem);
return retval;
}


var angelmessage=function(theround)
{
//return an angel 'tempting' message
var firsttime=false;
if( typeof angelmessage.master == 'undefined') 
 {
 firsttime=true;
}
if (theround < 2 && firsttime)
 {
angelmessage.master=["Well, you're not going to advance to the next round - if you don't click anything!","Hmm.... Have you noticed some blocks change color when you move your mouse nearby?","What if you clicked on one of those spots? Would that be okay?","Well, What are you waiting for?"];
}
 
if (angelmessage.master.length == 0 && !firsttime)
 {
angelmessage.master=["There is a pattern, there is always a pattern!","I think you're starting to get it now.","Your getting closer, dont' stop now","Maybe you need a break? You can walk away and come back anytime!","Way to go! - You're a superstar !"];
angelmessage.master = shuffle(angelmessage.master);
}
var retval=angelmessage.master.shift();
//retval=retval.replace("%item%",theitem);
return retval;

} 

var sayevil = function(msg)
{
setImageVisible("devil",true);
setImageVisible("angel",false); 
msg.setAttribute("style","color:red;");
msg.innerHTML=evilmessage("bear");

}

var sayangel = function(msg)
{
setImageVisible("devil",false);
setImageVisible("angel",true); 
msg.setAttribute("style","color:white;");
msg.innerHTML=angelmessage(1);
}

var clearmsg = function(msg)
{
setImageVisible("devil",false);
setImageVisible("angel",false); 
msg.textContent="";
}

var domessages = function()
{
var show = Math.floor(Math.random() * 100);
if (show > 75) 
 {
var msg=document.getElementById("msg");
var r = Math.floor(Math.random() * 100);
console.log(r);
clearmsg(msg);
if (r > 60 && r < 90) sayevil(msg);
 }
}


var insults=insultarray(startgame.arraysize * startgame.arraysize); 
var key=0;
for (var i=0;i<patternlen;i++)
{
pattern[i]=Math.floor(Math.random() * (startgame.arraysize * startgame.arraysize))+1;
}
drawtable(startgame.arraysize,startgame.arraysize,onmouse,mouseout);
placerandom();




}
