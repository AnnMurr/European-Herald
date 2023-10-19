export const hideScroll = (isSubBarActive: boolean) => {
    isSubBarActive ? document.body.classList.add('no-scroll') :
        document.body.classList.remove('no-scroll')
}