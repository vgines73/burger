document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
        console.info("DOM Loaded");
    }

    // create
    const createBurgerBtn = document.getElementById("submit");

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener("submit", (event) =>{
            event.preventDefault();

            // Grabs value
            const newBurger = {
                burger_name: document.getElementById("burger-name").nodeValue.trim(),
            };

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