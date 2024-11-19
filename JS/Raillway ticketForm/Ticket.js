let train=Math.floor(Math.random()*60215+10500)
console.log(train);
let pnr=Math.floor(Math.random()*50438+10500)
console.log(pnr);

// // date:
// const formatDateDDMMYYYY = date => `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;

// // Usage
// const currentDate = new Date();
// const formattedDate = formatDateDDMMYYYY(currentDate);
// console.log(formattedDate);

const name=document.getElementById('name');
const lastname=document.getElementById('lastname');
const age=document.getElementById('age');
const date=document.getElementById('date');
const gender=document.getElementById('gender');
const classes=document.getElementById('Classes');
const from=document.getElementById('from');
const to=document.getElementById('to');
const previewBtn=document.getElementById('check');
const submitBtn=document.getElementById('submit');
const cancelBtn=document.getElementById('cancel');

console.log(lastname);



class RailwayForm{
    constructor(name,lastName,age,gender,date,classes,from,to,train,pnr)
    {
        this.name=name;
        this.lastName=lastName;
        this.age=age;
        this.date=date;
        this.gender=gender;
        this.classes=classes;
        this.from=from;
        this.to=to;
        this.train=train;
        this.pnr=pnr;
    }
          


pre()
{
  alert(`Dear Sir/Madam: ${this.name}
       last Name: ${this.lastName}
       age is: ${this.age}
       Gender is: ${this.gender}
       Booking date is: ${this.date}
       Your class: ${this.classes}
       From: ${this.from}
       To: ${this.to}
       Train No: ${this.train}
       your PNR Number: ${this.pnr}`)
}

sub()
{
  alert(`Dear Sir/Madam: ${this.name} ${this.lastName}
       last Name: ${this.lastName}
       age is: ${this.age}
       Gender is: ${this.gender}
       Booking date is: ${this.date}
       Your class: ${this.classes}
       From: ${this.from}
       To: ${this.to}
       Train No: ${this.train}
       your PNR Number: ${this.pnr}
       Your ticket has been successfully booked your train number is: ${this.train}`)
}
cancel()
{
alert(`Dear Sir/Madam: ${this.name}
      Gender is: ${this.gender}
      Booking date is :${this.date}
      Your class: ${this.classes}
      Train No: ${this.train}
      Your PNR Number: ${this.pnr}
      Your ticket has been successfully cancelled your ticket: ${pnr}
      Your train number is: ${this.train} `)
}
       

//  sub(){

//     alert(`Dear Sir/Madam: ${this.name}
//        last Name: ${this.lastName}
//        age is: ${this.age}
//        Bookin date is: ${this.date}
//        gender is: ${this.gender}
//        Your class: ${this.classes}
//        From: ${this.from}
//        To: ${this.to}
//        Train No: ${this.train}
//        your PNR Number: ${this.pnr}
//        Your ticket has been successfully booked your train number is: ${this.train}`
//     )
       
//  }   
 
//  cancel(){
//     alert(`Dear Sir/Madam: ${this.name} Your ticket has been Canceled succesfully`)

//  }
}



let done=new RailwayForm();

previewBtn.addEventListener("click",()=>{
    let done=new RailwayForm(name.value,lastname.value,age.value,gender.value,date.value,classes.value,from.value,to.value,train,pnr);
    done.pre();
})

submitBtn.addEventListener("click",()=>{
    let done=new RailwayForm(name.value,lastname.value,age.value,gender.value,date.value,classes.value,from.value,to.value,train,pnr);
    done.sub();
})

cancelBtn.addEventListener('click',()=>{
    let done=new RailwayForm(name.value,lastname.value,age.value,gender.value,date.value,classes.value,from.value,to.value,train,pnr);
    done.cancel();

})



// submitBtn.addEventListener("click",()=>{
//     let done=new RailwayForm(name.value,lastname.value,age.value,gender.value,date.value,classes.value,from.value,to.value,train,pnr);
//     done.sub();
// })


// cancelBtn.addEventListener("click",()=>{
    
//     done.cancel();
// })


