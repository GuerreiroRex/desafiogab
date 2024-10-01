var express = require('express');
var config = require('config');
var router = express.Router();

// routes
router.get('/', about);

module.exports = router;


function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

function calcular_x(i) {
    return i + (1 / i)
}

function calcular_recursivo(m, n) {
    i = m

    resul_rec = 1
    if (i <= n) {
        i = i + 1
        resul_rec = calcular_recursivo(i)
    }

    restul = calcular_x(i) * resul_rec

    return restul
}

async function about(req, res) {
   
    req_m = req.query.m
    req_n = req.query.n
    req_opcao = req.query.opcao

    resultado = 0
    
    if (req_opcao == "iterativa") {
        resultado = 1
        limites = range( parseInt(req_m), parseFloat(req_n) + 1)
        limites.forEach(i => {
            resultado = resultado * calcular_x(i)
        });
    } else if (req_opcao == "recursiva") {
        resultado = calcular_recursivo(parseInt(req_m), parseFloat(req_n))
    }
    

   res.send(
    String(resultado)
   );
}