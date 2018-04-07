function typedExample( a, b){
if(Number.name!=a.constructor.name)throw new Error("input is not of type Number");
if(Number.name!=b.constructor.name)throw new Error("input is not of type Number");
    return a*b
}
