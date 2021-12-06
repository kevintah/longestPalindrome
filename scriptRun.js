// JavaScript source code
// Kevin Njokom
// 12/5/2021
// 8:44 PM
const s = 'ababababa';
str = [];
json = {key: null,
		value: 0}
function slicer(s,i,j){     //helper function to split string and  save to array
	str = s.slice(i, j);
	return str
}

function reverseStr(s){    //helper function to return a string
	var arr1 = s.split('');
	var arr2 = [];
 for (var i = 0 ; i < arr1.length;  i++) {
	arr2[i] = arr1[(arr1.length  -1 - i) ];
	 } 
   
     return arr2.join('').toString();
	}


function solve(s){      // function to generate substrings and solve and test substrings to see if it is a palindrome
	for( var i = 0; i < s.length ; i++){
			for (var j = 0; j < s.length + 1; j ++) {
				var temp = slicer(s,i,j)
				var reversedTemp = reverseStr(temp);
				if(temp == reversedTemp && temp.length >json.value){
				   json.value = temp.length;
				   json.key = temp 
				console.log( 'True' );
				console.log(json);
				}
				else{
					console.log('False');
				}	    
		       }
		}
	}

solve(s);

console.log( 'The longest string palindrome is' + ' ' + ' ' + json.key + ' ' + ' ' +  'of length' + ' ' + ' ' + json.value)