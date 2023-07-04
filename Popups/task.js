
const modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active';

const divModalCloseArray = Array.from(document.querySelectorAll('div.modal__close'))

divModalCloseArray.forEach((modalClose) => {
  modalClose.onclick = () => {
    modalClose.closest('.modal').className = 'modal';
  }
})

const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');
showSuccess.onclick = () => {
  modalMain.className = 'modal';
  modalSuccess.className = 'modal modal_active';
}