import _, { times } from 'lodash';
import './style.css';

const tasks = [];
const elemList = [];

const formContainer = document.getElementById('form')
const inputElement = document.getElementById('input-element');
const myContainer = document.getElementById('items-container');
const footerContainer = document.getElementById('to-do-container')
const clearAll = document.getElementById('footer-a')

formContainer.addEventListener('submit', (e) => {
	e.preventDefault();
	elemList.push(inputElement.value);
	const listObj = {
		description: inputElement.value,
		completed: false,
		index: elemList.length,
	};
	
	tasks.push(listObj);
	localStorage.setItem('listItems', JSON.stringify(tasks));
	myContainer.innerHTML += `
		<li class='list-container'>
			<div class='list-text'>
				<input type="checkbox" class="check">
				${inputElement.value}
			</div>
		</li>
	`;
	inputElement.value = '';
	window.location.reload;
});


const data = JSON.parse(localStorage.getItem('listItems'));
function showData(){
	data.forEach((item, index) => {
	myContainer.innerHTML += `
	<li class='list-container'>
		<div class='list-text'>
			<input type="checkbox" class="check">
			${item.description}
		</div>
	</li>
	`;
	clearAll.addEventListener('click', () => {
		deleteItems(index);
	});

	});
}



if (localStorage.getItem('listItems') !== null){
	showData()
}else {
	localStorage.setItem('listItems', JSON.stringify(tasks));
}

// Check and uncheck items.
const listItem = document.getElementsByClassName('list-text');

const checked = document.getElementsByClassName('check');
const elem = Array.from(checked);
// elem.forEach((item, index) => {
// 	item.addEventListener('change', (e) => {
// 		console.log(e.currentTarget.checked)
// 		if(e.currentTarget.checked){
// 			listItem[index].style.textDecoration = 'line-through';
// 			console.log(index)
// 		}else{
// 			listItem[index].style.textDecoration = 'none';
// 		}
// 	})
// })




const items = Array.from(listItem);

function deleteItems(index) {
	data.splice(index, 1)
	localStorage.setItem('listItems', JSON.stringify(tasks));
	window.location.reload;
}


// clearAll.addEventListener('click', deleteItems)

