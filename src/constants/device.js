export const desktopAnimation = (isDesktop, delayTime) => ({
    hidden: {   
        x: isDesktop? 80 : 0, 
        opacity: 0 
    },

    visible: {
        x: 0,
        opacity: 1, 

        transition: { 
            type: 'tween',
            duration: 1.2, 
            delay: delayTime,
            ease: [0.25, 0.25, 0.25, 0.75]
        },
    },
});

export const mobileAnimation = (isMobile, delayTime) => ({
    hidden: { 
        y: isMobile? -80 : 0, 
        opacity: 0 
    },

    visible: {
        y: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 1.2, 
            delay: delayTime,
            ease: [0.25, 0.25, 0.25, 0.75]
        },
    },
});


