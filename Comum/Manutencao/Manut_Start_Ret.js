


const Introdução =      "Olá, xxxxxxxxxxx. <br>" +  "\n" +
                        "Informamos que o ciclo deste acompanhamento foi iniciado. <br> <br>";

const DocumentaçãoComEnsaios =  "Segue anexo a lista de documentos e plano de ensaios, necessários para a manutenção do certificado neste ciclo. <br> <br>";
const DocumentaçãoSemEnsaios =  "Segue anexo a lista de documentos necessários para a manutenção do certificado neste ciclo. <br> <br>";


const DadosContatoAud = "Para prosseguirmos com o agendamento da auditoria de fábrica peço que nos" +  "\n" +
                                "informe os dados de contato (nome, e-mail e telefone) do fabricante. <br> <br>";

const TituloTab = "Dados do produto sob manutenção:";

const AdvertenciaComEnsaios =      "Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção" +  "\n" +
                                        "dentro do prazo e/ou não atualização da norma, resultará na suspensão do certificado.<br>";
const AdvertenciaSemEnsaios =      "Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção " +  "\n" +
                                        "dentro do prazo resultará na suspensão do certificado.<br>";


// Envio de pendências após a 1ª AVALIAÇÃO
const RetornoAvaliação =        "Olá, xxxxxxxxxxx. <br>" +  "\n" +
                                "Informamos que a AVALIAÇÃO DA MANUTENÇÃO foi realizada e foi constatado pendência. <br>" +  "\n" +
                                "Segue anexo a lista de pendências para conclusão da manutenção."




const Tabela_L1C1 = "Certificado:";
const Tabela_L2C1 = "Manutenção número:";
const Tabela_L3C1 = "Vencimento da manutenção:";

const A1PT = "Start de Manutenção COM ENSAIOS/ATUALIZAÇÃO";
const A2PT = "Start de Manutenção SEM ENSAIOS/ATUALIZAÇÃO";
const B1PT = "Envio de Pendências COM necessidade de ENSAIOS/ATUALIZAÇÃO";
const B2PT = "Envio de Pendências SEM necessidade de ENSAIOS/ATUALIZAÇÃO";

function aualizouProduto () {
    let memoria1 = document.querySelector ('#IdentificadorProduto');
    let valorDaOpção = memoria1.options [memoria1.selectedIndex];
    let valor = valorDaOpção.value;

    
    

    console.log (valor);
   

    // A1PT - Start de Manuteção COM atualização de norma
    // A2PT - Start de Manuteção SEM atualização de norma
    // B1PT - Envio de Pendência COM atulização de norma
    // B2PT - Envio de Pendência SEM atulização de norma




switch (valor) {
    

    case 'A1PT': // Start de Manuteção COM atualização de norma
        document.getElementById ("Tabela").style.display = 'block';
        document.getElementById ("TipoDeManutenção").innerHTML = A1PT;
        document.getElementById ("linha1").innerHTML = Introdução + DocumentaçãoComEnsaios + DadosContatoAud + TituloTab;
        document.getElementById ("linha2").innerHTML = AdvertenciaComEnsaios; 
        
        //preenchimento da tabela
        document.getElementById ("tb1.1").innerHTML = Tabela_L1C1;
        document.getElementById ("tb1.2").innerHTML = Tabela_L2C1;
        document.getElementById ("tb1.3").innerHTML = Tabela_L3C1;
        break;

    case 'A2PT':  // Start de Manuteção SEM atualização de norma
        document.getElementById ("Tabela").style.display = 'block';
        document.getElementById ("TipoDeManutenção").innerHTML = A2PT;
        document.getElementById ("linha1").innerHTML = Introdução + DocumentaçãoSemEnsaios + DadosContatoAud + TituloTab;
        document.getElementById ("linha2").innerHTML = AdvertenciaSemEnsaios; 

        //preenchimento da tabela
        document.getElementById ("tb1.1").innerHTML = Tabela_L1C1;
        document.getElementById ("tb1.2").innerHTML = Tabela_L2C1;
        document.getElementById ("tb1.3").innerHTML = Tabela_L3C1;
        break;

    case 'B1PT':  
        document.getElementById ("TipoDeManutenção").innerHTML = B1PT;
        document.getElementById ("linha1").innerHTML = RetornoAvaliação; 
        document.getElementById ("Tabela").style.display = 'none';
        break;
        

    case 'B2PT':
        document.getElementById ("TipoDeManutenção").innerHTML = B2PT; 
        document.getElementById ("Tabela").style.display = 'none';  
  } // fim DO switch


} // sim da FUNCTION 