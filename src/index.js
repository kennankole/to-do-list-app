import _, { add, times } from 'lodash';
import './style.css';


const tasks = [];
const elemList = [];
const formContainer = document.getElementById('form')
const inputElement = document.getElementById('input-element');
const myContainer = document.getElementById('items-container');
const clearAll = document.getElementById('footer-a')
const data = JSON.parse(localStorage.getItem('listItems'));


// Add items
export const toDoList = () => {
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
}


// Display data
function showData() {
	data.forEach((item, index) => {
		myContainer.innerHTML += `
	<li class='list-container'>
		<div class='list-text'>
			<input type="checkbox" class="check">
			${item.description}
		</div>
	</li>
	`;
	});
}

if (localStorage.getItem('listItems') !== null) {
	showData()
} else {
	localStorage.setItem('listItems', JSON.stringify(data));
}

// Check and uncheck items.
const listItem = document.getElementsByClassName('list-text');
const checked = document.getElementsByClassName('check');
const elem = Array.from(checked);
elem.forEach((item, index) => {
	item.addEventListener('change', (e) => {
		console.log(e.currentTarget.checked)
		if (e.currentTarget.checked) {
			listItem[index].style.textDecoration = 'line-through';
		} else {
			listItem[index].style.textDecoration = 'none';
		}
	})
})

//Delete  items
const items = Array.from(listItem);
function deleteItems() {
	const listElem = document.querySelectorAll('input:checked');
	if (listElem.length > 0) {
		items.forEach((item, index) => {
			if (item.style.textDecoration === 'line-through') {
				item.remove()
				document.location.reload(true);
				data.splice(index, listElem.length)
				localStorage.setItem('listItems', JSON.stringify(data));
			} else {
				return;
			}
		})
	} else {
		return;
	}
}

formContainer.addEventListener('submit', (e) => {
	e.preventDefault();
	toDoList();
});

clearAll.addEventListener('click', deleteItems)


