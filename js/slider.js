(function(){
    //Object for slider
    let propSlider={
        slider: document.getElementById('slider'),
        firstSlide: null
    }
    //Methods for slider
    let metSlider={
        start: function(){
            //Using setInterval to execute the function each three
            //seconds.
            setInterval(metSlider.moveSlide, 3000);
        },
        moveSlide: function(){
            //This function will modify the margin left -100% 
            //With a transition each second.
            propSlider.slider.style.transition='all 1s ease';
            propSlider.slider.style.marginLeft='-100%';

            //Now, to emulate the movement we will use this setTimeout:
            setTimeout(function(){
                //Assign to the most recent element deployed in the slider
                //using the command firstElementChild.
                propSlider.firstSlide=propSlider.slider.firstElementChild;
                //Then, we will add the first element in the last position
                //of the row using appendChild.
                propSlider.slider.appendChild(propSlider.firstSlide);
                //Start again the transition.
                propSlider.slider.style.transition='unset';
                //Margin left in 0 to locate the element aligned as we 
                //want.
                propSlider.slider.style.marginLeft='0';
            }, 1000);
        }
    }
    metSlider.start();
}())
