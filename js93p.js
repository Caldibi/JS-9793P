let JsNumber = 0;

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
    }
}