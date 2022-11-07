let constructores = []

let n_constructores = 5

let angulo = 50

function setup()
{
  let canvas = createCanvas(600, 600)
  
  canvas.parent("anim")
  colorMode(RGB,100,100,100,1)

  for(let i = 0; i < n_constructores ; i++)
  {

    let constructor = {
      x: 100,
      y: canvas.height - (canvas.height/6),
      scalar : 20,  // set the radius of circle
      startX : 100,	// set the x-coordinate for the circle center
      //startY = 5,	// set the y-coordinate for the circle center
      vy : random(-3.5,-1.5)
      
    }
    print('la posicion inicial de X es : '+ constructor.x + ' ' +[i])
    constructores.push(constructor)
  }

  background(0);
  angleMode(DEGREES);


}

function draw()
{
  fill(0)
  stroke(255);
  

  for(let i = 0; i < n_constructores ; i++)
  {
   
    constructores[i].x = (100*i) + (constructores[i].startX + constructores[i].scalar * cos(angulo));
    constructores[i].y += constructores[i].vy

    circle(constructores[i].x, constructores[i].y, 20)
    //print('la posicion y del circulo '+[i]+' es : '+constructores[i].y)
    //print('la posicion x del circulo '+[i]+' es : '+ constructores[i].x + ' ' +[i])

    if(constructores[i].y > (height - (height/7)) || constructores[i].y < (height/7)) {
      // invertir velocidad en y
      constructores[i].vy *= -1
      background(0,0,0,0.4)
    }
  }

  angulo += 10;	// incrementar angulo para el próximo frame


  
}