     const nomeCognome = document.getElementById('nomeCognome');
          
     const numeroChilometri = document.getElementById('kmDaPercorrere');

     const tipoBiglietto = document.getElementById('fasciaEta') 
     
     const prezzoKm = 0.21; 
     
     const prezzoViaggio = numeroChilometri * prezzoKm;

     const  minorenne = (prezzoViaggio * 20 / 100) 
     
     const  over = (prezzoViaggio * 40 / 100)     
  
     const totalMino = (prezzoViaggio - minorenne); 

     const totalOver = (prezzoViaggio - over); 

     const bigliettoMinorenne =document.getElementById('minorenne'); 




const generaDom = document.getElementById('buttonGenera');
      generaDom.addEventListener('click', 
      function () { 
         console.log(nomeCognome.value)
         console.log(numeroChilometri.value);
         console.log(tipoBiglietto.value)
      }
      );


if (tipoBiglietto.value = minorenne){
    document.getElementById('prezzo').innerHTML = (totalMino.toFixed(2));
}    