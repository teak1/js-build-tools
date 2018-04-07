class TEST{
    constructor( x, y, w, h){
if(Number.name!=x.constructor.name)throw new Error("input is not of type Number");
if(Number.name!=y.constructor.name)throw new Error("input is not of type Number");
if(Number.name!=w.constructor.name)throw new Error("input is not of type Number");
if(Number.name!=h.constructor.name)throw new Error("input is not of type Number");
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;   
    }
}
function createRect( x, y, w, h){
if(Number.name!=x.constructor.name)throw new Error("input is not of type Number");
if(Number.name!=y.constructor.name)throw new Error("input is not of type Number");
if(Number.name!=w.constructor.name)throw new Error("input is not of type Number");
if(Number.name!=h.constructor.name)throw new Error("input is not of type Number");
    return new TEST(x,y,w,h);
}
