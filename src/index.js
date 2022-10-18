document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
    form.addEventListener('submit', (e)=> {
    e.preventDefault();
    buildElement(e.target.new_task_description.value);
    form.reset();
     
  })

});
function buildElement(inputValue){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click',deleteButton)
  btn.textContent = " X ";
  li.textContent = `${inputValue} `;
  console.log(li);
  li.appendChild(btn);
  document.querySelector('#tasks').append(li);
  
  
}
function deleteButton(e){
  e.target.parentNode.remove();


}