document.body.onload = addElement;
function addElement () {
  let newDiv = document.createElement('div');
  let newContent = document.createTextNode('Top text');
  let currentDiv = document.getElementById('div1');
  newDiv.appendChild(newContent);
  document.body.insertBefore(newDiv, currentDiv);
  let x = document.getElementById('div1');
  alert(x);
}