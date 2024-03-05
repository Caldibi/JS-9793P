let JsNumber = 0, x = 0;


function MyFunction(){

    if(JsNumber >= 0) {
        JsNumber = JsNumber + 1 ;
        document.getElementById("jsSpan").innerHTML = JsNumber;
    }else
    {
        alert("Hata!!!");
    }
}
function MyFunction1(){

    if(JsNumber >= 0) {
        
        document.getElementById("jsSpan").innerHTML = 0;
        JsNumber=0;
        let options1 = document.getElementById("sound1");
        let options2 = document.getElementById("sound2");
        let options3 = document.getElementById("sound3");
        options1.pause();
        options2.pause();
        options3.pause();


    }
}

function first_btn(){

let options1 = document.getElementById("sound1");
let options2 = document.getElementById("sound2");
let options3 = document.getElementById("sound3");

options1.play();
options2.pause();
options3.pause();

if(x >= 0){
    x = x +1 ;
    if(x==2){
        let options1 = document.getElementById("sound1");
        options1.pause();
        x=0;

    }


}

}
function second_btn(){

    let options1 = document.getElementById("sound1");
    let options2 = document.getElementById("sound2");
    let options3 = document.getElementById("sound3");
    
    options1.pause();
    options2.play();
    options3.pause();

    if(x >= 0){
        x = x +1 ;
        if(x==2){
            let options2 = document.getElementById("sound2");
            options2.pause();
            x=0;
    
        }
    }
    
}
function third_btn(){

        let options1 = document.getElementById("sound1");
        let options2 = document.getElementById("sound2");
        let options3 = document.getElementById("sound3");
        
        options1.pause();
        options2.pause();
        options3.play();

        if(x >= 0){
            x = x +1 ;
            if(x==2){
                let options3 = document.getElementById("sound3");
                options3.pause();
                x=0;
        
            }
        }
        
}