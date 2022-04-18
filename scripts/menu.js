function menuMobile(x) {
    var menu = document.querySelector('nav.cabecalho-menu')

    x.classList.toggle("fechar-menu")

    if (menu.style.display != 'block') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }

    menu.innerHTML = `<a href="#" class="cabecalho-menu-item">Comunidade ballerini</a>
    <a href="#" class="cabecalho-menu-item" onclick="abrirModal()">Tutorial</a>
    <a href="#" class="cabecalho-menu-item">Open Source</a>
    <a href="#" class="cabecalho-menu-item">Comandos</a>`
}
