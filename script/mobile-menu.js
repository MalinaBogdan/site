const menu = document.querySelector('.mobile-menu')
const closeBtn = document.querySelector('.mobile-menu-btn')
let openMenu = false

function myFunction(x) {
    x.classList.toggle("change");
    openMenu = !openMenu

    if (openMenu) {
        window.addEventListener("keydown", function (event) {
            if (event.key === 'Escape') {
                menu.classList.remove('show')
                x.classList.toggle("change");
                openMenu = false
            }
        })
        onClickClose(menu, closeBtn)
        menu.classList.add('show')
    }
    else {
        menu.classList.remove('show')
    }
}

function onClickClose(elem, closeBtn) {
    function outsideClickListener(event) {
        if (!elem.contains(event.target) && isVisible(elem) && !closeBtn.contains(event.target)) {
            menu.classList.remove('show')
            document.removeEventListener('click', outsideClickListener);
            closeBtn.classList.remove("change");
            openMenu = false
        }
    }
    document.addEventListener('click', outsideClickListener)
}
function isVisible(elem) {
    return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
}
