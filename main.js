const sidebarlinks=document.querySelector(".sidebar")
const navLinks2=document.querySelector(".sidebar")
const menuBtn=document.getElementById("menu-btn")
const closeBtn=document.getElementById("close-btn")
const form=document.querySelector(".form__account")
const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('modal-body')


function message(){
  var fistName=document.getElementById('firstName');
  var lastName=document.getElementById('lastName');
  var email =document.getElementById('email');
  var msg=document.getElementById("msg");
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

  if(fistName.value===''||lastName.value===''||email.value===''||msg.value===''){
    danger.style.display='block';
  }
   
  
  else{
      setTimeout(()=>{
        fistName.value='';
        lastName.value='';
        email.value='';
        msg.value='';
      },2000);
      success.style.display='block'
      danger.style.display='none'


      }
    }
    
myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


function hideNavLinks(){
    sidebarlinks.style.display="none"
    menuBtn.style.display="flex"
    closeBtn.style.display="none"

}
function showNavLinks(){
    sidebarlinks.style.display="flex"
    menuBtn.style.display="none"
    closeBtn.style.display="flex"
}

function hideForm(){
    form.style.display="none"
}

// Scroll reveal function (doesn't work) ------------------------------

window.sr = ScrollReveal({ reset: true });

const ScrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000
}
ScrollReveal().reveal(".header__container.section__subheader",{...ScrollRevealOption})

// Scroll reveal function (doesn't work) ------------------------------


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  const myCarouselElement = document.querySelector('#myCarousel')

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  })

