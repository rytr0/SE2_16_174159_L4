//questo metodo nasconde la form FormInserisci se è visibile e viceversa ovvero la mostra se è nascosta
//inoltre richiama il meotodo per pulire i vari input del form
function VisualizzaForm()
{
    if(document.getElementById("FormInserisci").hidden==false)
        document.getElementById("FormInserisci").hidden=true;
    
    else
        document.getElementById("FormInserisci").hidden=false;
    Pulisci();
}


//questo metodo toglie i valori precendetementi inseriti nei vari input della form FormInserisci
function Pulisci()
{
    document.getElementsByName("ID")[0].value="";
    document.getElementsByName("Name")[0].value="";
    document.getElementsByName("Surname")[0].value="";
    document.getElementsByName("Level")[0].value="";
    document.getElementsByName("Salary")[0].value="";
}