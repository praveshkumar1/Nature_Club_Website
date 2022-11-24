const send= document.getElementsByClassName("send");
console.log(send);
send[0].addEventListener('click',()=>{
    alert("Email send to AIT NATURE CLUB");
});

const clickedbox=document.getElementsByClassName('acc-card');
const hidden=document.getElementsByClassName("hidden-content");
const addicon=document.getElementsByClassName("sign-plus");
const closesign=document.getElementsByClassName("close-sign");

console.log(addicon);
console.log(closesign);
// closesign[0].style.display="block";
for (let i = 0; i < clickedbox.length; i++) {
    clickedbox[i].addEventListener('click',()=>{
     const result= clickedbox[i].classList.toggle('active');
     if(result){
         closesign[i].style.display="block";
         addicon[i].style.display="none";
     }else{
        closesign[i].style.display="none";
        addicon[i].style.display="block";
     }
    })
    
}