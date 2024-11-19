// const username=document.getElementById("username").value;
  // const errUser=document.getElementById("errUser");
  // const email=document.getElementById("email").value;
  // const errEmail=document.getElementById("errEmail");
  // const password=document.getElementById("password").value;
  // const errPassword=document.getElementById("errPassword");
  // const mobile=document.getElementById("mobile").value;
  // const errNumber=document.getElementById("errNumber");
  // const submit=document.getElementById("login").value;
  // const output=document.getElementById("output");

 

  function validateinform(){
    
    // username:
    const username=document.getElementById("username").value;
    const usernameregex=/^[a-zA-Z0-9]{5,12}$/;
    // email:
    const email=document.getElementById("email").value;
    const emailregex = /^[a-z0-9]+@[a-z]{5}.[a-z]{3}$/;
    // const emailregex=/^[a-z]+[@gamail.com]$/;
    // password:
    const password=document.getElementById("password").value;
    const passwordregex=/^[a-zA-Z0-9@_-]{8,20}$/;
    // mobilenumber:
    const mobile=document.getElementById("mobile").value;
    const mobileregex=/^[6-9]\d{9}$/;

    let Values = true;

    // username:

    if(!usernameregex.test(username)){
      document.getElementById("output").innerHTML="Invalid Username"
      document.getElementById("errUser").innerHTML="Username must be and contain 5- 12 characters";
      document.getElementById("errUser").style.color="orange"
      document.getElementById("username").style.border="2px solid orange";
      Values = false;
    
    }else{
      document.getElementById("output").innerHTML="valid Username"
      document.getElementById("errUser").innerHTML="Valid Username"
      document.getElementById("errUser").style.color="green"
      document.getElementById("username").style.border="2px solid green";
      Values=true;
    }
    
    // Email condistion:

    if(!emailregex.test(email)){
      document.getElementById("output").innerHTML="Invalid Email"
      document.getElementById("errEmail").innerHTML="Email must be a valid address, e.g. me@mydomain.com";
      document.getElementById("errEmail").style.color="orange"
      document.getElementById("email").style.border="2px solid orange";
      Values = false;
    
    }else{
      document.getElementById("output").innerHTML="valid Email"
      document.getElementById("errEmail").innerHTML="Valid email"
      document.getElementById("errEmail").style.color="green"
      document.getElementById("email").style.border="2px solid green";
      Values=true;
    }

    // password condistion:

    if(!passwordregex.test(password)){
      document.getElementById("output").innerHTML="Invalid password"
      document.getElementById("errPassword").innerHTML="Password must alphanumeric (@, _ and- are also allowed) and be 8- 20 characters";
      document.getElementById("errPassword").style.color="orange"
      document.getElementById("password").style.border="2px solid orange";
      Values = false;
    
    }else{
      document.getElementById("output").innerHTML="valid password"
      document.getElementById("errPassword").innerHTML="Valid number"
      document.getElementById("errPassword").style.color="green"
      document.getElementById("password").style.border="2px solid green";
      Values=true;
    }
    

  // function validateinform(){
    // const mobile=document.getElementById("mobile").value;
    // const mobileregex=/^[6-9]\d{9}$/;

    if(!mobileregex.test(mobile)){
      document.getElementById("output").innerHTML="Invalid Data"
      document.getElementById("errNumber").innerHTML="Telephone must be a valid Indian telephone number(10 digits)";
      document.getElementById("errNumber").style.color="orange"
      document.getElementById("mobile").style.border="2px solid orange";
      Values = false;

    }else{
      document.getElementById("output").innerHTML="valid Data"
      document.getElementById("errNumber").innerHTML="Valid number"
      document.getElementById("errNumber").style.color="green"
      document.getElementById("mobile").style.border="2px solid green";
      Values=true;
    }
    return Values;


  }