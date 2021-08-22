function ePaisagem(altura, largura) {
    if(altura > largura) {
        return "Não Paisagem!";
    } else {
        return "É Paisagem!";
    }
}

console.log(ePaisagem(20, 40))