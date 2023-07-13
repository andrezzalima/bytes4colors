export function gerarCorAleatoria() {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    const hashtag = '#'
    let codigoHexInicial = ['', '', '', '', '', '']
    let codigoHex = codigoHexInicial.map(ele => ele = hex[Math.floor(Math.random() * hex.length)]).join('')
    let codigoHexCompleto = hashtag + codigoHex


    // return "#" + new Array(6).fill("").map(el => hex[Math.floor(Math.random() * hex.length)]).join("")

    return codigoHexCompleto
}

export function gerarPaleta() {
    let cores = new Array(5).fill("").map(el => gerarCorAleatoria())
    return cores
}
