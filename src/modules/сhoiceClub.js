const choiceClub = () =>  {
   const clubSelect = document.querySelector('.club-select'),
      listClub = clubSelect.querySelector('ul');   
   
   window.addEventListener('click', (event) => {
      const target = event.target;
      if (target.closest('.club-select')) {
         listClub.classList.toggle('list-active');
         
      } else if (!target.closest('.club-select>ul')) {
         listClub.classList.remove('list-active');
      }
   });
};

export default choiceClub;