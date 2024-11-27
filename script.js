$(function() {
  // your code here

  $('.accordion-header').on('click', function() {
    const content = $(this).next('.accordion-content');
    $('.accordion-content').not(content).slideUp(1000);
    content.slideToggle(1000);
  });

  $('.todos button').on('click', function() {
    $.ajax({
      url: 'https://dummyjson.com/todos',
      type: 'GET',
      success: function(res) {
        const todos = res.todos;
        todos.forEach(todo => {
          $('.todos ul').append(`
            <li>${todo.todo}</li>
          `)
        })
      },
      error: function(err) {
        console.error(err);
      }
    })
  });
})