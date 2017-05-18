$(document).ready(() => {
  $('#newDialog').dialog({
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
        let data = $('#new-form-data').serialize();
        postNewTodo(data)
        $(this).dialog('close')
      }
    }]
  });

  $('#updateDialog').dialog({
    title: 'Update Todo',
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
      text: 'Update',
      click: function() {
        let data = $('#update-form-data').serialize();
        updateTodo(data)
        $(this).dialog('close')
      }
    }]
  });

  $('#opener').click(() => {
    $('#newDialog').dialog('open');
  })

// Click listener for todo items
  $('ul').click(() => {
    var target = $(event.target)
    // console.log(target)
    if (target.hasClass('list-item')) {
      target.toggleClass('completed')
    } else if (target.hasClass('fa-trash-o')) {
      var id = target[0].closest('li').id
      deleteTodo(id)
    } else if (target[0].className == 'fa fa-pencil') {
      var description = target[0].closest('li').innerText
      updateID = target[0].closest('li').id
      $('#updateDialog').dialog('open')
      $('#desc').val(description)
    }
  })
})

const postNewTodo = (data) => {
  $.post({
    url: 'http://localhost:3000/api/todos',
    data: data
  })
  .done((response) => {
    console.log('It worked')
  })
  .fail((err) => {
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

const updateTodo = (id, data) => {
  $.ajax({
    url: `http://localhost:3000/api/todos/${id}`,
    type: 'put',
    data: data
  })
  .done(response => console.log(response))
  .fail(err => console.log(err))
}
