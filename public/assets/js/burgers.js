document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
        //console.info("DOM Loaded"); works
    }

    // create
    const createBurgerBtn = document.getElementById("submit");
    //console.log("my burger button:", createBurgerBtn) works
    if (createBurgerBtn) {
        createBurgerBtn.addEventListener("submit", (event) =>{
            console.log("You clicked on the button!", event) // not working
            event.preventDefault();

            // Grabs value
            const newBurger = {
                burger_name: document.getElementById("burger-name").value.trim(),
            };
            console.log("posting...", newBurger)
            // sends POST request to create a new burger
            fetch("/api/burgers", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },

                // serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty form
                document.getElementById("burger-name").value = "";

                // reload page to enter new burger
                console.log("Added A Burger!");
                location.reload();
            });
        });
    }

})