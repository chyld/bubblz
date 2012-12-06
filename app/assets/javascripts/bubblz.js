var head;

$(function(){
  $('button').click(let_the_games_begin);
});

function let_the_games_begin()
{
  $.ajax({
    type: "POST",
    url: "/data",
    data: { url: $('input').val() }
  }).done(function(msg) {
    put_into_spans(msg);
    head = $('#words div:first');
    setTimeout(function(){bubble_sort(head);}, 10);
  });
}

function bubble_sort(node)
{
  node.addClass('swap');
  node.next().addClass('swap');

  if(node.text() > node.next().text())
  {
    var next = node.next();
    next.after(node);
  }

  setTimeout(function(){pause_and_resume(node);}, 100);
}

function pause_and_resume(node)
{
  $('.word').removeClass('swap');

  if(node.next().next().length > 0)
    head = node.next();
  else
    head = $('#words div:first');

  setTimeout(function(){bubble_sort(head);}, 10);
}

function put_into_spans(words)
{
  $('#words').empty();

  for(var i = 0; i < words.length; i++)
  {
    var div = $('<div>');
    div.addClass('word');
    div.text(words[i]);
    $('#words').append(div);
  }
}
