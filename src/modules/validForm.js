const validForm = () => {

   const form = document.querySelectorAll('form'),
      regName = /^[А-Яа-я ]{1,20}$/,
      // regPhone = /^(8|\+7)([0-9])$/,
      regPhone1 = /^[0-9]+$/;

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
            elem.value = elem.value.slice(0,10);
            elem.style.border = '3px solid green';
         }
      }
      if (elem.name === 'phone' && elem.value !== '') {
         if (!regPhone1.test(elem.value)) {
            elem.style.border = '3px solid red';
            elem.value = '';
         } else if (elem.value[0] !== '8' && elem.value[0] !== '7' || elem.value.length < 7 || elem.value.length > 11) {
            elem.style.border = '3px solid red';
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
            elem.addEventListener('input', () => {
               
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