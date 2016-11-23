var express = require("express");           
var app = express();                        
var bind = require("bind");
var back = require("./script.js");
var bodyParser = require('body-parser');

//imposto paramentri server
app.listen(1337, "127.0.0.1");
app.use(express.static(__dirname + '/Scripts'));
app.use(bodyParser.urlencoded({ extended: false }));


//metodo invocaro in risposta all'evento submit del form "FormInserisci" 
app.post('/Inserisci', function(req, res)
    {
        back.InserisciEmployee(req.body.ID, req.body.Name, req.body.Surname, req.body.Level, req.body.Salary);
    
        bind.toFile('index.tpl', 
            {
                    ID : "",
                    Name : "",
                    Surname : "",
                    Level : "",
                    Salary : ""
            }, 
            function(data)
            {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data + " Inserito correttamente");
            });
    });

//metodo invocaro in risposta all'evento submit del form "FormCerca"
app.post('/CercaId', function(req, res)
    {
        //se l'impiegato che cerco non è presente rispondo con 200 e invio parametri vuoti
        if (back.CercaEmployee(req.body.IdIns)==-1)
        {
                bind.toFile('index.tpl', 
                {
                    ID : "",
                    Name : "",
                    Surname : "",
                    Level : "",
                    Salary : ""
                }, 
                function(data) 
                {
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.end(data);
                });
        }
    
        //se ho premuto Search
        else if(req.body.CercaImpiegato != undefined)
        {
            var pos = back.CercaEmployee(req.body.IdIns);
        
            bind.toFile('index.tpl', 
            {
                
                ID : back.impiegati[pos].id,
                Name : back.impiegati[pos].name,
                Surname : back.impiegati[pos].surname,
                Level : back.impiegati[pos].level,
                Salary : back.impiegati[pos].salary
            }, 
            function(data)
            {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            });
        }

        //se ho premuto Delete
        else 
        {   
            back.CancellaEmployee(req.body.IdIns);
        
            bind.toFile('index.tpl', 
            {  
                ID : "",
                Name : "",
                Surname : "",
                Level : "",
                Salary : ""
            }, 
            function(data)
            {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            });
        }
    });


//in fase di inizializzazione, setta i valori
app.use('/', function(req, res)
    {
        bind.toFile('index.tpl', 
        {
            ID : "",
            Name : "",
            Surname : "",
            Level : "",
            Salary : ""
        }, 
        function(data) 
        {
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        });  
});



