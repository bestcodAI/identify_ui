const button = document.querySelector("button");
button.addEventListener("click", () => {
    Notification.requestPermission().then(permission => {
        console.log(permission);
        const notification = new Notification ("Example Here", {
            body: "This is more text"
        });
    });
})