const togglePopup = () =>  {
   const fixedGift = document.querySelector('.fixed-gift'),
      freeVisitForm = document.querySelector('#free_visit_form'),
      callbackForm = document.querySelector('#callback_form'),
      giftModal = document.querySelector('#gift'),
      thanks = document.getElementById('thanks');
   
   window.addEventListener('click', (event) => {
      const target = event.target;

      // записаться на визит
      if (target.closest('.open-popup')) {
         freeVisitForm.style.display = 'block';
      } else if (target.closest('.close-form')) {
         freeVisitForm.style.display = 'none';
      } else if (!target.closest('#form2')) {
         freeVisitForm.style.display = 'none';
      }

      // перезвони мне
      if (target.closest('.callback-btn')) {
         callbackForm.style.display = 'block';
      } else if (target.closest('.close_icon')) {
         callbackForm.style.display = 'none';
      } else if (!target.closest('#form1')) {
         callbackForm.style.display = 'none';
      }

      // подарок
      if (target.closest('.fixed-gift')) {
         giftModal.style.display = 'block';
         fixedGift.style.display = 'none';
      } else if (target.closest('#gift>.close_icon')) {
         giftModal.style.display = 'none';
      } else if (target.closest('.close-btn')) {
         giftModal.style.display = 'none';
      } else if (!target.closest('.form-content')) {
         giftModal.style.display = 'none';
      }

      // спасибо за заявку
      if (target.closest('#thanks .sloce-icon')) {
         thanks.style.display = 'none';
      }else if (!target.closest('#thanks .form-content')) {
         thanks.style.display = 'none';
      } else if (target.closest('#thanks .close-btn')) {
         thanks.style.display = 'none';
      }
   });

};
export default togglePopup;