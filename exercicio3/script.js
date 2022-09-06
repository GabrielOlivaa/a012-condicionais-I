let nacionalidade = prompt("Escreva aqui sua nacionalidade:").toLowerCase()

let brasil ="brasileira"
let argentina ="argentina"
let uruguaia= "uruguia"
let chilena= "chilena"
let colombiana ="colombiana"

if(nacionalidade === brasil ){
 console.log("você é brasileiro =D")
} 

 else if (nacionalidade === argentina) {
    console.log("Você é argentino =D")
    } 
    
 else if (nacionalidade ===uruguaia ){
    console.log("Você é Urugaio =D")
} 

  else if (nacionalidade === chilena ){
    console.log("Você é chileno =D")
}

 else if (nacionalidade === colombiana ){
    console.log("Você é colambiano =D")
}else {
    console.log("dados nao encontrado")
}