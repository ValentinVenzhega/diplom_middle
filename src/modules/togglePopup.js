const togglePopup = () =>  {
   const fixedGift = document.querySelector('.fixed-gift'),
      freeVisitForm = document.querySelector('#free_visit_form'),
      callbackForm = document.querySelector('#callback_form'),
      giftModal = document.querySelector('#gift'),
      thanks = document.querySelector('#thanks'),
      visitForm = document.querySelector('form[name="free-visit-form"]'),
      formCallback = document.querySelector('form[name="callback-form"]');
   
   window.addEventListener('click', (event) => {
      const target = event.target;

      // записаться на визит
      if (target.closest('.open-popup')) {
         freeVisitForm.style.display = 'block';
      } else if (target.closest('.open-popup>.close-form') || !target.closest('#form2')) {
         freeVisitForm.style.display = 'none';
         visitForm.reset();
      }

      // перезвони мне
      if (target.closest('.callback-btn')) {
         callbackForm.style.display = 'block';
      } else if (target.closest('.callback-btn .close_icon') || !target.closest('#form1')) {
         callbackForm.style.display = 'none';
         formCallback.reset();
      }

      // подарок
      if (target.closest('.fixed-gift')) {
         giftModal.style.display = 'block';
         fixedGift.style.display = 'none';
      } else if (target.closest('#gift .close_icon') || target.closest('#gift .close-btn')) {
         giftModal.style.display = 'none';
      }

      // спасибо за заявку
      if (target.closest('#thanks .sloce-icon') || !target.closest('#thanks .form-content') || 
         target.closest('#thanks .close-btn')) {
         thanks.style.display = 'none';
      }
   });

};
export default togglePopup;