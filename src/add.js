const elemList = [];
const tasks = []
const inputElement = document.getElementById('input-element');

export const  addToDoList = () => {
	elemList.push(inputElement.value)
  const listObj = {
		description: inputElement.value, 
		completed: false,
		index: elemList.length
	};

	tasks.push(listObj);
	localStorage.setItem('listItems', JSON.stringify(tasks));
	displayToDoList();
	inputElement.value = '';
}