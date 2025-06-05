


// Calculadora potência sonora

//const btn = document.querySelector ("#send");
let total = 0;

//btn.addEventListener ("click", function(e) {

//        e.preventDefault ();



//});

function calcular () {
        var numeroDoCampo1_String = document.getElementById ("valor1").value;
        var numeroDoCampo1_Numero = parseFloat (numeroDoCampo1_String);

        var numeroDoCampo2_String = document.getElementById ("valor2").value;
        var numeroDoCampo2_Numero = parseFloat (numeroDoCampo2_String);

        var numeroDoCampo3_String = document.getElementById ("valor3").value;
        var numeroDoCampo3_Numero = parseFloat (numeroDoCampo3_String);

      
        var soma = numeroDoCampo1_Numero + numeroDoCampo2_Numero + numeroDoCampo3_Numero;
        var somaLimite4decimal = soma.toFixed (4);

        var media = soma/3;
        var mediaLimiteDecimal = media.toFixed (4)
        
        //arredondar a média abaixo
        var mediaArred = media.toFixed (0); var mediaArredNum = parseInt (mediaArred);
         
        // IMPRIMIR RESULTADOS NA TELA     
        document.getElementById ("soma").innerHTML  =  somaLimite4decimal;
        document.getElementById ("media").innerHTML  =  mediaLimiteDecimal;
        document.getElementById ("mediaArred").innerHTML  =  mediaArred;

        document.getElementById ("final").innerHTML  =  mediaArredNum + 3;
        total =  mediaArredNum + 3; 
}







function aualizouProduto () {
        let memoria1 = document.querySelector ('#SelecioneUmProduto');
        let valorDaOpção = memoria1.options [memoria1.selectedIndex];
        let produtoSelecionado = valorDaOpção.value;
                console.log ("Esse foi o produto selecionado:   " + produtoSelecionado);
                calcular ();
              

        if  (produtoSelecionado == "Aspirador") 
                {
                console.log ("Você selecionou um APIRADOR na condicional IF-ELSE");
                document.getElementById ("produtoSelecionado").innerHTML  =  produtoSelecionado;
                } else 
                
        if (produtoSelecionado == "Secador")
                {
                console.log ("Você selecionou um SECADOR na condicional IF-ELSE");
                document.getElementById ("produtoSelecionado").innerHTML  =  produtoSelecionado;
                secador ();
                } else

        if (produtoSelecionado == "Liquidificador") 
                {
                console.log ("Você selecionou um LIQUIDIFICADOR na condicional IF-ELSE");
                document.getElementById ("produtoSelecionado").innerHTML  =  produtoSelecionado;
                }
}


        

function secador () {
        if (total <= 78) {
                console.log ("O valor é menor ou igual a 78");

        } else 

        if (total  >78 & total <= 81) {
                console.log ("O valor é > que 78 e menor ou igual a 81 "); 
        }
       

}



        //var nova = parseFloat (prompt('informe o valor:   '));
      
        //const num = 123.456;
        //const str = num.toString();
        //const splitted = str.split('.');

        //const inteiro0 = parseInt (splitted[0]);
        //const decimal = parseInt (splitted[1] || 0);