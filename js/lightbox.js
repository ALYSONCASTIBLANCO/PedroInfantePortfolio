//To protect the code: any other code won't affect the current one.
(function(){
    
/*Object with properties.*/
let propLightbox={
    //Container that is containing the image.
    imgContainer: document.getElementsByClassName('lightbox'),
    image: null,
    imageSRC:null,
    //Obtaining the document's body.
    bodyDOM: document.getElementsByTagName('body')[0],
    lightbox_container: null,
    modal: null,
    close_modal: null,
    animation: 'fade'
}
/*Object with methods.*/
let metLightbox={
    start: function(){
        //Apply the event to all the containers when I click them.
        for (let i = 0; i < propLightbox.imgContainer.length; i++) {
            propLightbox.imgContainer[i].addEventListener('click', metLightbox.captureImg);
            
        }
    },
    //Method to capture what is the image that I've clicked.
    captureImg: function(){
        propLightbox.image=this;
        console.log(propLightbox.image);
        //Method to run the lightbox effect inserting as parameter the selected image.
        metLightbox.lightbox(propLightbox.image);
    },
    lightbox: function(image){
        //Here I obtain the image path that I will use in lightbox;
        propLightbox.imageSRC=image.src;
        /*Here I create the div container that is containing the image with the id="lightbox_container"*/
        propLightbox.bodyDOM.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
        //Here I store the element in a variable to manipulate it."
        propLightbox.lightbox_container=document.getElementById('lightbox_container');
        //Providing styles to this container.
        propLightbox.lightbox_container.style.width='100%';
        propLightbox.lightbox_container.style.height='100%';
        propLightbox.lightbox_container.style.position='fixed';
        propLightbox.lightbox_container.style.zIndex='1000';
        propLightbox.lightbox_container.style.background='rgba(0,0,0,0.8)';
        propLightbox.lightbox_container.style.top='0';
        propLightbox.lightbox_container.style.left='0';
        //Inside of the big div, I create a new div that will sture the image, will be the modal.
        propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        //Here I store the element in a variable to manipulate it.
        propLightbox.modal=document.getElementById('modal');
        //Providing styles to this container.
        propLightbox.modal.height='100%';
        //Creating the image inside of modal and assigning the same path than the original image.
        propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imageSRC);
        //To the image that is inside of the modal, assign class="image_modal", to inject CSS styles.
        propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'image_modal');
        //Add animations to the images in the modal.
        if (propLightbox.animation=='fade') {
            document.getElementsByClassName('image_modal')[0].style.opacity=0;
            setTimeout(function(){
              document.getElementsByClassName('image_modal')[0].style.opacity=1;  
            }, 50)
        }
        //Inserting a new HTML element inside of HTML code using inner HTML (close icon).
        propLightbox.modal.innerHTML+='<i id="close_modal" class="ph ph-x-circle"></i>'
        //Here I store the element in a variable to manipulate it.
        propLightbox.close_modal=document.getElementById('close_modal');
        //When I click in the close icon, I'll execute the function closeModal.
        propLightbox.close_modal.addEventListener('click', metLightbox.closeModal);


    },
    //This function will delete the containes previously created.
    closeModal: function(){
        propLightbox.bodyDOM.removeChild(propLightbox.lightbox_container);
    }
}
metLightbox.start();
}())
