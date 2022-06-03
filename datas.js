export function datas(mes){


    if(mes == undefined){
    var data = new Date()
    var mes = String(data.getMonth() + 1);
    document.getElementById('guardaOmes').textContent = `${mes}`;
    }
    mes = document.getElementById('guardaOmes').textContent
    switch(mes){
    case '1':
    var nomeMes = "jan";
    document.getElementById('mes').textContent = "Janeiro de 2022";
    
    
    return nomeMes;
    
    break;
    case '2':
    var nomeMes = "fev"; 
    document.getElementById('mes').textContent = "Fevereiro de 2022";
    
    return nomeMes;
    
    break;
    case '3':
    var nomeMes = "mar"; 
    document.getElementById('mes').textContent = "Março de 2022";
    
    return nomeMes;
    break;
    case '4':
        var nomeMes = "abril"; 
    document.getElementById('mes').textContent = "Abril de 2022";
    
    return nomeMes;
    break;
    case '5':
        var nomeMes = "maio"; 
    document.getElementById('mes').textContent = "Maio de 2022";
    
    return nomeMes;
    break;
    case '6':
        var nomeMes = "jun"; 
    document.getElementById('mes').textContent = "Junho de 2022";
    
    
    return nomeMes;
    break;
    case '7':
        var nomeMes = "jul"; 
    document.getElementById('mes').textContent = "Julho de 2022";
    
    
    return nomeMes;
    break;
    case '8':
        var nomeMes = "ago"; 
    document.getElementById('mes').textContent = "Agosto de 2022";
    
    
    return nomeMes;
    break;
    
    case '9':
        var nomeMes = "set"; 
    document.getElementById('mes').textContent = "Setembro de 2022";
    
    
    return nomeMes;
    break;
    
    case '10':
        var nomeMes = "out"; 
    document.getElementById('mes').textContent = "Outubro de 2022";
    
    
    return nomeMes;
    break;
    
    case '11':
        var nomeMes = "nov"; 
    document.getElementById('mes').textContent = "Novembro de 2022";
    
    
    return nomeMes;
    break;
    
    case '12':
        var nomeMes = "dez"; 
    document.getElementById('mes').textContent = "Dezembro de 2022";
    
    return nomeMes;
    break;
    
    }
    }