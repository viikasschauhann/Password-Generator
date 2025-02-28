class Password {
    constructor() {
      // alert("welcome to password generator")
      this.pass = ""
    }
    generatePassword(len, includeUpper, includeLower, includeNumbers, includeSpecial) {
      let chars = "";
      if(includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
      if(includeSpecial) chars += "!@#$%^&*()";
      if(includeNumbers) chars += "1234567890";

      if (chars === "") {
        alert("Please select at least one character type");
        return "";
    }
      if (len < 3) {
        console.log("Your password should be atleast 3 characters long")
      }
      else {
        this.pass = "";
            for (let i = 0; i < len; i++) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];
            }
        return this.pass;
       }
    }
  }
  
  function generatePassword() {
    let len = parseInt(document.getElementById("len").value);
    let includeUpper = document.getElementById("upper").checked;
    let includeLower = document.getElementById("lower").checked;
    let includeNumbers = document.getElementById("num").checked;
    let includeSpecial = document.getElementById("special").checked;
    let p = new Password();
    let ans = p.generatePassword(len, includeUpper, includeLower, includeNumbers, includeSpecial);
    document.querySelector(".result").innerHTML = ans;
}
 