const scrollBlock = () => {
   const arrowTop = document.getElementById('totop'),
      headerMain = document.querySelector('.header-main'), 
      positionStart = headerMain.offsetTop;

      arrowTop.style.display = 'none';

      window.addEventListener('scroll', (event) => {
         if (window.pageYOffset > positionStart) {
            arrowTop.style.display = 'block';
         } else {
            arrowTop.style.display = 'none';
         }
      });
      
};
export default  scrollBlock;