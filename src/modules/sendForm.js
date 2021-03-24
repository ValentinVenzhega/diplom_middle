const sendForm = () => {

   const errorMessage = 'Что-то пошло не так',
      form = document.querySelectorAll('form'),
      statusMessage = document.createElement('div'),
      popup = document.querySelectorAll('.popup'),
      thanks = document.getElementById('thanks'),
      freeVisitForm = document.querySelector('#free_visit_form'),
      callbackForm = document.querySelector('#callback_form');

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
               statusMessage.textContent = '';
               thanks.style.display = 'block';
               setTimeout(() => {
                  popup.forEach(elem => elem.style.display = 'none');
                  thanks.style.display = 'none';
               }, 2000);
            }

         })
         .catch((error) => {
            statusMessage.textContent = errorMessage;
            setTimeout(() => {
               statusMessage.textContent = '';
               popup.forEach(elem => elem.style.display = 'none');
            }, 2000);
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