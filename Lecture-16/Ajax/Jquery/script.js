// $(()=>{})
// li = $('.item');
const h1 = $('h1');
const avengers = $('#avengers');


console.log(h1);
console.log(avengers);


// Add an element to the LIST
const movieList = $('.movieList');

// let li1 = $('<li>');
// li1.text('Superman');
// movieList.append(li1);

movieList.append($('<li>').text('Superman').attr('class', 'item'));

let li = $('.item');

li.attr('class', 'myColor');

li.each(function (indx) {
    // console.log(this);
    if (indx % 2 != 0) {
        $(this).text(
            $(this).text() + '-Movie'
        )
    }
})


// li.each(function () {
//     console.log(this);
//     this.innerText += '-Movie';
// })
// li.remove();


// EVENTS
$('h1').click((e)=>{
    let target = $(e.target);
    // target.attr('class','myColor')
    target.addClass('myColor');
    setInterval(()=>{
        target.toggleClass('myColor');
    },100);
})

$('h1').hover(
    function() {
      $( this ).addClass( "myColor" );
    }, function() {
      $( this ).removeClass( "myColor" );
    }
  );