class Rectangle{

     
    constructor(width , height){
        this.width = width;
        this.height = height;
    }

     
    getArea(){
        console.log(`The area of rectangle is ${this.width*this.height}`);
    }
    getPerimeter(){
        console.log(`The area of rectangle is ${this.width*2+this.height*2}`);
    }

    get width (){
        return this._width;
    }
    get height () {
        return this._height;
    } 

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }else{
            console.log(`error`);
        }
        
    }
    set height(newHeight){
       this._height = newHeight;
    }
    
}


const rectangle = new Rectangle();
 
rectangle.width = -12;
rectangle.height = 3;

 
rectangle.getArea();
rectangle.getPerimeter();


rectangle.getArea();
rectangle.getPerimeter();