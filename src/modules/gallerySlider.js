const gallerySlider = () => {
   const slider = document.querySelector('.gallery-slider'), 
      slide = slider.querySelectorAll('.slide'),
      styleGallery = document.querySelector('#style-gallery'),
      galleryLine = document.querySelector('.gallery-line');
   
   let currentSlide = 0,
      interval;

   const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
   };

   const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
   };

   // добавление точек в разметку
   for (let i = 0; i < slide.length; i++) {
      const li = document.createElement('li');
      li.className = 'line';
      galleryLine.append(li);
   }
   let line = document.querySelectorAll('.line');

   // автопроигрывание слайдов
   const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'slide-active');
      prevSlide(line, currentSlide, 'line-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
         currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'slide-active');
      nextSlide(line, currentSlide, 'line-active');
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

      // if (!target.matches('.gallery-btn, .line')) {
      //    return;
      // }

      const target = event.target;
      prevSlide(slide, currentSlide, 'slide-active');
      prevSlide(line, currentSlide, 'line-active');

      if (target.closest('#arrow-right')) {
         
         currentSlide++;
      } else if (target.closest('#arrow-left')) {
         currentSlide--;
      }  else if (target.matches('.line')) {
         line.forEach((elem, index) => {
            if (elem === target) {
               currentSlide = index;
            }
         });
      }

      if (currentSlide >= slide.length) {
         currentSlide = 0;
      }

      if (currentSlide < 0) {
         currentSlide = slide.length -1;
      }

      nextSlide(slide, currentSlide, 'slide-active');
      nextSlide(line, currentSlide, 'line-active');
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