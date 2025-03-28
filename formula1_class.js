class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_obj(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h,this.a)
    }

    des_car_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }
}

class Carro extends Obj{
    dir = 0
    pts = 0
    vida = 3
    frame = 1
    tempo = 0
    
    des_carro(){

        // roda dianteira esquerda
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'orange'
        des.fillStyle = 'darkorange'
        des.rect(this.x+40, this.y-60,10,10)
        des.closePath()
        des.stroke()
        des.fill()

        // roda dianteira direita
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'orange'
        des.fillStyle = 'darkorange'
        des.rect(this.x, this.y-60,10,10)
        des.closePath()
        des.stroke()
        des.fill()

        // roda traseira esquerda
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'orange'
        des.fillStyle = 'darkorange'
        des.rect(this.x+40, this.y-20,10,10)
        des.closePath()
        des.stroke()
        des.fill()

        // roda traseira direita
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'orange'
        des.fillStyle = 'darkorange'
        des.rect(this.x, this.y-20,10,10)
        des.closePath()
        des.stroke()
        des.fill()

        // trapezio do carro
        des.beginPath()
        des.moveTo(this.x,this.y) // coordenadas x,y
        des.lineTo(this.x+50, this.y)
        des.lineTo(this.x+40,this.y-50)
        des.lineTo(this.x+10,this.y-50)
        des.closePath()
        des.lineWidth = '5'
        des.strokeStyle = 'blue'
        des.fillStyle = this.a
        des.stroke()
        des.fill()

        // desenhando corpo frente em um retângulo
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'blue'
        des.fillStyle = this.a
        des.rect(this.x+10,this.y-70,30,20)
        des.closePath()
        des.stroke()
        des.fill()

        // desenhado a asa frontal em um retângulo
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'blue'
        des.fillStyle = this.a
        des.rect(this.x,this.y-80,50,10)
        des.closePath()
        des.stroke()
        des.fill()

    }

    mov_carro(){
        this.x += this.dir
        if(this.x <=2){
            this.x = 2
        }else if(this.x >= 416){
            this.x = 416
        }
    }

    point(objeto){
        if((objeto.y>=680)&&(objeto.y <= 684)){
            return true
        }else{
            false
        }
    }
    
    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
          (this.x + this.w > objeto.x)&&
          (this.y < objeto.y + objeto.h)&&
          (this.y + this.h > objeto.y)){
            return true
        }else{
            false
        }
    }
}

class Carro2 extends Obj{
    
    mov_carro2(dificul){
        if(this.y >= 780){
            this.y = -100
            this.recomeca()
        }
        
        if(dificul == 1){
            
            this.y += 5
        } else if (dificul == 2){
            this.y += 10
            
        } else if (dificul == 3){
            this.y += 15
            
        } else if (dificul == 4){
            this.y += 20
        }
        
    }
    
    recomeca(){
        this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) // quando o carro sair da tela
    }
}

class Text{
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)
    }
}