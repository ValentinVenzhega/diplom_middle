const choiceClub = () =>  {
   const clubSelect = document.querySelector('.club-select'),
      listClub = document.querySelector('.left ul');   
   
   window.addEventListener('click', (event) => {
      const target = event.target;
      if (target.closest('.club-select')) {
         listClub.classList.toggle('list-active');
         
      } else if (!target.closest('ul')) {
         listClub.classList.remove('list-active');
      }
      if (target.closest('ul')) {
         listClub.classList.add('list-active');
      }
   });
};

export default choiceClub;