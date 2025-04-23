class vehical{
    constructor(Color, currentspeed, maxspeed) {
        this.color = color;
        this.currentspeed = currentspeed;
        this.maxspeed = maxspeed;
    }
    move(){
        console.log("moving at",this.currentspeed);
    }
    accelerate(amount){
        this.currentspeed += amount;
    }
}