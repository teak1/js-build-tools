class TEST{
    constructor(Number x,Number y,Number w,Number h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;   
    }
}
function createRect(Number x,Number y,Number w,Number h){
    return new TEST(x,y,w,h);
}