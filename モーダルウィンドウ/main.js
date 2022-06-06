const open = document.getElementById("open");
const close = document.getElementById("close");
const mask = document.getElementById("mask");
const modal = document.getElementById("modal");

open.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

close.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});

mask.addEventListener('click', () => {
  close.click();
});