    

    var more = document.getElementById("more");
    var links = document.getElementById("links");
    var closy = document.getElementById("closy");
    var logoff = document.getElementById("logoff");
    var pontin = document.getElementById("pontin");
    var metas = document.getElementById("metas");
    var gestao = document.getElementById("gestao");
    var controle = document.getElementById("controle");
    var graphic = document.getElementById("graphic");
    var icon = document.getElementById("icon");
    var categoria = document.getElementById("categoria");
    var metaspc = document.getElementById("metaspc");
    var gestaopc = document.getElementById("gestaopc");
    var controlepc = document.getElementById("controlepc");
    var graphicpc = document.getElementById("graphicpc");
    var liniy = document.getElementById("liniy");
    var meter = document.getElementById("meter");
    var iconvex = document.getElementById("iconvex");
    var icmetas = document.getElementById("icmetas");
    var icgestao = document.getElementById("icgestao");
    var iccontrole = document.getElementById("iccontrole");
    var icgraphic = document.getElementById("icgraphic");
    var sairir = document.getElementById("sairir");
    var iclogout = document.getElementById("iclogout");
    var resultiz = document.getElementById("resultiz");
    var daty = document.getElementById("daty");
    

    closy.addEventListener("click", function(){
        more.style.width = "65px";
        more.style.transition = "1s";
        closy.style.left = "-50px";
        closy.style.opacity = "0"; 
        closy.style.transition = "1s"; 
        logoff.style.top = "-200px";
        logoff.style.height = "80px";
        logoff.style.transition = "1s";
        pontin.style.opacity = "100";
        pontin.style.transition = "5s";
        links.style.opacity = "0";
        links.style.transition = "1s";
        links.style.marginLeft = "-200px";
        icon.style.marginLeft = "-160%";
        icon.style.opacity = "0";
        icon.style.transition = "1s";
    });

    closy.addEventListener("click", function(){
        liniy.style.opacity = "0";
        liniy.style.transition = "1s";
        liniy.style.marginLeft = "-200px";
        meter.style.opacity = "0";
        meter.style.transition = "0.8s";
        meter.style.left = "-200px";
        iconvex.style.opacity = "0";
        iconvex.style.transition = "1s";
        iconvex.style.marginLeft = "-50px";
    });

    pontin.addEventListener("click", function(){
        meter.style.left = "20px";
        liniy.style.opacity = "100";
        liniy.style.transition = "1s";
        liniy.style.marginLeft = "-5px";
        meter.style.opacity = "100";
        meter.style.transition = "0.5s";
        meter.style.top = "-12%";
        iconvex.style.opacity = "100";
        iconvex.style.transition = "1s";
        iconvex.style.position = "relative";
        iconvex.style.top = "-4.2%";
        iconvex.style.marginLeft = "40px";
        closy.style.marginLeft = "230px";
        closy.style.position = "relative";
        
        logoff.style.top = "5px";
    });

    pontin.addEventListener("click", function(){
        more.style.width = "300px";
        pontin.style.opacity = "0";
        pontin.style.transition = "0.5s";
        closy.style.opacity = "100";
        links.style.opacity = "100";
        links.style.transition = "1s";
        links.style.marginLeft = "3%";
        links.style.marginTop = "-10%";
        
        closy.style.left = "20%";
        icon.style.marginLeft = "-8%";
        icon.style.opacity = "100";
        icon.style.paddingTop = "-70%";
        icon.style.transition = "1s";
        closy.style.left = "35%";
        liniy.style.opacity = "0";
        liniy.style.transition = "1s";
        liniy.style.marginLeft = "200px";
    });


    metaspc.addEventListener("mouseover", function(){
        metaspc.style.backgroundColor = "f5c116";
        metaspc.style.transition = "0.5s";
        metas.style.transition = "0.5s";
        metas.style.color = "black";
        icmetas.style.color = "black";
    });

    metaspc.addEventListener("mouseout", function(){
        metaspc.style.backgroundColor = "transparent";
        metaspc.style.transition = "0.5s";
        metas.style.transition = "0.3s";
        metas.style.color = "white";
        icmetas.style.color = "white";
    });




    gestaopc.addEventListener("mouseover", function(){
        gestaopc.style.backgroundColor = "f5c116";
        gestaopc.style.transition = "0.5s";
        gestao.style.transition = "0.5s";
        gestao.style.color = "black";
        icgestao.style.color = "black";
    });

    gestaopc.addEventListener("mouseout", function(){
        gestaopc.style.backgroundColor = "transparent";
        gestaopc.style.transition = "0.5s";
        gestao.style.transition = "0.3s";
        gestao.style.color = "white";
        icgestao.style.color = "white";
    });




    controle.addEventListener("mouseover", function(){
        controlepc.style.backgroundColor = "f5c116";
        controlepc.style.transition = "0.5s";
        controle.style.transition = "0.5s";
        controle.style.color = "black";
        iccontrole.style.color = "black";
    });

    controle.addEventListener("mouseout", function(){
        controlepc.style.backgroundColor = "transparent";
        controlepc.style.transition = "0.5s";
        controle.style.transition = "0.3s";
        controle.style.color = "white";
        iccontrole.style.color = "white";
    });



    graphic.addEventListener("mouseover", function(){
        graphicpc.style.backgroundColor = "f5c116";
        graphicpc.style.transition = "0.5s";
        graphic.style.transition = "0.5s";
        graphic.style.color = "black";
        icgraphic.style.color = "black";
    });

    graphic.addEventListener("mouseout", function(){
        graphicpc.style.backgroundColor = "transparent";
        graphicpc.style.transition = "0.5s";
        graphic.style.transition = "0.3s";
        graphic.style.color = "white";
        icgraphic.style.color = "white";
    });

    logoff.addEventListener("mouseover", function(){
        logoff.style.backgroundColor = "f5c116";
        logoff.style.transition = "0.5s";
        logoff.style.color = "black";
        iclogout.style.color = "black";
    });

    logoff.addEventListener("mouseout", function(){
        logoff.style.backgroundColor = "transparent";
        logoff.style.transition = "0.3s";
        logoff.style.color = "white";
        iclogout.style.color = "white";
    });




    if(screen = 900){
       
        
        

    pontin.addEventListener("click", function(){
        iconvex.style.marginBottom = "30px";
        meter.style.marginBottom = "-30px";
        links.style.position = "relative";
        links.style.bottom = "30px";
    });

    

}