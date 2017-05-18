$(document).ready(() => {
  $('#dialog').dialog({
    title: 'Add New Todo',
    autoOpen: false,
    modal: true,
    show: {
      effect: 'blind',
      duration: 1000
    },
    hide: {
      effect: 'blind',
      duration: 1000
    },
    buttons: [{
      text: 'Add',
      click: function() {
        let data = $('#form-data').serialize();
        postNewTodo(data)
        $(this).dialog('close')
      }
    }]
  });

  $('#opener').click(() => {
    $('#dialog').dialog('open');
  })

// Click listener for todo items
  $('ul').click(() => {
    var target = $(event.target)
    if (target.hasClass('list-item')) {
      target.toggleClass('completed')
    } else if (target.hasClass('fa-trash-o')) {
      var id = target[0].closest('li').id
      deleteTodo(id)
    }

  })
})

const postNewTodo = (data) => {
  $.post({
    url: 'http://localhost:3000/api/todos',
    data: data
  }).done((response) => {
    console.log('It worked')
  }).fail((err) => {
    console.log(`It failed ${err}`)
  })
}

const deleteTodo = (id) => {
  $.ajax({
    url: `http://localhost:3000/api/todos/remove/${id}`,
    type: 'delete'
  })
  .done(response => console.log(response))
  .fail(err => console.log(err))
}
