const openBtn=document.getElementById("openModal");
const closeBtn=document.getElementById("closeModal");
const modal=document.getElementById("modal");
let form=document.querySelector("#form");
const firstName=document.getElementById("firstName")
const lastName=document.getElementById("lastName")
const email=document.getElementById("email")
const password=document.getElementById("password")

  function signUp(){
    var fistName=document.getElementById('firstName');
    var lastName=document.getElementById('lastName');
    var email =document.getElementById('email');
    var password=document.getElementById("password");
    const modal=document.getElementById("modal");
    const danger = document.getElementById('danger');
    const success = document.getElementById('success');

    if(fistName.value===''||lastName.value===''||email.value===''||password.value===''){
      danger.style.display='block';
      setTimeout(()=>{
        danger.style.display='none';
      },9000);
    }
     
    
    else{
        setTimeout(()=>{
          fistName.value='';
          lastName.value='';
          email.value='';
          password.value='';
        },2000);
        modal.classList.add("open");
        success.style.display='block';
        danger.style.display='none'
  
        }
      }

closeBtn.addEventListener("click",()=>{
    modal.classList.remove("open");
})

let input=document.querySelector("input[type='text']")
input.addEventListener("focus",function(){
    input.style.outlineColor="red"
}
)

const goTopBtn = document.getElementById('goTop__btn')

window.addEventListener('scroll', ()=> {
  if (window.scrollY > 100) {
    goTopBtn.classList.add("active");
  }else{
    goTopBtn.classList.remove("active")
  }
});

