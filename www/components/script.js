(document).on("click","#procurar",function(){
  $.ajax({
    type:"get",
    url: "http://viacep.com.br/ws/"+$("#cep").val()+"/json/", 
    success: function(data){  
      var conteudo;
      conteudo = "<div class='center'><p><strong>Logradouro:</strong>"+data.logradouro+"</p></div>";
      conteudo += "<div class='center'><p><strong>Bairro:</strong>"+data.bairro+"</p></div>";
      conteudo += "<div class='center'><p><strong>Localidade:</strong>"+data.localidade+"</p></div>";
      conteudo += "<div class='center'><p><strong>Estado:</strong>"+data.uf+"</p></div>";

      $("#dados").html(conteudo);
    },
    error: function(){
      alert("Error!"); 
    }
    })
  
});

