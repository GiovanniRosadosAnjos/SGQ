

// e-mails padrão para envio de documentos de auditoria para cliente



    function emailPadrao () { // E-mail padrão para envio do RELATÓRIO DE AUDITORIA
        const escopoMedical = document.getElementById ("Medical");
        const escopoEletro = document.getElementById ("Eletro");
        const escopoOMD = document.getElementById ("OMD");
        
        let memoria1 = document.querySelector ('#tipoDocumento');
        let valorDaOpção = memoria1.options [memoria1.selectedIndex];
        let documentoSelecionado = valorDaOpção.value;


       
        if (escopoMedical.checked) {
                switch (documentoSelecionado) {
                        case "Plano de Auditoria":
                        console.log ("você selecionou Plano de Auditoria (MEDICAL)"); break;
                        
                        case "Relatório de Auditoria":
                        console.log ("você selecionou Relatório de Auditoria (MEDICAL)"); break;
                
                        default: 
                        console.log ("Você não selecionou nenhum tipo de documento"); }} else;
                
        if (escopoEletro.checked) {
                switch (documentoSelecionado) {
                        case "Plano de Auditoria":
                        console.log ("você selecionou Plano de Auditoria (ELETRO)"); break;
                                
                        case "Relatório de Auditoria":
                        console.log ("você selecionou Relatório de Auditoria (ELETRO)"); break;
                        
                        default: 
                        console.log ("Você não selecionou nenhum tipo de documento"); }} else;

        if (escopoOMD.checked) {
                switch (documentoSelecionado) {
                        case "Plano de Auditoria":
                        console.log ("você selecionou Plano de Auditoria (OMD)"); break;
                                                
                        case "Relatório de Auditoria":
                        console.log ("você selecionou Relatório de Auditoria (OMD)"); break;
                                        
                        default: 
                        console.log ("Você não selecionou nenhum tipo de documento"); }}

}





















                
// E-mail PADRÃO para envio do RELATÓRIO DE AUDITORIA - Todos os escopos
        const emailMedical = "Assunto do e-mail: Medical 384, NomeDaEmpresa - Relatório de Auditoria Rev. 01 - Processo - [Mês. Ano] <br>"
        const emailEletro =  "Assunto do e-mail: Eletro 148, NomeDaEmpresa - Relatório de Auditoria Rev. 01 - Processo - [Mês. Ano] <br>"
        const emailOMD =  "Assunto do e-mail: OMD, NomeDaEmpresa - Relatório de Auditoria Rev. 01 - Processo - [Mês. Ano] <br>"

        const emailGeral = "Olá,  NomeDoCliente, boa tarde! <br>\
                Segue anexo o RELATÓRIO DE AUDITORIA, referente a auditoria realizada em xx/xx/xxxx. <br> <br>\
                Os próximos passos são: <br>\
                A QC CERT irá avaliar a documentação em conjunto com esse relatório; e <br>\
                se aprovado: Será emitido o Atestado de Acompanhamento e/ou certificado de conformidade; ou <br>\
                se não aprovado: você receberá um informe sobre os itens que precisam de adequação. <br> <br>" 
                                // os próximos passos são: [[9.4.7.2 e)] - [ISO 17021-1]




        const emailGeralNC = "Olá,  NomeDoCliente, boa tarde! <br> \
                        Segue anexo o RELATÓRIO DE AUDITORIA, referente a auditoria realizada em xx/xx/xxxx <br> \
                        Os próximos passos são: <br>  \
                        A NomedaEmpresa deverá responder os RNC e enviar para QC CERTIFICAÇÕES para avaliação"
