/*
enter items by entering text and hitting "Return" or clicking the "Add item" button
check and uncheck items on the list by clicking the "Check" button
permanently remove items from the list
Additionally:
Write JavaScript code that works with the existing HTML and CSS to implement the required features.
.submit(), preventDefault(), toggleClass(), and closest().
Using this and event delegation
Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
*/
//use event delegation to track items inside UL

//on submit create a <li> item with the info required.

// on click of button "shopping-item-toggle" check the span "shopping-item"


$(function() {

    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        let shopItem = $('input').val();
      $('ul').append(
        '<li>' +
        `<span class="shopping-item">${shopItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>`+
        '</li>'
      );
    });
  //delete works fully
    $('ul').on('click', 'li .shopping-item-delete', function(event) {
      this.closest("li").remove();
    });
    //check test
    $('ul').on('click','li', function(event) {
        event.stopPropagation();
        //$('span.shopping-item').toggleClass('shopping-item__checked');
        $('span.shopping-item').toggleClass('shopping-item__checked');
      });
   
  });