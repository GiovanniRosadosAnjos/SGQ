const EmailPTBR = "Olá, xxxxxxxxxx. Parabéns pela conclusão da Manutenção! <br> <br>" +  "\n" + 
"Segue anexo o atestado de conclusão deste ciclo. <br> <br>"  +  "\n" +  

"<b>Importante: </b> <br>" +  "\n" + 
"O acompanhamento da certificação deverá ocorrer as cada xx meses." +  "\n" + 
"Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção dentro dos" +  "\n" + 
"prazos abaixo resultará na suspensão do certificado. <br>" 

const EmailEN = "Hello, xxxxxxxxxx. Congratulations for the completion of Maintenance! <br> <br>" +  "\n" + 
"Attached is the certificate of completion of this cycle. <br> <br>"  +  "\n" + 

"<b>Important:</b> <br>" +  "\n" + 
"The certification must be monitored every xx months." +  "\n" + 

"As detrmined by the regulatory body (Inmetro/Cgcre), failure to complete maintenance " +  "\n" + 
"within the deadlines below will result in the certificate being suspended. <br>" 




const TextoSemEnsaiosPT = "Olá, xxxxxxxxxx. Parabéns pela conclusão da Manutenção! <br> <br>" +  "\n" + 
"Segue anexo o atestado de conclusão deste ciclo. <br> <br>"  +  "\n" +  

"<b>Importante: </b> <br>" +  "\n" + 
"a) O acompanhamento da certificação deverá ocorrer as cada xx meses. <br>" +  "\n" + 
"b) Não foi atualizado a norma xxxxxxxxx para xxxxxxxxxx, o prazo para essa atualização é 31/12/2025. <br> <br>" +  "\n" + 


"Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção dentro dos" +  "\n" + 
"prazos abaixo e/ou não atualização da norma, (indicado em b)) resultará na suspensão do certificado. <br>" 

const TextoSemEnsaiosEN = "Hello, xxxxxxxxxx. Congratulations for the completion of Maintenance!<br> <br>" +  "\n" + 
"Attached is the certificate of completion of this cycle.  <br> <br>"  +  "\n" +  

"<b>Important: </b> <br>" +  "\n" + 
"a) The certification must be monitored every xx months. <br>" +  "\n" + 
"b) The xxxxxxxxx standard has not been updated to xxxxxxxxxx, the deadline for this update is December 31, 2025 <br> <br>" +  "\n" + 


"By determination of the regulatory body (Inmetro/Cgcre) failure to complete maintenance within the deadlines below" +  "\n" + 
"and/or failure to update the standard (indicated in b)), will result in the suspension of the certificate. <br>" 






const memoriaB1 = "Data de Emissão do <br> Certificado"
const memoriaB2 = "Certificate <br> Issue Date"

const memoriaC1 = "Prazo máximo para conclusão <br> da próxima manutenção (Mx)"
const memoriaC2 = "Maximum time for completion <br> of next maintenance (Mx)"







function idioma () 
{
    let radioPtBrSim = document.getElementById ("sim");
    let radioPtBrNao = document.getElementById ("não");

        if (radioPtBrSim.checked) {
            document.getElementById ("memoria1").innerHTML = EmailPTBR;
            document.getElementById ("containerB").innerHTML = memoriaB1;
            document.getElementById ("containerC").innerHTML = memoriaC1;
                       
        } else
            if (radioPtBrNao.checked) {
                document.getElementById ("memoria1").innerHTML = EmailEN;
                document.getElementById ("containerB").innerHTML = memoriaB2;
                document.getElementById ("containerC").innerHTML = memoriaC2;
            }
  }

function idiomaFaltaEnsaio () 
{
    let radioPtBrSim = document.getElementById ("sim2");
    let radioPtBrNao = document.getElementById ("não2");

        if (radioPtBrSim.checked) {
            document.getElementById ("memoria1").innerHTML = TextoSemEnsaiosPT;
            document.getElementById ("containerB").innerHTML = memoriaB1;
            document.getElementById ("containerC").innerHTML = memoriaC1;
                       
        } else
            if (radioPtBrNao.checked) {
                document.getElementById ("memoria1").innerHTML = TextoSemEnsaiosEN;
                document.getElementById ("containerB").innerHTML = memoriaB2;
                document.getElementById ("containerC").innerHTML = memoriaC2;
            }
  }