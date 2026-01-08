(function(){
    let propForm={
        form: document.contact_form,
        elements_form: document.contact_form.elements,
        error: null,
        errorText: null

    }

    let metForm={
        start: function(){
            for (let i = 0; i < propForm.elements_form.length; i++) {
                //Will validate if the elements that are clicked are of any of these types.
                if(propForm.elements_form[i].type=='text' || propForm.elements_form[i].type=='email' ||
                    propForm.elements_form[i].nodeName.toLowerCase()=='textarea'){
                        //If is the case, we will add an event to put the focus and the blur 
                        //in the elements.
                        propForm.elements_form[i].addEventListener('focus', metForm.focusInput);
                        propForm.elements_form[i].addEventListener('blur', metForm.blurInput);
                }
                
            }
            propForm.form.addEventListener('submit', metForm.validateInput)
        },
        focusInput: function(){
            //The first element in the parent will put the class="label active".
            this.parentElement.children[1].className='label active';
        },
        blurInput: function(){
            //If detects that the element doesn't have text...
            if(this.value == ''){
                // will remove the active state.
                this.parentElement.children[1].className='label';
            }
            
        },
        validateInput: function(e){
            for (let i = 0; i < propForm.elements_form.length; i++) {
                if(propForm.elements_form[i].value==''){
                    e.preventDefault();
                    if (propForm.elements_form[i].parentElement.children.length<3) {
                        propForm.error=document.createElement('p');
                        propForm.errorText=document.createTextNode('Please fill the field '+propForm.elements_form[i].name);
                        propForm.error.appendChild(propForm.errorText);
                        propForm.error.className='error';
                        propForm.elements_form[i].parentElement.appendChild(propForm.error);                    
                    }
                }
                else{
                if(propForm.elements_form[i].parentElement.children.length>=3){
                    propForm.error=propForm.elements_form[i].parentElement.getElementByTagName('p')[0];
                    propForm.error=propForm.elements_form[i].parentElement.removeChild(propForm.error);
                }  
                }
                
            }
        }
    }
    metForm.start();
}())
