// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
var newAcao_CLASS=function(){var a,b,c;this.init=function(){a=$("#enviar_em_date").datepicker({locale:"pt-BR"}),horas=[];for(var d=24;d;d--)horas.unshift((d-1).toString());minut=[];for(var e=55;e>0;e-=5)minut.unshift(e.toString());console.log(minut),b=$("#enviar_em_hour").autocomplete({source:horas}).focus(function(a){b.autocomplete("search","")}),c=$("#enviar_em_minute").autocomplete({source:minut})}},newAcao=new newAcao_CLASS;$(newAcao.init);