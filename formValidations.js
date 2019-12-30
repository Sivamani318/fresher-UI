function myFunction() {
  var user = document.getElementById("lemail").value;
  var pwd = document.getElementById("pwd").value;
  if(user== 'user@gmail.com' && pwd=='123456' ){
     location.replace("login.html");
  }else{
	  alert('user details not match');
}
}
function pswd(){
	var pass = document.getElementById("pass").value;
	var cpass=  document.getElementById("cpass").value;
	
	if(pass==cpass && pass.length != 0){
		
	}
	else{
		alert('pasward not match');
	}
}

function home(){
	if(confirm("are you sure to leave the page!!!")){
	location.replace("homePage.html");
	}
}

function sinput(){
	var details={ 
	id,name,email,clss,year,city,cunt

	}
 details.id=	document.getElementById("sid").value;
 details.name=	document.getElementById("sname").value;
 details.email=	document.getElementById("semail").value;
 details.clss=	document.getElementById("sclss").value;
 details.year=	document.getElementById("syear").value;
 details.city=	document.getElementById("scity").value;
 details.cunt=	document.getElementById("scunt").value;
additem();
function additem(){
		

if(details.id!="" && details.name!=""&& details.email!="" && details.clss!="" && details.year!="" && details.city!="" && details.cunt!="")	{	
var element ='.child';
var html=' <div class="child"><table align="center" class="ltable"  border="0s" width="90%" cellpadding="8" cellspacing="0"><tr ><td id="id" width="5%">%id%</td><td id="name" width="10%">%name%</td><td id="email"width="20%">%email%</td><td id="clss" width="10%">%clss%</td><td id="year" width="10%">%year%</td><td id="city" width="10%">%city%</td><td id="cunt" width="15%">%cunt%</td><td><button type="submit" onclick="sedit()" id="save"  class="btn">Edit</button><button type="submit" onclick="sdelete()" id="clear"  class="btn">Delete</button></td></tr></table></div>';
var newhtml= html.replace('%id%',details.id);
newhtml= newhtml.replace('%name%',details.name);
newhtml= newhtml.replace('%email%',details.email);
newhtml= newhtml.replace('%clss%',details.clss);
newhtml= newhtml.replace('%year%',details.year);
newhtml= newhtml.replace('%city%',details.city);
newhtml= newhtml.replace('%cunt%',details.cunt);

document.querySelector(element).insertAdjacentHTML('beforeend', newhtml); 
}else{
	alert("all are mandatory");
}
 
	}
}

function sclear(){
document.getElementById('sid').value ="";
document.getElementById('sname').value ="";
document.getElementById('semail').value="";
document.getElementById('sclss').value="";
document.getElementById('syear').value="";
document.getElementById('scity').value="";
document.getElementById('scunt').value="";
	
}
function sedit(){

}
function sdelete(){
document.getElementById('id').innerHTML ="";
document.getElementById('name').innerHTML = "";
document.getElementById('email').innerHTML="";
document.getElementById('clss').innerHTML="";
document.getElementById('year').innerHTML="";
document.getElementById('city').innerHTML="";
document.getElementById('cunt').innerHTML="";
var elementList = document.querySelectorAll('table.ltable');

}



	
	
	
	
	
	
	
	

