let password = document.querySelector("#password-field");
let strengthContainer = document.querySelector(".strength-container");
let strengthBar = document.querySelector("#strength-bar");
let strengthText = document.querySelector(".strength-text");
let sign = '@'

function checkEmail() {
  const input = document.getElementById('email')

  if (input.value === '') {
    alert('put your email')
  }

  else if (input.value.includes(sign)) {
    console.log("success");

  } else if (!input.value.includes(sign) && input.value !== '') {
    alert('please use " @" ')
  }
}
function checkPassword() {
  let pass1 = document.getElementById('password-field')
  let pass2 = document.getElementById('password2')

   if (pass1.value.length <= 8 && pass1.value.length !== 0) {
    alert('use more then 6 digits')
  }

  else if (pass1.value === pass2.value && pass1.value !== '') {
    alert('FINE')
  }
  else if (pass1.value !== pass2.value) {
    alert("password don't match")
  }
  else {
    return pass1 = pass1.value + pass2.value
  }

}
password.addEventListener("focus", function(){
	strengthContainer.style.display = "block";
});
password.addEventListener("blur", function(){
	strengthContainer.style.display = "none";
});

function setStrength(value){
	strengthBar.style.width = value + "%";
}

function setColorAndText(color, text){
	strengthBar.style.backgroundColor = color;
	strengthText.innerHTML = text;
	strengthText.style.color = color;
}

function clearStrength(){
	strengthBar.style.width = 0;
	strengthBar.style.backgroundColor = "";
	strengthText.innerHTML = "";
}

password.addEventListener("keyup", checkPasswordStrength);
function checkPasswordStrength(){
	let strength = 0;

	if(password.value == ""){
		clearStrength();
		return false;
	}

	if(password.value.match(/\s/)){
		setColorAndText("red", "White space is not allowed");
		return false;
	}

	if(password.value.match(/<|>/)){
		setColorAndText("red", "< > characters are not allowed");
		return false;
	}

	if(password.value.length > 12){
		setColorAndText("red", "Password greater than 12 char.");
		return false;
	}

	if(password.value.length < 7){
		strength = 20;
		setColorAndText("red", "Too short"); // short
	}else{
		
		let lowerCase = password.value.match(/[a-z]/);
		let upperCase = password.value.match(/[A-Z]/);
		let numbers = password.value.match(/[0-9]/);
		let specialCharacters = password.value.match(/[\!\~\@\&\#\$\%\^\&\*\(\)\{\}\?\-\_\+\=]/);

		if(lowerCase || upperCase || numbers || specialCharacters){
			strength = 40;
			setColorAndText("red", "Weak"); // weak
		}

		if( 
			(lowerCase && upperCase) || (lowerCase && numbers) || (lowerCase && specialCharacters) ||
			(upperCase && numbers) || (upperCase && specialCharacters) || (numbers && specialCharacters)
		  )
		{
			strength = 60;
			setColorAndText("orange", "Medium");	// medium		
		} 
		
		if( (lowerCase && upperCase && numbers) || (lowerCase && upperCase && specialCharacters) ||
		    (lowerCase && numbers && specialCharacters) ||  (upperCase && numbers && specialCharacters)
		  )
		{
			strength = 80;
			setColorAndText("#088f08", "Strong");	// strong
		}

		if( lowerCase && upperCase && numbers && specialCharacters ) 
		{
			strength = 100;
			setColorAndText("green", "Very Strong");	// very strong
		}
	}
	setStrength(strength);
}

const submit = document.getElementById('submit').addEventListener('click', () => {
  checkEmail()
  checkPassword()

})

const togglePassword = document.querySelector(".showpassword")

togglePassword.addEventListener("click", function () {

  let type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  let type2 = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  password2.setAttribute('type', type2)

});