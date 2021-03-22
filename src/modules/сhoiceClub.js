const choiceClub = () =>  {
   const clubSelect = document.querySelector('.club-select'),
      listClub = clubSelect.querySelector('ul');   
   
   window.addEventListener('click', (event) => {
      const target = event.target;
      if (target.closest('.club-select')) {
         listClub.style.display = 'block';
         
      } else if (!target.closest('.club-select>ul')) {
         listClub.style.display = 'none';
      }
   });
};

export default choiceClub;