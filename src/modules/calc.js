const calc = () => {
   const total = document.querySelector('#price-total'),
      form = document.querySelector('#card_order'),
      promoInput = document.querySelector('.price-message>input');

   const price = {
            mozaika: [1999, 9900, 13900, 19900],
            schelkovo: [2999, 14990, 21990, 24990]
         };
   
   let month = 0,
      club = price.mozaika,
      result = price.mozaika[0];

   if (total) {
      total.textContent = result; 

      form.addEventListener(('click'), (event) => {
         const target = event.target;

         //получаем месяцы            
         if(target.closest('.time')) {
            if(target.tagName === 'LABEL') {
               month = +target.getAttribute('for').slice(1, target.length) - 1;
            }
         } 

         //получаем цены            
         if(target.closest('.club')) {
            if(target.tagName === 'INPUT') {
               club = price[target.value];                     
            }
         }

         result = club[month];

         if(promoInput.value === 'ТЕЛО2021') {
            result = Math.round(result * 0.7);
            total.innerHTML = result;
         }
         total.innerHTML = result;
      });

      //промокод
      const getPromo = () => {        
         promoInput.addEventListener('input', () => {
            if(promoInput.value === 'ТЕЛО2021') {
               result = Math.round(result * 0.7);
               total.innerHTML = result;
            }
         });
      };
      getPromo();
   }
};

export default calc;