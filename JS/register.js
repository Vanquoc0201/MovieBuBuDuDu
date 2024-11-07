// console.log("Hello");
const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const rePasswordElement = document.getElementById("repassword");
const addressElement = document.getElementById("address");
// Element liên quan đến lỗi
const userNameError = document.getElementById("userNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const rePasswordError = document.getElementById("repasswordError");
// Lấy dữ liệu từ trong localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];
/**
 * 
 * @param {*} email 
 * @returns 
 */
function validateEmail (email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
formRegister.addEventListener("submit",function(e){
    e.preventDefault();
    if(!userNameElement.value){
       userNameError.style.display = "block";
    } else{
        userNameError.style.display = "none";
    }
    if(!emailElement.value){
        emailError.style.display = "block";
     } else{
         emailError.style.display = "none";
         if(!validateEmail(emailElement.value)){
            emailError.style.display = "block";
            emailError.innerHTML = "Email của bạn không đúng định dạng";
         }
     }
     if(!passwordElement.value){
        passwordError.style.display = "block";
     } else{
         passwordError.style.display = "none";
     }
     if(!rePasswordElement.value){
        rePasswordError.style.display = "block";
     } else{
         rePasswordError.style.display = "none";
     }
     if(passwordElement.value !== rePasswordElement.value){
        rePasswordError.style.display = "block";
        rePasswordError.innerHTML = "Mật khẩu không đúng"
     } else {
        rePasswordError.style.display = "none";
     }
    if(userNameElement.value &&
      emailElement.value &&
      passwordElement.value &&
      rePasswordElement.value &&
      passwordElement.value === rePasswordElement.value &&
      validateEmail(emailElement.value)
   ) {
      const user = {
         userId: Math.ceil(Math.random() * 100000000),
         userName : userNameElement.value,
         email : emailElement.value,
         password : passwordElement.value,
         address : addressElement.value,
      };
      // Push users vào trong mảng userLocal
      userLocal.push(user);
      // Lưu trữ dữ liệu trên local
      localStorage.setItem("users",JSON.stringify(userLocal));
      // Chuyển hướng về trang đăng nhập
      setTimeout(function(){
       window.location.href = "login.html"
      },1000)
    }
});
