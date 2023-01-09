{ 
    { 
        { 
            { var sera = "Será???" }
        
         }

         } 

        }
    console.log(sera); // é visível fora do bloco também

    function teste () {
        var local = 123;  //visivel somente na função
    }

    teste();
    //console.log(local);

    //var é visível global ou ou var é no escopo de função