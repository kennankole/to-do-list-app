window.clearAll = function() {
	let taskItems = Array.from(JSON.parse(localStorage.getItem("listItems")));
	const newList = taskItems.filter(item => {
		return item.completed !== true;
	});
	localStorage.setItem('listItems', JSON.stringify(newList))
	window.location.reload;
}

export default clearAll;