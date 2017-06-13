const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
//handleCheck is a function that identifies a range of checkboxes between "this" checkbox and the checkbox last clicked on, aka "lastChecked". It then loops through the entire array of boxes. Upon hitting either "lastChecked" or "this", "inBetween" becomes active. "inBetween" is a nested function that simply changes the status of the iterated box to "true". Once the function reaches the endpoint (either "this" or "lastChecked"), we set "inBetween" to the opposite of whatever it currently is. True-->False and vice versa.
function handleCheck(e){
  //check if Shift key is down
  //Also, check if they are checking the box
  let inBetween = false;
  if(e.shiftKey && this.checked){
    //Loop over every checkbox
    checkboxes.forEach(checkbox =>{
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
      }
      if(inBetween){
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
