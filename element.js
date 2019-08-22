document.body.onload = addElement;
function addElement () {
  let newDiv = document.createElement('div');
  let newContent = document.createTextNode('top');
  let currentDiv = document.getElementById('div1');
  newDiv.appendChild(newContent);
  newDiv.classList.add('')
  document.body.insertBefore(newDiv, currentDiv);
  
}