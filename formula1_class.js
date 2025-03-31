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

    mov_carro(){
        this.x += this.dir
        if(this.x <= 6){
            this.x = 6
        }else if(this.x >= 435){
            this.x = 435
        }
    }

    point(objeto){
        if((objeto.y>=500)&&(objeto.y <= 505)){
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
        this.y = -200
        this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2))
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