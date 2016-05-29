"use strict";

$(function(){
	
	
	var html = $('#test').html();   
	var data = {
		title: 'Тест по программированию',
		section: [
		{
			id: ['answer1', 'answer2', 'answer3'],
			question: 'На что влияет описание DOCTYPE в начале документа?',
			answer: ['На особенности работы XmlHttpRequest','На внешний валидатор при проверке соответствия стандарту','На отображение, работу CSS-свойств']
		},
		{
			id: ['answer4', 'answer5', 'answer6'],
			question: 'Какое из этих ключевых слов ООП не используется в javascript (1.5) ?',
	        answer: ['this','super','instanceOf']
		},
		{
			id: ['answer7', 'answer8', 'answer9'],
			question: 'Может ли javascript записать файл на компьютер посетителя ?',
			answer: ['Нет, ни при каких условиях','Может в Firefox или IE, при дополнительных настройках безопасности браузера','Может в Opera, если javascript запущен локально']
		}
		]
}
		
	var content = tmpl(html,data);
	
	$('body').append(content);  
	
	localStorage.setItem('testQuest', JSON.stringify(data));
	console.log(JSON.stringify(data));
	
	var task = localStorage.getItem('testQuest');
	task = JSON.parse(task);
	console.log(task);
	
	
	
});