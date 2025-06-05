const EmailPTBR =   "Olá, xxxxxxxxxx. Parabéns pela certificação! <br> <br>" +  "\n" + 
                    "Segue anexo o certificado de conformidade. <br>"  +  "\n" + 

                    "Informamos que o certificado foi publicado no site do Inmetro e em até 72 horas ele estará" +  "\n" + 
                    "disponível para consulta pública. <br> <br>" +  "\n" + 

                    "<b>Importante: </b> <br>" +  "\n" + 
                            "a) O acompanhamento da certificação deverá ocorrer as cada xx meses. <br>"


const EmailEN =     "Hello, xxxxxxxxxx. Congratulations on your certification!! <br> <br>" +  "\n" + 
                    "The certificate of conformity is attached. <br>"  +  "\n" + 

                    "We would like to inform you that the certificate has been published on the Inmetro website and " +  "\n" + 
                    "will be available within 72 hours available for public consultation. <br> <br>" +  "\n" + 


                    "<b>Important:</b> <br>" +  "\n" + 
                            "a) The certification must be monitored every xx months.<br>" 



// ADVERTENCIA SOBRE SUSPENSÃO 
const advertenciaPT = "<br> Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção dentro dos" +  "\n" + 
                        "prazos abaixo resultará na suspensão do certificado. <br>" 
const advertenciaEN = "<br> As determined by the regulatory body (Inmetro/Cgcre), failure to complete maintenance" +  "\n" + 
                        "within the deadlines below will result in the certificate being suspended . <br>" 

const advertenciaPTsemEnsaio = "<br> Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção dentro dos " +  "\n" + 
                        "prazos abaixo e/ou não atualização da norma, (indicado em b)) resultará na suspensão do certificado. <br>" 
const advertenciaENsemEnsaio = "<br> As determined by the regulatory body (Inmetro/Cgcre), failure to complete maintenance" +  "\n" + 
                        "within the deadlines below and/or failure to update the standard, (indicated in b)), will result in the certificate being suspended . <br>" 


// Falta ensaios 
const FaltaPT = "b) Não foi atualizado a norma xxxxxxxxx para xxxxxxxxxx, o prazo para essa atualização é 31/12/2025. <br> <br>";
const FaltaEN = "b) The xxxxxxxxx standard has not been updated to xxxxxxxxxx, the deadline for this update is December 31, 2025.<br> <br>"; 



// Texto da tabela                     
const memoriaB1 = "Data de Emissão do <br> Certificado"
const memoriaB2 = "Certificate <br> Issue Date"

const memoriaC1 = "Prazo máximo para conclusão <br> da próxima manutenção (Mx)"
const memoriaC2 = "Maximum time for completion <br> of next maintenance (Mx)"







function idioma () {
    let radioPtBrSim = document.getElementById ("sim");
    let radioPtBrNao = document.getElementById ("não");

        if (radioPtBrSim.checked) {
            document.getElementById ("memoria1").innerHTML = EmailPTBR + advertenciaPT;
            document.getElementById ("containerB").innerHTML = memoriaB1;
            document.getElementById ("containerC").innerHTML = memoriaC1;
                       
        } else
            if (radioPtBrNao.checked) {
                document.getElementById ("memoria1").innerHTML = EmailEN + advertenciaEN; 
                document.getElementById ("containerB").innerHTML = memoriaB2;
                document.getElementById ("containerC").innerHTML = memoriaC2;
            }
}




function idioma2 () {
    let radioPtBrSim = document.getElementById ("sim2");
    let radioPtBrNao = document.getElementById ("não2");

        if (radioPtBrSim.checked) {
            document.getElementById ("memoria1").innerHTML = EmailPTBR + FaltaPT + advertenciaPTsemEnsaio;
            document.getElementById ("containerB").innerHTML = memoriaB1;
            document.getElementById ("containerC").innerHTML = memoriaC1;
                       
        } else
            if (radioPtBrNao.checked) {
                document.getElementById ("memoria1").innerHTML = EmailEN + FaltaEN + advertenciaENsemEnsaio; 
                document.getElementById ("containerB").innerHTML = memoriaB2;
                document.getElementById ("containerC").innerHTML = memoriaC2;
            }
}