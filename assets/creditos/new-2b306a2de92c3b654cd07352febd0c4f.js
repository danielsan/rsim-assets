var newCredito=new function(){var a,b,c;this.init=function(){$("#valor_personalizado_0").on("change",function(a){$("#credito_valor_personalizado").prop("disabled",this.checked)}),$("tbody tr").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")}),$("tbody").delegate("tr","click",function(a){$("tbody > tr.checked").removeClass("checked"),$(this).addClass("checked").find("input[type=radio]")[0].checked=!0})}};$(newCredito.init);