const pairing = Array.from(document.querySelectorAll('.pairing'));
const checkout = document.querySelector('.checkout');
const storeItem = Array.from(document.querySelectorAll('.store-item'));
const buyMe = Array.from(document.querySelectorAll('.buy-me'));

const storePrices = [10.39, 3.79, 48.95, 9.98, 27.95];

// STORE ITEMS
for (let item of storeItem) {
  item.addEventListener('mouseover', function(event) {
    event.target.nextElementSibling.style.display = "block";
  });

  item.addEventListener('click', function(event) {
      if(event.target.classList.contains('item-one')) {
          console.log('one!!!');
      } else if(event.target.classList.contains('item-two')) {
          console.log('two!!!');
      } else if(event.target.classList.contains('item-three')) {
          console.log('three!');
      } else if(event.target.classList.contains('item-four')) {
          console.log('four!!!');
      } else if(event.target.classList.contains('item-five')) {
          console.log('five!');
      }
  });
  
  item.addEventListener('mouseout', function(event) {
    event.target.nextElementSibling.style.display = "none";
  });
}

// HIDE STORE ITEMS
for (let item of pairing) {
    item.addEventListener('click', function() {
        item.classList.add('hidden');
    });
}


// CHECKOUT EVENT
checkout.addEventListener('click', function() {
    let itemDisplay = document.querySelector('.item-display');
    itemDisplay.innerHTML = '<h1> Thank You for Your Purchase!<br> View Your receipt below!</h1>';
    itemDisplay.style.fontSize = '35px';
    checkout.style.display = 'none';
});