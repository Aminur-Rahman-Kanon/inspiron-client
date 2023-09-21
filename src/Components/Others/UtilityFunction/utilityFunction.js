export const disableScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    console.log(scrollLeft, scrollTop);
    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)
}

export const bannerEffect = (element) => {
    const el = document.querySelector(`.${element}`);
    const imgContaner = el.children[0];
    const headerItem = el.children[1].children[0].children;
    const listItem = el.children[1].children[1].children;

    imgContaner.className = 'item-img-container animate-img';

    const headerTimers = [];
    for (let i=0; i<headerItem.length; i++) {
        headerTimers[i] = setTimeout(() => {
            headerItem[i].className = 'item-header animate-header'
        }, 100 + i * 35)
    }

    if (headerItem.length) {
        headerItem[1].addEventListener('animationend', () => {
            const listTimers = [];
            for (let i=0; i<listItem.length; i++) {
                listTimers[i] = setTimeout(() => {
                    listItem[i].className = 'item-list animate-list';
                }, 500 + i * 50)
            }
        })
    }


    // return headerTimers.forEach(times => clearTimeout(times));
}