        // const numbersList = [1, 2, 3, 4, 5];
        // for (var i = 0; i < numbersList.length; i++) {
        //     var element = numbersList[i]
        //     console.log(element)
        // }


        // numbersList.forEach(element=>console.log(element))

        // exibirNumero(1)

        function exibirNumero(cabecaDeCachorro){
            console.log(cabecaDeCachorro)
        }

    

        const numbersList = [1, 2, 3, 'a'];
        numbersList.forEach( chuchu => console.log(chuchu) )

        // 1 passo colocar a funcao no foreach
        numbersList.forEach(function exibirNumero(cabecaDeCachorro){
            console.log(cabecaDeCachorro)
        })

        // 2 passo funcao anonima
        numbersList.forEach(function (cabecaDeCachorro){
            console.log(cabecaDeCachorro)
        })

        // 3 passo arrow function
        numbersList.forEach((cabecaDeCachorro)=>{
            console.log(cabecaDeCachorro)
        })

        // 4 passo tirei as chaves e coloquei na mesma linha
        numbersList.forEach( (cabecaDeCachorro)=> console.log(cabecaDeCachorro) )

        // 5 passo tirei os parenteses
        numbersList.forEach(cabecaDeCachorro=>console.log(cabecaDeCachorro))

        

        //         exibirNumero(1)
        //         exibirNumero('a')

        // o foreach chama a funcao para cada elemento da lista, passando o elemento como parametro

        // exibirNumero(1)