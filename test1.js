var inputText = document.getElementById("inputText");
var text = document.getElementById("text");
var fehler = document.getElementById("fehler");

var yanlis = 0;
fehler.innerHTML = "Fehler:  "  + yanlis;

var zeit = 10;
var MyInterval;

var ikinjiSure = 3;
var sureYok;

function kilit()
{
    if (inputText.value == "1579")
    {
        text.innerHTML = "Kilidi actiniz!";
        fehler.style.display = "none";
    }

    else
    {
       yanlis ++;
       fehler.innerHTML = "Fehler:  "  + yanlis;
       if ( yanlis == 1)
       {
        text.innerHTML = "1. yanlis sorun yok";
       }
       else if (yanlis == 2)
       {
        text.innerHTML = "2. yanlis sorun yok";  
       }
       else if(yanlis >=3)
       {   
        zeit = 10;     
        document.getElementById("kilit").disabled = true; 
        MyInterval = setInterval(zeitweniger, 1000);
        text.innerHTML = "3. yanlis"
       }
       fehler.style.display = "none";
    }
}

function zeitweniger()
{
    zeit --; 
    text.innerHTML = " cok fazla hataly giris yaptiniz lutfen  " +  "<b>" + zeit +  "</b>"   + "  dakika bekleyiniz";
    if (zeit == 0)
    {
        document.getElementById("kilit").disabled = false; 
        clearInterval(MyInterval);
        inputText.value = "";
        yanlis = 0;
        
        text.innerHTML = "yeniden Baslayiniz";
        
        ikinjiSure = 3;
        sureYok = setInterval(Surebitti, 1000);

    }

}
function Surebitti()
{
    ikinjiSure--;
    
    if (ikinjiSure == 0)
        {
            text.innerHTML = "";
            clearInterval(sureYok);
        }
}