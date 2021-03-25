const validForm = () => {
   const form = document.querySelectorAll('form'),
      checkbox = document.querySelectorAll('input[type="checkbox"]'),
      footerForm = document.querySelector('#footer_form'),
      radios = footerForm.querySelectorAll('input[type="radio"]'),
      button = document.querySelectorAll('button[type="submit"]'),
      footerBtn = document.querySelector('.callback-btn-footer'),
      regName = /^[А-Яа-я ]{2,20}$/,
      regPhone = /^(8|\+7)([0-9]{9,10})$/;

      button.forEach(elem => elem.disabled = true);

      // проверка выбран ли хоть один клуб
      radios.forEach(item => {
         item.addEventListener('click', function() {
            for (let radio of radios) {
               if (radio.checked) {
                  footerBtn.disabled = false;
               }
            }
         });
      });
      
      // проверка нажат ли чекбокс
      checkbox.forEach(item => {
         item.addEventListener('click', () => {
            if (item.checked) {
               button.forEach(elem => elem.disabled = false);
            } else {
               button.forEach(elem => elem.disabled = true);
            }
         });
      });
   
      // переводим каждое слово с большой буквы
   const substr = (elem) => {
      let words = elem.value.split(' ');
      
      for (let i = 0; i < words.length; i++) {
         // Увеличим регистр каждого слова:
         words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1).toLowerCase();
      }
      // Сольем массив обратно в строку:
      let result = words.join(' ');
      elem.value = result;
   };

   const validInput = (elem) => {
      elem.value = elem.value.replace(/-{2,}/g, '-');
      elem.value = elem.value.replace(/\s{2,}/g, ' ');
      elem.value = elem.value.replace(/^[ \s]+|[ \s]+$/, '');
      elem.value = elem.value.replace(/^[/-]+|[/-]+$/, '');
   };

   // валидация инпутов
   const validateElem = (elem) => {
      if (elem.name === 'name' && elem.value !== '') {
         if (!regName.test(elem.value)) {
            elem.style.border = '3px solid red';
            elem.value = '';
         } else {
            substr(elem);
            validInput(elem);
            elem.style.border = '3px solid green';
         }
      }
      if (elem.name === 'phone' && elem.value !== '') {
         if (!regPhone.test(elem.value)) {
            elem.style.border = '3px solid red';
            elem.value = '';
         } else {
            validInput(elem);
            elem.style.border = '3px solid green';
         }
      }
   };
   
   // перебираем наши формы
   form.forEach(item => {
      for (let elem of item.elements) {
         if (elem.tagName !== 'BUTTON') {
            elem.addEventListener('blur', () => {
               validateElem(elem);
            });
         }
      }
      item.addEventListener('submit', (event) => {
         event.preventDefault();
         for (let elem of item.elements) {
            if (elem.tagName !== 'BUTTON') {
               if (elem.value !== '') {
                  elem.style.border = 'none';
               }
            }
         }
      });
   });
};

export default validForm;