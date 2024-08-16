let pontos = 0
let resposta
let inventario = []



historia();
function historia(){
    alert(`Olá, Eyeru! Sou seu assistente. Chegando em 50+ pontos, você poderá participar das Olimpíadas. (Aperte Enter para continuar)`)
    alert(`Há uma guerra acontecendo em seu país de origem, a Etiópia. (Aperte Enter para continuar)`)
    alert(`  /\\ \n /  \\ \n /____\\ \n ||`)
    alert(`Você está perto de uma região onde há muitos conflitos. Temendo por sua vida, você precisa fazer uma difícil escolha. (Aperte Enter para continuar)`)
     let resposta = Number(prompt(`[1] Caso queira fugir para os Estados Unidos\n[2] Caso queira continuar em seu país`))
     if(resposta == '1'){
        ato1()
    } 
    else{
        ato2()
        }
        

        alert(`Deseja armazenar uma lembrancinha de seu país em seu inventário?`)
        let respostaInv0 = Number(prompt(`[1] Sim\n[2] Não`))
        if(respostaInv0 == '1'){
            inventario.push("Lembrancinha")
            console.log(inventario)
        }
        
    }

    
function ato2(){
    alert("Você morreu em um confronto entre os militares, você estava indo comprar suprimentos quando foi surpreendida por uma bala perdida.");
    pontos -= 100
}


