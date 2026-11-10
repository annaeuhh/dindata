const bars = document.querySelector("#bars");
const icon = document.querySelector("#bars > i")

const openNav = () => {
    /* navigation */
    document.querySelector("#menu").classList.toggle("show");
    /* icon */
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    /* aria-expanded */
    const expanded = bars.getAttribute('aria-expanded') === 'true';
    bars.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    /* aria-label */
    const label = bars.getAttribute('aria-label') === 'åben menu';
    bars.setAttribute('aria-label', label ? 'luk menu' : 'åben menu');
}

bars.addEventListener("click", openNav)