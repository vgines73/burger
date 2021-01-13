/* eslint-disable no-restricted-globals */
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM Loaded');
  }

  // update
  const devourBurgerBtn = document.querySelectorAll('.devour-button');

  // set up eventlistener for button
  if (devourBurgerBtn) {
    devourBurgerBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        // grabs id of the element 'id'
        const id = e.currentTarget.getAttribute('data-id');
        const burgerDevoured = e.currentTarget.getAttribute('data-devoured');
        console.log(id);
        const eatenBurger = {
          devoured: burgerDevoured,
        };

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // serialize the JSON body
          body: JSON.stringify(eatenBurger),
        }).then((response) => {
          if (response.ok) {
            console.log(`changed devour to: ${burgerDevoured}`);
            location.reload('/');
          } else {
            alert('something went wrong');
          }
        });
      });
    });
  }

  // create
  const createBurgerBtn = document.getElementById('create-form');
  if (createBurgerBtn) {
    console.log('my burger button:', createBurgerBtn);
    // eslint-disable-next-line no-shadow
    createBurgerBtn.addEventListener('submit', (event) => {
      console.log('You clicked on the button!', event); // not working
      event.preventDefault();

      // Grabs value
      const newBurger = {
        burger_name: document.getElementById('burger-name').value.trim(),
        devoured: 0,
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
  }

  // delete
  const deleteBurgerBtn = document.querySelectorAll('.delete-burger');

  // set up event listener for each devour button
  deleteBurgerBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');

      // sends delete request
      fetch(`/api/burgers/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted Burger: ${id}`);

        // reload page
        location.reload();
      });
    });
  });
});
