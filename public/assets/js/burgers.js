document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM Loaded');
  }

  // create
  const createBurgerBtn = document.getElementById('create-form');
  console.log('my burger button:', createBurgerBtn);
  // eslint-disable-next-line no-shadow
  createBurgerBtn.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('You clicked on the button!', event); // not working

    // Grabs value
    const newBurger = {
      burger_name: document.getElementById('burger-name').value.trim(),
    };
    console.log('posting...', newBurger);
    // sends POST request to create a new burger
    fetch('/api/burgers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      // serialize the JSON body
      body: JSON.stringify(newBurger),
    }).then(() => {
      // Empty form
      document.getElementById('burger-name').value = '';

      // reload page to enter new burger
      console.log('Added A Burger!');
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  });
});
