"use srtict";
 
//1 
 
let a = prompt('Введите стоимость товара'); 
let b = prompt('Введите количество денег клиента'); 
if (a > 0 && b> 0){ 
    if (a == b){ 
        alert('Покупка совершена'); 
    } else if (a>b){ 
        alert(`Для покупки не хватает ${a-b}p.`); 
    } else if (a<b){ 
        alert(`Покупка совершена. Ваша сдача  ${b - a}p.`);} 
}else{ 
    alert('Неверный формат данных'); 
} 
//  2 задание

let c = prompt("введите число", 10);
if(c > 0){
    alert(1);
}
else if(c < 0){
    alert(-1);
}
else if(c == 0){
    alert(0);
}

// 3 задание

let result;
let pr1 = Number(prompt('pr1', 0));
let pr2 = Number(prompt('pr2', 0));
(pr1 + pr2 < 4) ? result = 'Мало' : result = 'Много';
alert(result);

// 4 задание
let message;
let login = prompt('вы кто', '');
(login == 'Сотрудник') ? message = 'Привет' :
(login == 'Директор') ? message = 'Здравствуйте' :
(login == '') ? message = 'Нет логина' :
  message = '';

// 5 задание

let log = prompt('Напишите свой логин', '');
if(log == 'Админ' || log == 'админ'){
  let pass = prompt('Напишите пароль', '');
  if(pass == 'Я главный'){
    alert('Здравствуйте');
  }
  else if (pass == null){
    alert('Отменено');
  }
  else if (pass != 'Я главный'){
    alert('неправильный пароль');
  }
}
else {
  alert('я не знаю');
}