function ato1(){

    alert(`Você decidiu fugir para os Estados Unidos. (Aperte Enter para continuar)`)
    alert(`Chegando em seu novo País, você precisa novamente fazer uma difícil decisão. (Aperte Enter para continuar)`)
    let resposta2 = Number(prompt(`[1] Ficar em um pequeno apartamento em uma cidade perto de uma grande pista esportiva\n[2] Ficar em um apartamento maior porém perto do interior, com mais trilhas e espaços naturais`))
    
    alert(`Deseja armazenar a chave do seu apartamento em seu inventário?`)
    let respostaInv1 = Number(prompt(`[1] Sim\n[2] Não`))
    if(respostaInv1 == '1'){
        inventario.push("Chave")
        console.log(inventario)
    }
    
    
    if(resposta2 == '1'){
        apCidade()
    } 
    else{
        apInterior()
        }
        
    }

    function apCidade(){
        alert(`Você resolveu ficar com o apartamento perto da pista esportiva (Enter para prosseguir)`)
        alert(`Você vê seu vizinho praticando ciclismo na grande pista esportiva, ao fim do dia você decide:`)
        let resposta3 = Number(prompt(`[1] Pedir para participar\n[2] Não pedir`))
        if(resposta3 == '1'){
           consequencia()
        }else{
          sozinha()
        }
    }

    function apInterior(){
        alert(`Você decidiu ficar com o apartamento no interior, pois você prefere um lugar mais calmo.`)
        alert(`Certo dia, você está caminhando quando vê um grupo de ciclistas.`)
        let resposta4 = Number(prompt(`[1] - Pedir para participar\n[2] - Continuar o trajeto sozinha e posteriormente comprar uma bicicleta`))
        if(resposta4 == '1'){
            consequencia()
        }else{
            sozinha()
        }
    }
    //Checkpoint1


    function consequencia(){
        let primeiroCheck = true;
        while (primeiroCheck) {

        alert(`Você pediu para participar dos treinos diários.`)
        alert(`Você desenvolve uma extrema paixão pelo ciclismo.`)
        alert(`Após 3 meses praticando, você vê um anúncio para um torneio nacional de ciclismo.`)
        alert(`Por conta de você não possuir documentos oficiais, você decide:`)
        let resposta5 = Number(prompt(`[1] - Participar mesmo assim\n[2] - Ignorar o torneio Nacional e participar do torneio Estadual`))
        
        alert(`Progresso Salvo. Deseja ver seu inventário?`)
        let respostainv5 = Number(prompt(`[1] Sim\n[2] Não`))
        if(respostainv5 == '1'){
         console.log(inventario)
        }
        
        
        if(resposta5 == '1'){
            deportada()
        }else{
            estadual()
            primeiroCheck = false;
        }


    }} // aqui encerra o laço

    function sozinha(){
        pontos += 40
        console.log(pontos)
        alert(`Você decidiu praticar sozinha. Contudo, há diversos locais para treinar, o que ocasionou na sua profissionalização no esporte.`)
        alert(`Como esteve sozinha, não obteve indicação para o torneio Nacional, por isso participará do Estadual.`)
        
        alert(`Deseja armazenar a sua bicicleta em seu inventário?`)
        let respostaInv8 = Number(prompt(`[1] Sim\n[2] Não`))
        if(respostaInv8 == '1'){
            inventario.push("Bicicleta")
            console.log(inventario)
        }
        
        estadual();

        
    }

    function estadual(){
        pontos += 20
        console.log(pontos)
       alert(`Chegando no torneio, você é capaz de chegar em primeiro lugar.`)
       alert(`Com seu enorme feito, você obtém um rápido reconhecimento, o que chama atenção de um olheiro do time nacional de ciclismo.`)
       alert(`Esse olheiro chega em você e deseja saber mais sobre você`)
       alert(`Como você é imigrante, você decide:`)
       let resposta6 = Number(prompt(`[1] - Contar a verdade (que você não tem documentos)\n[2] - Mentir`))
       if(resposta6 == '1'){
        timeRefugiados()
       }else{
        mentira()
       }
       
       alert(`Deseja guardar a medalha em seu inventário? Progresso salvo.`)
       let respostainv4 = Number(prompt(`[1] Sim\n[2] Não`))
       if(respostainv4 == '1'){
        inventario.push("Medalha")
        console.log(inventario)
       }
       

    }



    //Checkpoint2
    function timeRefugiados(){
        let segundoCheck = true
        while(segundoCheck){

        pontos += 20
        console.log(pontos)
        alert(`Você decidiu falar a verdade, oque causou na sua indicação com prioridade para o time de refugiados.`)
        alert(`Você se junta ao time olímpico de refugiados na área de ciclismo.`)
        alert(`Dias antes das olímpiadas, durante um treinamento, você acaba se lesionando em uma pista, causando fortes dores no seu braço (possível deslocamento)`)
        alert(`Visitar um médico seria a opção ideal, mas haveria chances de você não conseguir participar das olimpíadas, 50% de chance dos dois lados.`)
        alert(`Tudo dependeria do sistema de atendimento médico, você decide:`)
        let resposta7 = Number(prompt(`[1] - Ir ao médico\n[2] - Ignorar as fortes dores`))
        if(resposta7 == '1'){
            medico();
            segundoCheck = false;
        }else{
            seFerrou()
        }
    }}

    function derrota() {
        console.log(`Derrota, o player ficou com ${pontos} pontos.`)
        alert(`Não foi dessa vez, tente novamente! :(`)
    }

    function olimpiadas(){
        console.log(`Vitória, o player ficou com ${pontos}`)
        alert(`Você foi às olimpíadas, e você ficou em primeiro colocado em ciclismo no time dos refugiados! Parabéns, você merece.`)
        alert(`Deseja guardar a medalha olímpica em seu inventário? Progresso salvo.`)
        let respostainv10 = Number(prompt(`[1] Sim\n[2] Não`))
        if(respostainv10 == '1'){
         inventario.push("Medalha Olímpica")
         console.log(inventario)

         if(pontos>=50){
            perguntar = Number(prompt("[1] - Recomeçar o jogo\n[2] - Finalizar o jogo"))
            switch(perguntar){
                case 1:
                    segundoCheck = 0
                    primeiroCheck = 0
                    historia()
                    break;

                    case 2:
                        segundoCheck = 0 
                        primeiroCheck = 0
                        return true
            }
         }
        }
    }


    function seFerrou(){
        alert(`Suas dores não passaram, no dia de ir às olimpíadas sua condição de saúde piorou, obrigando você a não participar.`)
        derrota()
    }

    function medico(){
        pontos += 10
        console.log(pontos)
        alert(`Você decidiu ir ao médico, cujo atendimento foi extremamente rápido, possibilitando sua ida às olímpiadas sem nenhuma lesão.`)
        olimpiadas()
    }

    function deportada(){
        alert(`Você foi deportada. (Game Over)`)
        pontos -= 100
        console.log(pontos)
    }

    function mentira(){
        alert(`Você decidiu mentir sobre sua identidade, oque causou sua desclassificação para as olimpíadas.`)
        pontos -= 100
        console.log(pontos)
    }