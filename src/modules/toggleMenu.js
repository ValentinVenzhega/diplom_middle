const toggleMenu = () => {
   const popupMenu = document.querySelector('.popup-menu');

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
};

export default  toggleMenu;