let btn = document.querySelector('.theme');
btn.addEventListener('click',funcMode);

function funcMode(){
  let body = document.querySelector('body');
  body.classList.toggle('dark');
  body.classList.toggle('light');
}
