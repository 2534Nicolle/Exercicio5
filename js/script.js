function aumentarFonte() {
    const paragrafo = document.getElementById("paragrafo");
    let tamanhoFonte = window.getComputedStyle(paragrafo).fontSize;
    tamanhoFonte = parseInt(tamanhoFonte); 
  
    paragrafo.style.fontSize = (tamanhoFonte + 2) + "px";
  }
  
