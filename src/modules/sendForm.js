const sendForm = () => {

   const errorMessage = 'Что-то пошло не так',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся',
      form = document.querySelectorAll('form'),
      statusMessage = document.createElement('div'),
      popup = document.querySelector('.popup'),
      thanks = document.getElementById('thanks');

      statusMessage.classList.add('status-message');

   form.forEach (elem => {
      elem.addEventListener('submit', (event) => {
         event.preventDefault();
         elem.appendChild(statusMessage);

         statusMessage.textContent = 'идет отправка';
         
         const formData = new FormData(elem); // получаем данные через объект formData (создаем экземпляр класса form Data)
         let body = {}; // создаем объект и будет оправлять его на сервер
         formData.forEach((val, key) => { // берем значения из formData
            body[key] = val;
         });

         postData(body)
         .then((response) => {
            if (response.status !== 200) {
               throw new Error('status networking not 200');
            } else {
               statusMessage.textContent = successMessage;
            }
         })
         .catch((error) => {
            statusMessage.textContent = errorMessage;
         });
         elem.reset();
      });
   });

   const postData = (body) => {
      return fetch('./server.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      });
   }
};

export default sendForm;