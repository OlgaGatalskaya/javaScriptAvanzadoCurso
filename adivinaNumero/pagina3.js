
onload = demostrarResultados;


        var tBody = document.getElementById('tabla');
        //console.log(cuerpoTabla)
        var partida = JSON.parse(localStorage.getItem ('partida'));
        console.log(partida)

        

        function demostrarResultados () {
            partida.forEach((el) => {
                var tr = document.createElement('tr');
                var tdNombre = document.createElement('td');
                tdNombre.innerHTML = el.nombre;
                tr.appendChild(tdNombre);
                var tdIntentos = document.createElement('td');
                tdIntentos.innerHTML = el.intentos;
                tr.appendChild(tdIntentos)
                tBody.appendChild(tr);
                
               
                
            });
            
        }


        function borrarTabla () {
            //tBody.remove();
            tBody.innerHTML="";
        }
        

       function ordenar() {
           borrarTabla()
              partida.sort (function (a, b) {
                let  resultado_comparacion = 0
                if (a.nombre > b.nombre) {
                    resultado_comparacion = 1;
                  }
                  if (a.nombre < b.nombre) {
                    resultado_comparacion = -1;
                  }
                  // a must be equal to b
                  
                  return resultado_comparacion;
              });
            demostrarResultados();
              console.log(partida)
       }   
    
       
             
        
              
        
