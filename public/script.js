var ShoppingCart = function () {

  var cart = [];   // an array with all of our cart items

  var updateCart = function () {
    $('.cart-list').empty()
    for(let i=0;i<cart.length;i++){
      $('.cart-list').append(cart[i].name + " - " + cart[i].price + '</br>');
    }
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
  }

  var addItem = function (itemname,itemprice) {
    let item= {
      name: itemname,
      price: itemprice,
    }
    cart.push(item);
  }

  var clearCart = function () {
    cart = []
    updateCart()
    // TODO: Write a function that clears the cart ;-)
  }
  
  let calctotal = function(){
    let total=0
    for(let i=0;i<cart.length;i++){
      total+= cart[i].price;
    }
    $('.total').text(total);
  }

  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart,
    calctotal:calctotal
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggle();
  // TODO: hide/show the shopping cart!
});

$('.add-to-cart').on('click', function () {
  let itemname =$(this).closest(".item").data().name
  let itemprice =$(this).closest(".item").data().price
  app.addItem(itemname,itemprice);
  app.updateCart();
  app.calctotal();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});