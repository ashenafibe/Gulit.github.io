const button =document.querySelector('.search_items-small');
const popups =document.querySelector('.popup');

 button.addEventListener('click',
   () => {
//     //   search.classList.toggle("show");
//     // console.log('helloo');
   popups.classList.toggle('showpopup')
    
   });

    const btnlarge =document.querySelector('.search_items');

    //   console.log(btnlarge);
     btnlarge.addEventListener('click',
       () => {
    // //     //   search.classList.toggle("show");
      // console.log('helloo');
     popups.classList.toggle('showpopup')
        
         });



         