
 function getRndInteger(min, max)
{
    return Math.floor(Math.random() * (max - min) ) + min;
}
function NewArrayCudrate(length)
{
    var Nuevo = new Array(length * 2);
    for (let index = 0; index < Nuevo.length; index++) 
    {
        Nuevo[index] = new Array(length);
    }
    return Nuevo;
}

//Logica

//Creamos el juego de la vida
 function CrearJuegoDeLaVida(size)
{
    //Variable que guarda el juego de la vida
    var Game = NewArrayCudrate(size)
    //LLenamos el Juego de la vida
    for (let i = 0; i < Game.length; i++) 
    {
        for (let j = 0; j < Game.length; j++) 
        {
            //Generamos un valor del 0 al 100
            Game[i][j] = getRndInteger(0,100);
        }      
    }
    //Comprobamos si estan vivas o muertas
    for (let i = 0; i < Game.length; i++) 
    {
        for (let j = 0; j < Game.length; j++) 
        {
            //50% De probabilidad para cada una
            if(Game[i][j] >= 50)
            {
                Game[i][j] = 1;
            }
            else
            {
                Game[i][j] = 0;
            }   
        }      
    }
    //Retornamos el juego creado
    return Game;
}

function ReglasDeJuego(Tipo,Game)
{
 switch (Tipo) 
    {
     case "Fantasia":
         
         break;
     case "Terreno":

         break;
     case "Sebastian":         
            var derecha = 0;
            var izquierda = 0;
            var abajo = 0;
            var arriba = 0;
            var total = 0;
         //Ver cada casilla
         for (let i = 0; i < Game.length; i++) 
         {
             for (let j = 0; j < Game.length; j++) 
             {
                 //Arriba
                 if(i == 0)
                 {
                    
                    if( Game[Game.length  - 1][j] == 1)
                    {
                        arriba = 1;
                    }
                    else
                    {
                        arriba = 0;
                    }
                 }
                 else
                 {
                    if( Game[i - 1][j] == 1)
                    {
                       arriba = 1;
                    }
                    else
                    {
                       arriba = 0;
                    }
                }
                if(arriba == 1)
                {
                    total++;
                }
                //Abajo
                if(i == Game.length  - 1)
                {
                   
                   if( Game[0][j] == 1)
                   {
                       abajo = 1;
                   }
                   else
                   {
                       abajo = 0;
                   }
                }
                else
                {
                   if( Game[i + 1][j] == 1)
                   {
                      abajo = 1;
                   }
                   else
                   {
                      abajo = 0;
                   }
               }
               //Derecha
               if(j == Game.length  - 1)
               {
                  
                  if( Game[i][0] == 1)
                  {
                      derecha = 1;
                  }
                  else
                  {
                      derecha = 0;
                  }
               }
               else
               {
                  if( Game[i][j + 1] == 1)
                  {
                     derecha = 1;
                  }
                  else
                  {
                     derecha = 0;
                  }
              }
              //izquierda
              if(j == 0)
              {
                 
                 if( Game[i][Game.length - 1] == 1)
                 {
                     izquierda = 1;
                 }
                 else
                 {
                     izquierda = 0;
                 }
              }
              else
              {
                 if( Game[i][j - 1] == 1)
                 {
                    izquierda = 1;
                 }
                 else
                 {
                    izquierda = 0;
                 }
             }
             if (izquierda == 1) {
                total++;
             }
               if(arriba == 1)
               {
                   total++;
               }
               if(abajo == 1)
               {
                   total++;
               }
               if(derecha == 1)
               {
                   total++;
               }
               if (total == 2 || total == 3)
               {
                        Game[i][j] = 1;   

               }
               else{
                Game[i][j] = 0;
               }    
               
                izquierda = 0;
                derecha = 0;
                total = 0;
                arriba = 0;
                abajo = 0;
            }
         }
     break;
    }
 return Game;
}


 //Grafica




//Vemos el juego
function VerJuegoDeLaVidaPorConsola(Game)
{
    for (let i = 0; i < Game.length; i++) 
    {
        //Iteramos en cada unidad de la fila para crear la linea con los datos
        var string = "";
        Game[i].forEach(Celula => {
                //Miramos si esta viva o muerta
                if([Celula] == 0)
                {
                string += " ";
                }
                else
                {
                    string += "*";
                }
        });
        console.log(string);
    }
}

