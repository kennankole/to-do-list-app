const dataElements = JSON.parse(localStorage.getItem('listItems'))
const myContainer = document.getElementById('items-container');

export const displayToDoList = () => {
	dataElements.forEach((item, index) => {
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