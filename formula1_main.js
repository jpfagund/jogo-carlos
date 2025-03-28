let des = document.getElementById('des').getContext('2d')

let c1 = new Carro(225, 450, 50, 80, 'darkblue')
let carro = new Carro(225, 500, 60, 133, './assets/porsche_carrera.png')
let c2 = new Carro2(400, -40, 60, 133, './assets/carro_02.png')
let c3 = new Carro2(200, -280, 65, 133, './assets/carro_03.png')
console.log(c3)

let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()

let motor = new Audio('./assets/motor.wav')
let batida = new Audio('./assets/batida.mp3')
motor.volume = 0.8
motor.loop = true
batida.volume = 0.8

let dificuldade = localStorage.getItem('dificuldade')
console.log(dificuldade)
let jogar = true


let keys = {
    a: false,
    d: false,
    w: false,
    s: false
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
        keys.a = true;
    } else if (e.key === 'd') {
        keys.d = true;
    } else if (e.key === 'w') {
        keys.w = true;
    } else if (e.key === 's') {
        keys.s = true;
    }
})
document.addEventListener('keyup', (e) => {
    if (e.key === 'a') {
        keys.a = false;
    } else if (e.key === 'd') {
        keys.d = false;
    } else if (e.key === 'w') {
        keys.w = false;
    } else if (e.key === 's') {
        keys.s = false;
    }
})

function game_over() {
    if (carro.vida <= 0) {
        jogar = false
        motor.pause()
        // música com o jogo parado
    }
}

function criarBotoesGameOver() {
    if (document.getElementById("btnRestart")) return;

    let container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = "600px";
    container.style.left = "50%";
    container.style.transform = "translateX(-50%)";
    container.style.display = "flex";
    container.style.gap = "20px";

    let btnRestart = document.createElement("button");
    btnRestart.id = "btnRestart";
    btnRestart.innerText = "Jogar Novamente";
    btnRestart.style.padding = "10px 20px";
    btnRestart.style.fontSize = "18px";
    btnRestart.style.cursor = "pointer";
    btnRestart.style.border = "none";
    btnRestart.style.borderRadius = "5px";
    btnRestart.style.backgroundColor = "#28a745";
    btnRestart.style.color = "white";
    btnRestart.onclick = () => window.location.reload()

    let btnHome = document.createElement("button");
    btnHome.innerText = "Voltar ao Início";
    btnHome.style.padding = "10px 20px";
    btnHome.style.fontSize = "18px";
    btnHome.style.cursor = "pointer";
    btnHome.style.border = "none";
    btnHome.style.borderRadius = "5px";
    btnHome.style.backgroundColor = "#dc3545";
    btnHome.style.color = "white";
    btnHome.onclick = () => window.location.href = "index.html";

    container.appendChild(btnRestart);
    container.appendChild(btnHome);

    document.body.appendChild(container);
}

function pontos() {
    if (carro.point(c2)) {
        carro.pts += 1
    } else if (carro.point(c3)) {
        carro.pts += 1
    }
}

function colisao() {
    if (carro.colid(c2)) {
        carro.vida -= 1
        c2.recomeca()
        batida.play()
    } else if (carro.colid(c3)) {
        carro.vida -= 1
        c3.recomeca()
        batida.play()
    }
}

function desenha() {
    t1.des_text('Pontos: ', 360, 24, 'yellow', '26px Times')
    t2.des_text(carro.pts, 442, 24, 'yellow', '26px Times')
    t3.des_text('Vida: ', 40, 24, 'yellow', '26px Times')
    t4.des_text(carro.vida, 100, 24, 'yellow', '26px Times')

    let bg = new Image();
    bg.src = "./assets/road_500x700.jpg";

    des.drawImage(bg, 0, bgY - 700, 500, 700);
    des.drawImage(bg, 0, bgY, 500, 700);

    des.fillStyle = "white";
    des.font = "24px Arial";
    des.fillText(`Vida: ${carro.vida}`, 20, 30);
    des.fillText(`Pontos: ${carro.pts}`, 20, 60);


    if (jogar) {
        c2.des_car_img()
        c3.des_car_img()
        carro.des_car_img()
    } else {
        let imgGameOver = new Image();
        imgGameOver.src = "./assets/game_over.png";
        des.drawImage(imgGameOver, 100, 250, 300, 200);

        des.fillStyle = "rgba(0, 0, 0, 0.7)";
        des.fillRect(140, 100, 220, 60);

        t5.des_text('Game Over', 143, 145, 'darkRed', '46px Times');

        setTimeout(() => {
            criarBotoesGameOver();
        }, 100);
    }
}
let bgY = 0;
function atualiza() {
    if (jogar) {
        motor.play()
        c2.mov_carro2(dificuldade)
        c3.mov_carro2(dificuldade)

        if (keys.a) {
            carro.x -= 12
        }
        if (keys.d) {
            carro.x += 12
        }
        if (keys.w) {
            carro.y -= 12
        }
        if (keys.s) {
            carro.y += 12
        }

        carro.mov_carro()
        pontos()
        colisao()
        game_over()

        if (dificuldade == 1) {

            bgY += 7
        } else if (dificuldade == 2) {
            bgY += 9

        } else if (dificuldade == 3) {
            bgY += 12

        } else if (dificuldade == 4) {
            bgY += 15
        }
        if (bgY >= 700) {
            bgY = 0;
        }
    }


}
function main() {
    des.clearRect(0, 0, 500, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()