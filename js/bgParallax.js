(function () {
    // OBJETO PARA LAS PROPIEDADES
    const propParallax = {
        seccion: document.querySelector('.parallax'),
        recorrido: null,
        limite: null,
    }

    // METODOS PARA LAS PROPIEDADES
    const metParallax = {
        inicio: function () {
            window.addEventListener('scroll', metParallax.scrollParalax)
        },
        scrollParalax: function () {
            propParallax.recorrido = window.pageYOffset
            propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight

            if (propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite) {
                propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px'
            } else {
                propParallax.seccion.style.backgroundPositionY = 0
            }
        }
    }

    metParallax.inicio()
}())