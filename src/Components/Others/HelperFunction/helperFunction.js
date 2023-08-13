export const disableScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    console.log(scrollLeft, scrollTop);
    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)
}
