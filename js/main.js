    const nomeCognome = document.getElementById('nomeCognome'); // COSTANTE NOME E COGNOME 
    const selezioneValore = document.getElementById('casellaSelezione'); //COSTANTE VALORE SELEZIONE
    const chilometri = document.getElementById('kmDaPercorrere'); //COSTANTE SCELTA CHILOMETRI
    const costoPerchilometro = 0.21; //COSTANET COSTO PER CHILOMETRO
    const prezzoBase = chilometri * costoPerchilometro;// COSTANTE COSTO BIGLIETTO SENZA SCONTI 
    const calcoloSconto20 = (prezzoBase * 20 / 100);// SCONTO APPLICATO 20%
    const calcoloSconto40 = (prezzoBase * 40 / 100);// SCONTO APPLICATO 40%
    const totaleconSconto20 = (prezzoBase - calcoloSconto20);// PREZZO TOTALE CON SCONTO DEL 20% PER MINORI DI 18 ANNI
    const totaleconSconto40 = (prezzoBase - calcoloSconto40);// PREZZO TOTALE CON SCONTO DEL 40% PER MAGGIORI DI 65 ANNI
    const numeroCarrozza = Math.floor((Math.random() * 10)) + 1;
    const codiceCp = Math.floor((Math.random() * 90000)) + 10000;

    

     
   
    

//BOTTONE PER INVIO DATI AL JS
    const inviaRichiesta = document.getElementById('inviaForm');
          inviaRichiesta.addEventListener('click',
          function() {
            console.log(nomeCognome.value);
            console.log(selezioneValore.value);
            console.log(chilometri.value);
            console.log(numeroCarrozza);
            console.log(codiceCp);
            document.getElementById('risultato').innerHTML = (nomeCognome.value); 
            document.getElementById('numeroCarrozza').innerHTML = (numeroCarrozza);
            document.getElementById('codiceCp').innerHTML = (codiceCp); 
            if (selezioneValore.value == 'bigliettoUnder18'){
                document.getElementById('typeTicket').innerHTML = "Biglietto ridotto del 20%";
            } else if (selezioneValore.value == 'bigliettoOver65'){
                document.getElementById('typeTicket').innerHTML = "Biglietto ridotto del 40%";
            } else{
                document.getElementById('typeTicket').innerHTML = "Biglietto Standard";
            };
            
          }


          );
//BOTTONE PER AZZERAMENTO CAMPI          
          const reset = document.getElementById('resetForm');      
          reset.addEventListener('click',
          function() {
            const azzeramentoCampi = document.getElementById('nomeCognome');
            const azzeramentoCampi1 = document.getElementById('casellaSelezione');
            const azzeramentoCampi2 = document.getElementById('kmDaPercorrere'); 
            azzeramentoCampi.value = "";
            azzeramentoCampi1.value = "";
            azzeramentoCampi2.value = "";
          }
          );