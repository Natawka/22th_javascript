function pow(x, n){
   var result = x;
  
	if(result==0||result<0||isNaN(result)){
		return 'Некорректные данные';
	};
   for (var i = 1; i < n; i++){
   result *=x;
}
   return result;
   
}


function logIn(arr, admin) {
	var flag = 0;
	for(i=0;i<=5;i++)
	  if (admin==arr[i]) {
	  flag = 1;
	}
	  
	if (flag ==0){
		return 'Ошибка - таких имен нет';
	}
	else {
		return admin+','+"ты успешно вошел!";
	}
}

try{
	module.exports.pow = pow;
	module.exports.logIn = logIn;
}catch(e){}