const iniciar = ()=>{
    let dificuldade = document.getElementById("dificuldade").value
    localStorage.setItem("dificuldade", dificuldade)
    location.href = './jogo.html'
}