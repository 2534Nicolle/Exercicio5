function aumentarFonte() {
    const paragrafo = document.getElementById("paragrafo");
    let tamanhoFonte = window.getComputedStyle(paragrafo).fontSize;
    tamanhoFonte = parseInt(tamanhoFonte); // Converte o valor para número inteiro
  
    paragrafo.style.fontSize = (tamanhoFonte + 2) + "px"; // Aumenta o tamanho da fonte em 2px
  }
  