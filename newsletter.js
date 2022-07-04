var button = $('.submit');
var input = $('.a');

button.on ("click", check);

function check(event){
if (document.querySelector('.a').value.length === 0 ){
        alert("Please Enter your first name");
      }
    else if(document.querySelector('.b').value.length === 0){
      alert("Please Enter your last name");
    }else {
  event.preventDefault
  alert("Thank You 😊");
}
}

