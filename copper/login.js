var users = ["ShivamPai2009" , "shiveshpai2013" , "HEMNASIT1"];
var guestusers = ["8932" , "9374" , "7783" , "7890" , "1265"];
function login() {
  for (let i = 0; i < users.length; i++) {
   if(document.getElementById("code").value == users[i]){
     localStorage.setItem("voucher" , document.getElementById("code").value);
     location.href = "/copper";
   }
}
}