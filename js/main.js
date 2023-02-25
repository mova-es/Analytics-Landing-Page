document.querySelector(".form__auth-btn").onclick = function () {
  const userPassFirst = document.querySelector("#password1").value;
  const userPassSecond = document.querySelector("#password2").value;

  if (userPassFirst == "") {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
  } else if (userPassFirst != userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
    return false;
  } else if (userPassFirst == userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid green";
    document.getElementById("password2").style = "border: 1px solid green";
  }
  return true;
};

const burgerMenuEl = document.querySelector('.burger');
const menuEl = document.querySelector('.menu');
const signUpBtn = document.querySelector('.sign__up-btn2');
burgerMenuEl.addEventListener('click', function (e) {
    menuEl.classList.add('show');
    signUpBtn.classList.remove('none')
});

const closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function (e) {
  menuEl.classList.remove('show')
});

const formEl = document.querySelector('.companies__stars-form');
const buttonEls = document.querySelectorAll('.rating_sign_input');

buttonEls.forEach((radio) => {
  radio.addEventListener('change', function () {
    const checkedNumber = document.querySelector('.rating_sign_input:checked').value || undefined;
    buttonEls.forEach((item) => {
      const currentLabel = item.previousElementSibling;
      if(item.value <= checkedNumber) {
        currentLabel.classList.add('check');
      } else {
        currentLabel.classList.remove('check');
      }
      
    });
    alert('Спасибо за оценку!')
  });
})