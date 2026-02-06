let jogador = "ZeeM"
let qtVitorias = 110
let qtDerrotas = 9
let resultado = 0
let resultadoRanking = ""

console.log("Seja bem vindo(a)! \nAqui vc encontrará o seu ranking baseado na quantidade de vitórias e derrotas.")

function qtVitoriasDerrotas(vit, der){ // Usei nomes curtos aqui para você ver que são parâmetros
    let subtracao = vit - der
    return subtracao
    
}

// CORREÇÃO AQUI: Passamos as duas variáveis para a função
resultado = qtVitoriasDerrotas(qtVitorias, qtDerrotas)


function tipoRanking(pontosRank){
    if(resultado <= 10){
   	    return "Ferro"
    
    }else if(resultado <=20){
    	return "Bronze"
    
    }else if(resultado <= 50){
    	return "Prata"
        
    }else if(resultado <= 80){
    	return "Ouro"
        
    }else if(resultado <= 90){
    	return "Diamante"
        
    }else if(resultado <= 100){
    	return "Lendário"
        
    }else if(resultado >= 101){
    	return "Imortal"
        
    }

}

resultadoRanking = tipoRanking(resultado)

console.log("O Herói **" + jogador + "** tem o saldo de **" + resultado + "** e seu Ranking é **" + resultadoRanking + "**")
console.log("Parabéns Herói **" + jogador + "** por sua conquista e continue evoluindo.")