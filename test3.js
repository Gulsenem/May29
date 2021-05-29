var input1 =document.getElementById("input1");
var input2 = document.getElementById("input2");
var zeig = document.getElementById("zeig");
var sonuc = document.getElementById("sonuc");
var zahl2=0, zahl1=0; 


function wechseln()
{
    zahl2 = 0;
    zahl1 = 0;
    if( input1.value != "" && input2.value != "" )
    {
        zahl1 = parseFloat(input1.value);
        zahl2 = parseFloat(input2.value);  
    }
 
}
function onclicked(parameter)
{
    wechseln();
    if(parameter=="+")
    {
        sonuc.innerHTML = zahl1 + zahl2 ;
        zeig.innerHTML = zahl1 + " +  " + zahl2;
    }
    else if(parameter=="-")
    {
        sonuc.innerHTML = zahl1 - zahl2 ;
        zeig.innerHTML = zahl1 + " -  " + zahl2;
    }
    else if(parameter=="*")
    {
        sonuc.innerHTML = zahl1 * zahl2 ;
        zeig.innerHTML = zahl1 + " *  " + zahl2;
    }
    else if(parameter=="/")
    {
        sonuc.innerHTML = zahl1 / zahl2 ;
        zeig.innerHTML = zahl1 + " /  " + zahl2;
        
        if( zahl2 == 0)
        {
            sonuc.innerHTML = "Error" ;
        }
    }
}

function temizle()
{
    wechseln();
    input1.value = "";
    input2.value = "";
    sonuc.innerHTML = "";
    zeig.innerHTML = "";


}