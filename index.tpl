<!DOCTYPE html>
<html>
    
    <head>
    </head>
    
    <body>
        
        <h1>Employees Management</h1>
        
        <!-- Form per le richieste di visualizzazione e cancellazione impiegati-->
        <form id="FormCerca" action="/CercaId" method="POST">
            
            Insert ID:   
            <input type="number" name="IdIns">
            <input type="submit" value="Search" name="CercaImpiegato">
            <input type="submit" value="Delete" name="CancellaImpieagto">
            
        </form>
        
        <br>
        
        <button onclick = "VisualizzaForm()">Hide Form</button>
        
        <br> <br>
        
        <!-- Form per l'inserimento e la visuaizzazione dei dati degli impiegati-->
        <form id="FormInserisci" action="/Inserisci" method="POST">
            
            <table>
                <tr>
                    <th>ID:</th>
                    <th><input type="number" name="ID" value="(:ID:)"> </th>
                </tr>
                <tr>
                    <th>Name:</th>
                    <th><input type="text"  name="Name" value="(:Name:)" required> </th>
                </tr>
                <tr>
                    <th> Surname:</th>
                    <th> <input type="text" name="Surname" value="(:Surname:)"  required> </th>
                </tr>
                <tr>
                    <th>Level:</th>
                    <th><input type="number"  name="Level" value="(:Level:)"  required> </th>
                </tr>
                <tr>
                    <th>Salary:</th>
                    <th><input type="number"  name="Salary" value="(:Salary:)"  required> </th>
                </tr>
                <tr>
                    <th colspan="2"><input type="submit" value="Insert employee"></th>
                </tr>
            </table>
            
        </form>
        
        <script src="vista.js"></script>
        
    </body>
    
</html>