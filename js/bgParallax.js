(function(){
//Object for effect
    let propParallax={
        section: document.querySelector('.parallax'),
        path: null,
        limit: null
    }

    //Methods for effect
    let metParallax={
    start: function(){
        window.addEventListener('scroll', metParallax.scrollParallax);
    },
    scrollParallax: function(){
        //Property to know how much the page was scrolled.
        propParallax.path=window.pageYOffset;
        //Interval from the start of the document until the element plus the element height.
        propParallax.limit=propParallax.section.offsetTop+propParallax.section.offsetHeight;
        //Conditional to establish when to start the Parallax effect or to stop it.
        if (propParallax.path>(propParallax.section.offsetTop - window.outerHeight) && propParallax.path<=propParallax.limit) {
            //Calculate the new image position in pixels.
            propParallax.section.style.backgroundPositionY=(propParallax.path - propParallax.section.offsetTop)/1.5+'px';
        } 
        else {
            propParallax.section.style.backgroundPositionY=0;
        }
    }
    }
    metParallax.start();
    }())
