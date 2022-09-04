//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "sonu@gmail.com";
let input_username = "sonu@gmail.com";

let stored_password = "12345h";
let input_password = "12345h";

if (input_username == stored_username) {
  if (input_password == stored_password) {
    console.log("the user can login");

  }
  else {
    console.log("password wrong");
  }
}
else {
  console.log("the user can not login");
}