
var x =document.getElementById('mydiv');

x.addEventListener('mouseover', function(event){
event.target.innerText='Can I help you?';
}
)

x.addEventListener('mouseout', function(event){
  event.target.innerText='Hello world!';
  }
  )