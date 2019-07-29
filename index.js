var container = $('.container');
var input = $('input');

function handleSubmit() {
  var input = $('input').val();
  var container = $('.container');
  container.append(`<p> - ${input}</p>`);
  $('.type').val('')
}

$('section').click(function(e){
    $(e.target).remove();
});

localStorage.setItem('.container', JSON.stringify(container));
var retrievedObject = localStorage.getItem('.container');
console.log('retrievedObject: ', JSON.parse(retrievedObject));
