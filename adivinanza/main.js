/*let buttonClick = document.getElementById('button');
let palabraCaja = document.getElementById('palabra');*/

        function esPalindromo() {
            let es_palin = true;
            let cad = document.getElementById('palabra').value;
            let i = 0;
            let j = cad.length - 1;

            while ((i<j) && (es_palin)) {
                if (cad.charAt(i) == cad.charAt(j)) {
                    es_palin = true;
                } else {
                    es_palin = false
                }
                i++;
                j--;
            }
            console.log("palindromo = " + es_palin);
            return es_palin;
        }


    
   