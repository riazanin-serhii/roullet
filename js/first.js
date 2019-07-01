var table = document.getElementById('table');
var button = document.getElementById('spin');
var boll = document.getElementById('boll');
var roullet = document.getElementById('roullet');

var number = document.getElementsByClassName('number');
var numberArray = [].slice.call(number);
for( var i = 0; i< numberArray.length; i++){
function compare( a, b ) {
  if ( a.attributes.name.nodeValue < b.attributes.name.nodeValue ){
    return -1;
  }
  if ( a.attributes.name.nodeValue > b.attributes.name.nodeValue ){
    return 1;
  }
  return 0;
}
numberArray.sort( compare );
}
var count = 0;
button.addEventListener('click', spinan ,false);
function spinan(){
	roullet.classList.add("spinAnime");
	var random = Math.ceil(Math.random()*37)-1;
	button.removeEventListener("click",spinan,false);
	var div = numberArray[random];
	var transformDiv = getComputedStyle(div).transform;
	boll.style.transform = transformDiv;
	var bet = document.getElementById('numberBet').value;
	var result = document.getElementById('result');
	count += 1;
 	var nameStoredNames  = "click" + count;	
	localStorage.setItem(nameStoredNames,random);

	setTimeout(function(){
		boll.style.display = "block";
		if(random == bet){
			result.innerHTML = 'Ты избранный';
		}else{
			result.textContent = 'Неудачник';
		}
	},10000);
};

	var getlocalStorage = localStorage.getItem(func());
	function func(){
		if(0<localStorage.length){
			for( i = 1; i < localStorage.length; i++){
				var key = localStorage.key(i);
				if( key.indexOf("click") == 0){
					var re = document.getElementById('resultNum');
					var numb = document.createElement("h2");
					var clicknumb = "click"+ i;
					console.log(clicknumb);
					numb.innerHTML = localStorage.clicknumb;
					resultNum.appendChild(numb);
	
				}
	}
	}
};

var delClass = setInterval(function(){
	roullet.classList.remove("spinAnime");
	button.addEventListener('click', spinan ,false);
	boll.style.display = "none";
	result.textContent = '';
},18000);



	


