/*drag n drop*/

const list_items = document.querySelectorAll('li');
const lists = document.querySelectorAll('.garden');
let draggedItem= null;

for (let i = 0; i < list_items.length; i++){
  const item = list_items[i];

  item.addEventListener('dragstart', function() {
    draggedItem = item;
    setTimeout(function(){
      item.style.display = 'none';
    }, 0)
  });

  item.addEventListener('dragend', function(){
    setTimeout(function(){
      draggedItem.style.display = "block";
      draggedItem = null;
    }, 0);
  })

  for (let j = 0; j < lists.length; j ++){
    const list = lists[j];

    list.addEventListener('dragover', function (e){
      e.preventDefault();
    });
    list.addEventListener("dragenter", function(e){
      e.preventDefault();
      this.style.backgroundColor = 'rgba(19, 37, 26, 0.8)';
    });
    list.addEventListener("dragleave", function(e){
      this.style.backgroundColor= 'rgba(19, 37, 26, 0.3)';
    });
    list.addEventListener('drop', function(e){
      console.log('drop');
      this.append(draggedItem);
      this.style.backgroundColor = 'rgba(19, 37, 26, 0.2)';
    });
  }
}


//** audio things *//
function playAudio(url) {
  new Audio(url).play();
}

//*print*//
function print(){
  window.print(); 
}
