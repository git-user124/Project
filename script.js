document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const orderList = document.getElementById('order-summary');
  const itemSelect = document.getElementById('item-select');
  
  if (itemSelect.selectedOptions.length === 0) {
      alert('Please select at least one item before submitting your order.');
      return;
  }

  const selectedItems = Array.from(itemSelect.selectedOptions).map(option => option.value);
  alert(`Thank you for your order! You selected:\n${selectedItems.join('\n')}`);
  
  orderList.innerHTML = ''; 
  itemSelect.selectedIndex = 0; 
});
