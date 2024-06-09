 // Add a event listener that runs after the DOM is fully loaded; then a function will fire
 document.addEventListener('DOMContentLoaded', initLinks);

 // Set up an array with the image locations - these will be used in the src attribute for the image
 var arrPictures = ["./images/andrew-sterling-zkqwRzGEmks-unsplash.jpg", "./images/brandon-morales-G55KTyv7EIc-unsplash.jpg", "./images/nandita-damaraju-IJNigkbE4hg-unsplash.jpg", "./images/tyler-schaefer-zBx5-tfJeqM-unsplash.jpg"];



 // Variable to keep track of our current image
 var thePic = 0;

 // function to set up the event listeners for our navigation links for the slideshow
 function initLinks(){
     // add an event listener to the Previous link to call a fucntion when the link is clicked
     document.getElementById("aPrevLink").addEventListener("click", processPrevious);
     // add an event listener to the Next link to call a fucntion when the link is clicked
     document.getElementById("aNextLink").addEventListener("click", processNext);
 }
 // Function will handle the "Previous" link click event 
 function processPrevious(event){
     // Prevent the default action of the link - which would be navigation to #
     event.preventDefault();

     // We are already at the beginning of the slideshow
     if (thePic == 0){
         // The flow of the slideshow is up to the designer - just keep the counter at 0 or you could go to the last image - arrPictures.length - 1
     } else {
         thePic = thePic - 1;
     }

     // Update the image source for whatever pic we should show the user
     document.getElementById("imgPicture").src = arrPictures[thePic];
 }

 // Function will handle the "Next" link click event 
 function processNext(event){
     // Prevent the default action of the link - which would be navigation to #
     event.preventDefault();
    
     // watch the console for array out of bounds exception
     if (thePic == arrPictures.length - 1){
         // the flow of the slideshow is up to the designer - either keep the current image, or go back to the beginning
         // Set thePic = 0, or do nothing
     } else {
         thePic = thePic + 1;
     }
     

     // Update the image source for whatever pic we should show the user
     document.getElementById("imgPicture").src = arrPictures[thePic];
 }