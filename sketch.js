const limit=85;
const n=255/limit;
let x=0,y=0,space=70,img;


function preload(){
    img=loadImage("nyanncat.png");
}
function setup() {
    createCanvas(1080, 980);
    background(10,36,110);
    frameRate(100);
}


function draw(){

    background(10,36,110);
        for(let a=0,b=0,for_r=255,for_g=0,for_b=0,for_i=0,for_result=0;a<x;a++,b=Math.sin(a/40)*30+space){
            stroke(for_r, for_g, for_b);
            line(a, b,a, b+30);
            for_i+=n;
            if(for_i%255==0)
                for_result++;
                switch (for_result) {
                case 0:
                    for_b+=n;
                    break;
                case 1:
                    for_r-=n;
                    break;
                case 2:
                    for_g+=n;
                    break;
                case 3:
                    for_b-=n;
                    break;
                case 4:
                    for_r+=n;
                    break;
                case 5:
                    for_g-=n;
                    break;
                default:
                    for_result=0;
                    break;
                }
                }
            
        
        set_space();
        cat();

} 
function set_space(){
    if(x<width)
    x++;
    else{
        x=0;
        space+=200;
    }
    
    if(space==1070){
        background(10,36,110);
        space-=1000;
    }
    
y=Math.sin(x/40)*30+space;
}

function cat(){
    image(img, x-30, y-10,735/10 , 512/10);
}





