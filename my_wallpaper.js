//your parameter variables go here!
let pinkColour= false

let circleSize=(100)
let McircleSize=(30)
let ScircleSize=(10)

let maincircleX=50
let maincircleY=50

let topLeftcircleX=10
let topLeftcircleY=5

let truemiddlecircleX=150
let truemiddlecircleY=150

let middleleftcircleX=10
let middleleftcircleY=50

let bottomleftcircleX=5
let bottomleftcircleY=150

let bottommiddlecircleX=40
let bottommiddlecircleY=180

let toprightcircleX=180
let toprightcircleY=20

let bottomrightcircleX=180
let bottomrightcircleY=185

let middlerightcircleX=170
let middlerightcircleY=90

let topmiddlecircleX= 50
let topmiddlecircleY= 10

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
 // pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  if(pinkColour == true){ 
    background(221,187,188)
  }
  else{
    background(212,218,182)
  }
 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  if(pinkColour == true){

        fill(11,10,10)
        stroke(11,10,10)
        drawMainCircle();

        fill(214,174,175)
        stroke(214,174,175)
        drawMedCircle();
        drawSmallCircle();
      
  }
  else{

        fill(146,93,93)
        stroke(220,205,191)
        drawMainCircle();

        fill(146,93,93)
        stroke(220,205,191)
        drawMedCircle();
        drawSmallCircle();

  }
}

  function drawMainCircle(){
    ellipse(maincircleX+50,maincircleY,circleSize)//top left circle
    ellipse(maincircleX+100,maincircleY+50,circleSize)//top right circle 
    ellipse(maincircleX,maincircleY+50,circleSize)//bottom left circle
    ellipse(maincircleX+50,maincircleY+100,circleSize)//bottom right circle
  }

  function drawMedCircle(){
    ellipse(topLeftcircleX,topLeftcircleY+5,McircleSize-10) //top left medium circle
    ellipse(truemiddlecircleX+10,truemiddlecircleY+20,McircleSize) //true middle medium circle
    ellipse(middleleftcircleX+10,middleleftcircleY+15,McircleSize-10) //middle left meduim circle
    ellipse(middleleftcircleX+30,middleleftcircleY,McircleSize-10) //middle left meduim circle between
    ellipse(bottomleftcircleX,bottomleftcircleY-20,McircleSize-10) //bottom left medium middle circle
    ellipse(bottomleftcircleX,bottomleftcircleY+30,McircleSize-10)//bottom left medium bottom circle 
    ellipse(bottommiddlecircleX-2,bottommiddlecircleY+10,McircleSize-10)//bottom middle medium bottom circle
    ellipse(bottommiddlecircleX-20,bottommiddlecircleY,McircleSize)//bottom middle medium left circle
    ellipse(toprightcircleX,toprightcircleY,McircleSize)//top right medium circle
    ellipse(bottomrightcircleX,bottomrightcircleY,McircleSize-5)//bottom right medium circle
    ellipse(middlerightcircleX,middlerightcircleY,McircleSize)//middle right medium circle
    ellipse(topmiddlecircleX-10,topmiddlecircleY+10,McircleSize)//top middle medium left circle
    ellipse(topmiddlecircleX+10,topmiddlecircleY,McircleSize)//top middle medium right circle
  }

  function drawSmallCircle(){
    ellipse(topLeftcircleX+10,topLeftcircleY,ScircleSize)//top left small right circle
    ellipse(topLeftcircleX-5,topLeftcircleY+15,ScircleSize) //top left small left circle
    ellipse(truemiddlecircleX,truemiddlecircleY,ScircleSize) //true middle small circle
    ellipse(middleleftcircleX,middleleftcircleY,ScircleSize) //middle left small circle
    ellipse(middleleftcircleX+15,middleleftcircleY+10,ScircleSize+5) //middle left small bottom circle
    ellipse(bottommiddlecircleX+10,bottommiddlecircleY+10,ScircleSize)//bottom middle small right bottom circle
    ellipse(bottommiddlecircleX+10,bottommiddlecircleY-5,ScircleSize+5)//bottom middle small right circle
    ellipse(bottommiddlecircleX-5,bottommiddlecircleY-7,ScircleSize)//bottom middle small top circle
  }

