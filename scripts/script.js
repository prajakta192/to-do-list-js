//accesing html element
const listInput = document.querySelector('#todo-text');
const actionBtn = document.querySelector('#addListItem');
const todoList = document.querySelector('.todoList')
const listContainer = document.querySelector('#list-container')

actionBtn.addEventListener('click', addToListItem)
function addToListItem(){
	if(listInput.value === ''){
		alert('empty')
	}
	else{
		const listWrapper = document.createElement('div')
	    listWrapper.setAttribute('class','listWrapper');
		const li = document.createElement('li')
	    li.innerHTML = listInput.value;
	    const div = document.createElement('div')
	    div.setAttribute('class','actionSection')
	    const span = document.createElement('span')
	    span.innerHTML = '\u00d7';
	    const span1 = document.createElement('span')
	    span1.innerHTML = '+';
	    div.appendChild(span)
	    div.appendChild(span1)
	    listWrapper.appendChild(li)
	    listWrapper.appendChild(div)
	    listContainer.appendChild(listWrapper)
	    todoList.appendChild(listContainer)
	}
	listInput.value = ''
	saveData()
}

listContainer.addEventListener('click',toggleList,false);
function toggleList(e){
if(e.target.tagName === 'LI'){
	e.target.classList.toggle('checked');
	saveData()
}
else if(e.target.tagName === 'SPAN'){
	e.target.parentElement.parentElement.remove();
	saveData()
}
}
function saveData(){
	localStorage.setItem('data',listContainer.innerHTML)
}
function showTask(){
	listContainer.innerHTML = localStorage.getItem('data')
}
showTask()