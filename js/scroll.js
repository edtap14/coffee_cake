// OBJETO CON PROPIEDADES DEL EFECTO SCROLL
const propScroll = {
    position: window.pageYOffset,
    scroll_suave: document.getElementsByClassName('scroll-suave'),
    volver_arriba: document.getElementsByClassName('volver-arriba'),
    destino: null,
    seccion_distancia: null,
    intervalo: null,
}
// OBJETO CON METODOS DE EFECTO SCROLL
const metScroll = {
    inicio: function () {
        for (var i = 0; i < propScroll.scroll_suave.length; i++) {
            propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse)
        }
        for (var i = 0; i < propScroll.volver_arriba.length; i++) {
            propScroll.volver_arriba[i].addEventListener('click', metScroll.subir)
        }
    },
    moverse: function (e) {
        e.preventDefault()
        propScroll.destino = this.getAttribute('href')
        propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop
        // console.log(propScroll.seccion_distancia)

        propScroll.position = window.pageYOffset
        propScroll.intervalo = setInterval(function () {
            if (propScroll.position < propScroll.seccion_distancia) {

                propScroll.position += 30;

                if (propScroll.position >= propScroll.seccion_distancia) {
                    clearInterval(propScroll.intervalo)
                }
            } else{
                propScroll
            }
            window.scrollTo(0, propScroll.position)
        }, 15)
    }
}

metScroll.inicio()