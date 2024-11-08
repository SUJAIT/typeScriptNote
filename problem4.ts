{
    /////////////////////////////////


type circles ={
    shape:"circle";
    radius:number;
};

type rectangls ={
    shape:"rectangle";
    width:number;
    height:number;
};

type shape = circles | rectangls;

function calculateShapeArea(shape:shape) {
    if(shape.shape == "circle"){
        return Math.PI * shape.radius * shape.radius;
    }else if (shape.shape == "rectangle"){
        return shape.width * shape.height;
    }else{
         console.log("ups sorry any wrong shape types")
    }
}

const circle : circles = {shape:"circle",radius:6}
const rectangle : rectangls = {shape:"rectangle",width:12,height:6}

console.log(calculateShapeArea(circle))
console.log(calculateShapeArea(rectangle))


    ///////////////////////////////////
}