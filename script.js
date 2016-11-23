//lista che conterrà tutti gli impiegati
var impiegati =[];

//inserisco due impiegati per test
impiegati.push(new Employee(1, "a", "b", 1, 1000));
impiegati.push(new Employee(2, "c", "d", 2, 2000));

/**
 * @crea un nuovo imiegato.
 * @param [in] int id, l'id dell'impiegato.
 * @param [in] string name, il nome dell'impiegato.
 * @param [in] string surname, il cognome dell'impiegato.
 * @param [in] int level, il livello dell'impiegato.
 * @param [in] int salary,  il salario dell'impiegato.
**/
function Employee(id, name, surname, level, salary)
{
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.level = level;
    this.salary = salary;
}

/**
 * @inserisce un impiegato all'interno dell'array o lo aggiorna se già resente.
 * @param [in] int id, l'id dell'impiegato.
 * @param [in] string name, il nome dell'impiegato.
 * @param [in] string surname, il cognome dell'impiegato.
 * @param [in] int level, il livello dell'impiegato.
 * @param [in] int salary,  il salario dell'impiegato.
**/
function InserisciEmployee(id, name, surname, level, salary)
{
    //se ho trovato già un altro impiegato con lo stesso id, faccio un update di quell'impiegato
    if(CercaEmployee(id) != -1)
    {
        impiegati[id].name = name;
        impiegati[id].surname = surname;
        impiegati[id].level = level;
        impiegati[id].salary = salary;
    }
    
    //altrimenti lo inseirsco con un nuovo id, e se è vuoto , prendo il massimo +1
    else
    {
        if(id == "")
            id = parseInt(Massimo(impiegati)) + parseInt(1);
        
        impiegati.push(new Employee(id, name, surname, level, salary));
    }
}

/**
 * Questa funzione restituisce l'id più alto memorizzato all'interno della lista
 * @return il massimo id
 */
function Massimo()
{
    var max = 0;
    for(var i = 0; i < impiegati.length; i++)
    {
        if(impiegati[i].id > res)
        {
            max = impiegati[i].id;
        }
    }
    return max;
}

/**
 * questa funzione  serve per vedere se un impiegato con il prorpio id è presente nella lista
 * @param [in] int id, l'id dell'impiegato.
 * @return  -1 se l'impiegato non è presente in lista, 1 altrimenti
 */
function CercaEmployee(id)
{
    var presente=-1;
    
    for(var i = 0; i < impiegati.length; i++)
    {
        if(id == impiegati[i].id)
                presente = 1;
    }
    
    return presente;
}


/**
 * @questa funzione cancella un impiegato dalla lista sapendo il suo id
 * @param [in] int id, l'id dell'impiegato.
 */
function CancellaEmployee(id)
{
    for(var i = 0; i < impiegati.length; i++)
    {
        if(id == impiegati[i].id)
            impiegati.splice(i, 1);
    }
}



exports.impiegati = impiegati;
exports.InserisciEmployee = InserisciEmployee;
exports.CercaEmployee = CercaEmployee;
exports.CancellaEmployee = CancellaEmployee;