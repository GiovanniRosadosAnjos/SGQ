const fraseSuspender = "§ 3º Caso a planta fabril esteja com as atividades de produção suspensas em decorrência da guerra, o CERTIFICADO deve ser suspenso, nos termos do subitem 6.3.3.11 do RGCP, sendo considerados regulares no mercado os estoques fabricados e comercializados pelo importador antes da referida suspensão."
const limpar = ""

function plantaFabrilAtiva () {

    let fabricaFuncionandoSim = document.getElementById ("sim");
    let fabricaFuncionandoNao = document.getElementById ("não");

        if (fabricaFuncionandoSim.checked) {
            document.getElementById ("suspender").innerHTML = limpar;
        } else

            if (fabricaFuncionandoNao.checked) {
                
                document.getElementById ("suspender").innerHTML = fraseSuspender + "[Port. 597:2023 Art. 1º § 3º]";
                
                
            }
  
}