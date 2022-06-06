const lists = document.querySelectorAll('.menu li a');
const contents = document.querySelectorAll('.content');

lists.forEach((clickedList) => {
  clickedList.addEventListener('click', (e) => {
    e.preventDefault();

    lists.forEach((list) => {
      list.classList.remove('active');
    });

    clickedList.classList.add('active');

    contents.forEach((content) => {
      content.classList.remove('active');
    });
    
    document.getElementById(clickedList.dataset.id).classList.add('active');
  });
});