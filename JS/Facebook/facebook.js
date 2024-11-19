 //Date by using for loop//

 let opt="<option>Date</option>";
 for(i=1;i<=31;i++){
     opt+="<option value="+i+">"+i+"</option>";
 }
 document.getElementById("date").innerHTML=opt

 //month by using while loop//
 let opt1="<option>Month</option>";
    let mon=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var i=0;
    while(i<mon.length){
        document.getElementById("month").innerHTML=opt1
        i++;
        opt1+="<option value="+mon[i]+">"+mon[i]+"</option>";
    }

 //year by using do-while loop//
  let opt2="<option>Year</option>";
  i=1995;
  do{
     document.getElementById("year").innerHTML=opt2 
     opt2+="<option value="+i+">"+i+"</option>";
    i++;
  }while(i<=2030)
