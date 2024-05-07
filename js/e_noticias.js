$(document).ready(function () {
    "use strict"; var area_noticias = $(".e_area_noticias"); if (area_noticias.find(".e_noticia").length >= 2) {
        var parametros_slide_noticias = { elemento: "#e_slide_noticias", setas: !1, minwidth: 280, rotacionar: 5 }
        var noticias_capa = function () { var noticias; if (window.innerWidth <= 800) { parametros_slide_noticias.slider = !0; sw_slider(parametros_slide_noticias) } else { parametros_slide_noticias.slider = !1; sw_slider(parametros_slide_noticias) } }
        sw_funcoes.push(noticias_capa)
    }
})