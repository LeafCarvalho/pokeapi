function shuffleMusicas(musicasTocadas) {
    if (musicasTocadas.length === 1) {
      return musicasTocadas
    }
  
    let musicasMaiorMenor = [...musicasTocadas.sort((a, b) => b - a)]
    let musicasMenorMaior = [...musicasTocadas.sort((a, b) => a - b)]
  
    let lista = []
    for (let idx = 0; lista.length < musicasTocadas.length; idx++) {
      lista = [...lista, musicasMaiorMenor[idx]]
      lista = [...lista, musicasMenorMaior[idx]]
    }
  
    let saida = lista.slice(0, musicasTocadas.length)
    return saida
  }