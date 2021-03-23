const gallerySlider = () => {
   const slider = document.querySelector('.gallery-slider'), 
      slide = slider.querySelectorAll('.slide'),
      styleGallery = document.querySelector('#style-gallery');
   
   let currentSlide = 0,
      interval;

   const prevSlide = (elem, index) => {
      elem[index].style.display = 'none';
   };

   const nextSlide = (elem, index) => {
      elem[index].style.display = 'block';
   };

   // автопроигрывание слайдов
   const autoPlaySlide = () => {
      prevSlide(slide, currentSlide);
      currentSlide++;
      if (currentSlide >= slide.length) {
         currentSlide = 0;
      }
      nextSlide(slide, currentSlide);
   };

   const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
   };

   const stopSlide = () => {
      clearInterval(interval);
   };

   // переход слайда по клику
   slider.addEventListener('click', (event) => {
      event.preventDefault();

      const target = event.target;
      console.log(target);
      prevSlide(slide, currentSlide);

      if (target.closest('#arrow-right')) {
         
         currentSlide++;
      } else if (target.closest('#arrow-left')) {
         currentSlide--;
      }

      if (currentSlide >= slide.length) {
         currentSlide = 0;
      }

      if (currentSlide < 0) {
         currentSlide = slide.length -1;
      }

      nextSlide(slide, currentSlide);
   });

   slider.addEventListener('mouseover', (event) => {
      if (event.target.closest('.gallery-slider')) {
         stopSlide();
      }
   });

   slider.addEventListener('mouseout', (event) => {
      if (event.target.closest('.gallery-slider')) {
         startSlide();
      }
   });
   startSlide(3000);
};


export default gallerySlider;