// jQuery Alert Dialogs Plugin
//
// Version 1.0
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
// 29 December 2008
//
// Visit http://abeautifulsite.net/notebook/87 for more information
//
// Usage:
//		jAlert( message, [title, callback] )
//		jConfirm( message, [title, callback] )
//		jPrompt( message, [value, title, callback] )
// 
// History:
//
//		1.00 - Released (29 December 2008)
//
// License:
// 
//		This plugin is licensed under the GNU General Public License: http://www.gnu.org/licenses/gpl.html
//
(function(a){a.alerts={verticalOffset:-75,horizontalOffset:0,repositionOnResize:!0,overlayOpacity:.01,overlayColor:"#FFF",draggable:!0,okButton:"&nbsp;OK&nbsp;",cancelButton:"&nbsp;Cancel&nbsp;",dialogClass:null,alert:function(b,c,d){c==null&&(c="Aviso"),a.alerts._show(c,b,null,"alert",function(a){d&&d(a)})},confirm:function(b,c,d){c==null&&(c="Confirmação"),a.alerts._show(c,b,null,"confirm",function(a){d&&d(a)})},prompt:function(b,c,d,e){d==null&&(d="Prompt"),a.alerts._show(d,b,c,"prompt",function(a){e&&e(a)})},_show:function(b,c,d,e,f){a.alerts._hide(),a.alerts._overlay("show"),a("BODY").append('<div id="popup_container"><h1 id="popup_title"></h1><div id="popup_content"><div id="popup_message"></div></div></div>'),a.alerts.dialogClass&&a("#popup_container").addClass(a.alerts.dialogClass);var g=a.browser.msie&&parseInt(a.browser.version)<=6?"absolute":"fixed";a("#popup_container").css({position:g,zIndex:99999,padding:0,margin:0}),a("#popup_title").text(b),a("#popup_content").addClass(e),a("#popup_message").text(c),a("#popup_message").html(a("#popup_message").text().replace(/\n/g,"<br />")),a("#popup_container").css({minWidth:a("#popup_container").outerWidth(),maxWidth:a("#popup_container").outerWidth()}),a.alerts._reposition(),a.alerts._maintainPosition(!0);switch(e){case"alert":a("#popup_message").after('<div id="popup_panel"><input type="button" value="'+a.alerts.okButton+'" id="popup_ok" /></div>'),a("#popup_ok").click(function(){a.alerts._hide(),f(!0)}),a("#popup_ok").focus().keypress(function(b){(b.keyCode==13||b.keyCode==27)&&a("#popup_ok").trigger("click")});break;case"confirm":a("#popup_message").after('<div id="popup_panel"><input type="button" value="'+a.alerts.okButton+'" id="popup_ok" /> <input type="button" value="'+a.alerts.cancelButton+'" id="popup_cancel" /></div>'),a("#popup_ok").click(function(){a.alerts._hide(),f&&f(!0)}),a("#popup_cancel").click(function(){a.alerts._hide(),f&&f(!1)}),a("#popup_ok").focus(),a("#popup_ok, #popup_cancel").keypress(function(b){b.keyCode==13&&a("#popup_ok").trigger("click"),b.keyCode==27&&a("#popup_cancel").trigger("click")});break;case"prompt":a("#popup_message").append('<br /><input type="password" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="'+a.alerts.okButton+'" id="popup_ok" /> <input type="button" value="'+a.alerts.cancelButton+'" id="popup_cancel" /></div>'),a("#popup_prompt").width(a("#popup_message").width()),a("#popup_ok").click(function(){var b=a("#popup_prompt").val();a.alerts._hide(),f&&f(b)}),a("#popup_cancel").click(function(){a.alerts._hide(),f&&f(null)}),a("#popup_prompt, #popup_ok, #popup_cancel").keypress(function(b){b.keyCode==13&&a("#popup_ok").trigger("click"),b.keyCode==27&&a("#popup_cancel").trigger("click")}),d&&a("#popup_prompt").val(d),a("#popup_prompt").focus().select()}if(a.alerts.draggable)try{a("#popup_container").draggable({handle:a("#popup_title")}),a("#popup_title").css({cursor:"move"})}catch(h){}},_hide:function(){a("#popup_container").remove(),a.alerts._overlay("hide"),a.alerts._maintainPosition(!1)},_overlay:function(b){switch(b){case"show":a.alerts._overlay("hide"),a("BODY").append('<div id="popup_overlay"></div>'),a("#popup_overlay").css({position:"absolute",zIndex:99998,top:"0px",left:"0px",width:"100%",height:a(document).height(),background:a.alerts.overlayColor,opacity:a.alerts.overlayOpacity});break;case"hide":a("#popup_overlay").remove()}},_reposition:function(){var b=a(window).height()/2-a("#popup_container").outerHeight()/2+a.alerts.verticalOffset,c=a(window).width()/2-a("#popup_container").outerWidth()/2+a.alerts.horizontalOffset;b<0&&(b=0),c<0&&(c=0),a.browser.msie&&parseInt(a.browser.version)<=6&&(b+=a(window).scrollTop()),a("#popup_container").css({top:b+"px",left:c+"px"}),a("#popup_overlay").height(a(document).height())},_maintainPosition:function(b){if(a.alerts.repositionOnResize)switch(b){case!0:a(window).bind("resize",function(){a.alerts._reposition()});break;case!1:a(window).unbind("resize")}}},jAlert=function(b,c,d){a.alerts.alert(b,c,d)},jConfirm=function(b,c,d){a.alerts.confirm(b,c,d)},jPrompt=function(b,c,d,e){a.alerts.prompt(b,c,d,e)}})(jQuery);