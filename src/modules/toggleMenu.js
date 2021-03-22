const toggleMenu = () => {
   const popupMenu = document.querySelector('.popup-menu'),
   menuBtn = document.querySelector('.menu-button'),

   positionStart = menuBtn.offsetTop,
   myStyle = document.querySelector('#my-style');

   // открытие закрытие меню
   window.addEventListener('click', (event) => {
      const target = event.target;
      if (target.closest('.menu-button')) {
         popupMenu.style.display = 'flex';
      } else if (target.closest('.close-menu-btn')) {
         popupMenu.style.display = 'none';
      } else if (target.closest('.popup-menu>ul>li>a')) {
         popupMenu.style.display = 'none';
      }
   });

   // реализация прилипания бургер меню
   if(!myStyle) {
      const style = document.createElement('style');
      style.setAttribute('id', 'my-style');
      style.textContent = `
         .position {
            position: fixed;
            top:0;
            right: 14px;
            z-index: 6000;
         }
         .top-menu {
            paddin-top: 1px;
            height: 59px;
         }
         .position + .popup-menu + .head-slider {
            padding-top: 60px;
         }
      `;
      document.head.appendChild(style);
   }

   window.addEventListener('scroll', (event) => {
      if (window.pageYOffset > positionStart) {
         menuBtn.classList.add("position");
      } else {
         menuBtn.classList.remove("position");
      }
   });
};

export default  toggleMenu;