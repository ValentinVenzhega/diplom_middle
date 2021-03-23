const serviceSlider = () => {
   const slider = document.querySelector('.services-slider'), 
   slide = slider.querySelectorAll('.slide'),
   servicesBlock = document.querySelector('.services-block');

   let offset = 0; 

   // переход слайда по клику
   servicesBlock.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.target;

      if (target.closest('#arrow-right')) {
         if (offset < 1050) {
            offset = offset + 224;
            slider.style.left = -offset + 'px';
         }
      } else if (target.closest('#arrow-left')) {
         if (offset > 1050 || offset > 0) {
            offset = offset - 224;
            slider.style.left = -offset + 'px';
         }
      }
   });
};

export default serviceSlider;