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
        $(this).dialog('close')
      }
    }]
  });

  $('#opener').click(() => {
    $('#dialog').dialog('open');
  })

// Click listener for todo items
  $('li').click(() => {
    $(event.target).toggleClass('completed') 
  })

})
