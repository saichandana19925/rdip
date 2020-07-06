function valuecal(result){
    calculatorForm.evalresult.value = calculatorForm.evalresult.value + result;
}
function clr() 
{ 
			calculatorForm.evalresult.value=" " 
} 
function sqrt(result)
{
t=Math.sqrt(result)
calculatorForm.evalresult.value=t
}
function abs(result)
{
	calculatorForm.evalresult.value=Math.abs(result)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			window.alert("The inputed number is Palindrome");
}
function validate() {
  var no = document.getElementById("no").value;
  var phoneno = /^\d{10}$/;
  if (no.match(phoneno)) {
  } else {
    alert("Not a valid Phone Number");
    return false;
  }
  var x = document.getElementById("email").value;

  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    alert("Please enter a valid e-mail address:");
    return false;
  }
 function palin()
{
var palindrome=document.getElementById("pal").value;

var rev=reverseString(palindrome);

if(rev===palindrome){
alert("string is palindrome");
}
else{
alert("not a palindrome");
}
return false;
}

function reverseString(str) {

var splitString = str.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
    return joinArray;
}


function anagram()
{
var S1=document.getElementById("string1").value;
var S2=document.getElementById("string2").value;
//alert(S1+" "+S2);
 var str1=S1.replace(/\s+/g,"");
 //alert(str1);
 var str2=S2.replace(/\s+/g,"");
 //alert(str2);
 
var con1=str1.toLowerCase();
var con2=str2.toLowerCase();

var arr1=con1.split("");
var arr2=con2.split("");
arr1.sort();
arr2.sort();
//alert(arr1+" "+arr2);
 var st1=arr1.join("");
 var st2=arr2.join("");
 //alert(st1+" "+st2);
if(st1==st2)
{
alert("anagrams");
}
else
{
alert("not anagrams");
}

return false;

}


function rand()
{
var r1= Math.floor(Math.random() * (+1000 - +0) + +0);
var r2= Math.floor(Math.random() * (+1000 - +0) + +0);

document.getElementById("num1").value=r1;
document.getElementById("num2").value=r2;

var rem1=r1%3;
var rem2=r2%3;
if(rem1==0 && rem2==1 || rem2==0 && rem1==1)
{

document.getElementById("result").value="human survives";
}
else if(rem1==rem2)
{
document.getElementById("result").value="tie";
}
else if(rem1==1 && rem2==2 || rem2==1 && rem1==2)
{
document.getElementById("result").value= "Cockroach survives";
}
else if(rem1==0 && rem2==2 || rem2==0 && rem1==2)
{
document.getElementById("result").value="human dies";
}

return false;
}

