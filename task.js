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
}
	function Palindrome()
	{
		var rem, temp, final = 0;
		var number = Number(document.getElementById("N").value);

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			window.alert("The inputed number is Palindrome");
		}
		else
		{
			window.alert("The inputted number is not palindrome");
		}
	}
var button = document.getElementById('button-test');
button.addEventListener('click', checkAnagram);
var resultDiv = document.getElementById('result');

function checkAnagram() {
  var str1 = document.getElementById('string1').value;
  var str2 = document.getElementById('string2').value;
  if(str1 !== null && str2 !== null) {
    if(str1.length !== str2.length) {
      resultDiv.innerHTML = "Strings are not anagrams.";
      return false;
    }
    var hashTable = {};
    for(var i = 0; i < str1.length; i++) {
      if(hashTable.hasOwnProperty(str1[i])) {
        hashTable[str1[i]] = hashTable[str1[i]] + 1;
    } else {
     hashTable[str1[i]] = 1; 
    }
  }
   
  for(var i = 0; i < str2.length; i++) {
    if(hashTable.hasOwnProperty(str2[i])) {
      hashTable[str2[i]] = hashTable[str2[i]] - 1;
    } else {
      resultDiv.innerHTML = "Strings are not anagrams.";
      return false;
    }
  }
    
  for(var i in hashTable) {
    if(hashTable[i] !== 0) {
      resultDiv.innerHTML = "Strings are not anagrams.";
      return false;
    } else {
       resultDiv.innerHTML = "Strings are anagrams!";
    }
  }
}
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
