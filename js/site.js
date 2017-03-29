var navSprites = ["chicken.png","sadguy.gif","craftbutton.png","monsterblob.png","anvil.png","commander.png","cappi.png"];
var lastSpriteIndex = -1;
var nextSpriteIndexes = [];
var navOpen = true;
var navSize = "230px";

function ArrowPressed()
{
    if (navOpen)
    {
      CloseNavbar();
    }
    else {
      OpenNavbar();
    }
}

function OpenNavbar()
{
    navOpen = true;    ChangeNavSprite();
    document.getElementById("navbar").style.width = navSize;
    if (window.innerWidth >= 800)
    {
      document.getElementById("main").style.marginLeft = navSize;
    }
    else {
      document.getElementById("main").style.marginLeft = "0px";
      document.getElementById("arrow").style.opacity = "0";
    }
    //document.getElementById("overlay").style.width = "100%";
    //document.getElementById("overlay").style.opacity = "0.8";    //document.getElementById("overlay").style.marginLeft = navSize;}

function CloseNavbar()
{
    navOpen = false;
    document.getElementById("arrow").style.opacity = "1";
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("overlay").style.opacity = "0.0";
    document.getElementById("overlay").style.marginLeft = "0";
    document.getElementById("locator").style.opacity="0";
    document.getElementById("locator").style.transform = "translate3d(100px,-100px,0px)";
}

function OnMouseOver(targ)
{
  if (navOpen)
  {
    var rect = targ.getBoundingClientRect();
    var x = (rect.right - 20) ;
    var y = (rect.top) ;
    var ss = "translate3d(" +x + "px, "+ y+"px, 0px)";
    document.getElementById("locator").style.opacity="1";
    document.getElementById("locator").style.transform = ss;
  }
}

function TouchNavSprite()
{
  document.getElementById("navsprite").style.transform="transition:scale(1.5)";
}

function ChangeNavSprite()
{
  if (lastSpriteIndex == -1)
  {
    lastSpriteIndex = 0;
    return;
  }
  if (nextSpriteIndexes.length == 0)
  {
    var indexList = [];
    for (var i = 0; i < navSprites.length; i++)
    {
      indexList.push(i);
    }
    while (indexList.length)
    {
        nextSpriteIndexes.push(indexList.splice(Math.floor(Math.random() * indexList.length), 1)[0]);
    }
    if (lastSpriteIndex != -1 && nextSpriteIndexes[0] == lastSpriteIndex)
    {
      nextSpriteIndexes.push(nextSpriteIndexes[0]);
      nextSpriteIndexes.shift();
    }
  }
  var nextSpriteIndex = nextSpriteIndexes[0];
  nextSpriteIndexes.shift();
  if (lastSpriteIndex == nextSpriteIndex)
  {
    nextSpriteIndex = (nextSpriteIndex+1) % navSprites.length;
  }
  lastSpriteIndex = nextSpriteIndex;
  document.getElementById("navsprite").src="images/" + navSprites[nextSpriteIndex];
}
