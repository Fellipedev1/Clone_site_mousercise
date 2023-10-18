document.addEventListener("DOMContentLoaded", function() {
    var cliques = 0;

    var meuBotao = document.getElementById("meuBotao");
    var cliquesRealizados = document.getElementById("cliquesRealizados");

    meuBotao.addEventListener("click", function() {
        cliques++;
        cliquesRealizados.textContent = cliques;

  
        localStorage.setItem("cliques", cliques);
    });

    
    var tabela = document.getElementById("suaTabela");
    meuBotao.addEventListener("click", function() {
        cliques++;
        cliquesRealizados.textContent = cliques;

    
        
        var novaLinha = tabela.insertRow();
        var celula1 = novaLinha.insertCell(0);
        celula1.textContent = cliques;
    });
});
