const sendForm = (formId, elemCheck) => {

   const form = document.getElementById(formId),
      statusMessage = document.createElement('div'),
      popup = document.querySelectorAll('.popup'),
      thanks = document.querySelector('#thanks'),
      thanksContent = thanks.querySelector('.form-content'),
      checkbox = document.querySelectorAll('input[type="checkbox"]'),
      footerForm = document.querySelector('#footer_form'),
      clubFooter = footerForm.querySelectorAll('.club > input[type="radio"]'),

      clubMessage = 'Пожалуйста, выберите клуб',
      warningMessage = 'Необходимо подтвердить согласие на обработку персональных данных';
   
      statusMessage.style.cssText = 'font-size: 20px;max-width:400px;margin: 0 auto;padding-top:10px;color:rgb(168, 15, 15);';

   //проверка на чекбокс
   let checkBox;

   if (elemCheck !== false) {
      checkBox = document.getElementById(elemCheck); 
      checkBox.addEventListener('change', () => {
         if(checkBox && checkBox.checked === false) {
            statusMessage.textContent = warningMessage;
         } else {
            statusMessage.textContent = '';
         }  
      });
   }

   //проверка какой клуб выбран
   let clubChecked = false;
   
   clubFooter.forEach((elem) => {
      if(elem.checked) {
         clubChecked = true;
      }
   });

   if(!clubChecked) {
      footerForm.addEventListener('click',(event)=>{
         const target = event.target;

         if(target.closest('.club')) {
            statusMessage.textContent = '';
            clubChecked = true;
         }
      });
   }

   form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.appendChild(statusMessage);
      const target = event.target;

      statusMessage.textContent = 'идет отправка';
      
      const formData = new FormData(form); // получаем данные через объект formData (создаем экземпляр класса form Data)
      let body = {}; // создаем объект и будет оправлять его на сервер
      formData.forEach((val, key) => { // берем значения из formData
         body[key] = val;
      });

      //блок с чекбоксом
      if (elemCheck !== false) { 
         if(checkBox && checkBox.checked === false) {
            statusMessage.textContent = warningMessage;
            return;
         } else {
            statusMessage.textContent = '';
         }
      }

      //проверка на выбранный клуб
      if(target.closest('#footer_form')) {
         if(!clubChecked) {
            statusMessage.textContent = clubMessage;
            return;
         } else {
            statusMessage.textContent = '';
            clubChecked = false;
         }
      }

      postData(body)
      .then((response) => {
         if (response.status !== 200) {
            throw new Error('status networking not 200');
         } else {
            statusMessage.textContent = '';
            thanks.style.display = 'block';
            setTimeout(() => {
               popup.forEach(elem => elem.style.display = 'none');
               thanks.style.display = 'none';
            }, 2000);
         }

      })
      .catch((error) => {
         statusMessage.textContent = '';
         thanks.style.display = 'block';
            thanksContent.innerHTML = `<div class="form-content">
               <h4>Извините!</h4>
               <p>Что-то пошло не так.<br> Ваша заявка не отправлена.</p>
               <button class="btn close-btn">Закрыть</button>
            </div>`;  
         setTimeout(() => {
            thanks.style.display = 'block';
            popup.forEach(elem => elem.style.display = 'none');
         }, 2000);
      });
      form.reset();
   });

   const postData = (body) => {
      return fetch('./server.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      });
   };
};

export default sendForm;