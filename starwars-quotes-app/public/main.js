const update = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");

const messageDiv = document.querySelector("#message");

update.addEventListener("click", () => {
  fetch("/quotes", {
    method: "put",
    // tell the server we’re sending JSON data
    headers: { "Content-Type": "application/json" },
    // convert the data we send into JSON.
    body: JSON.stringify({
      name: "Darth Vadar",
      quote: "I find your lack of faith disturbing.",
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      window.location.reload(true);
    });
});

deleteButton.addEventListener("click", () => {
  fetch("/quotes", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Darth Vadar" }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      if (data === "No quote to delete") {
        messageDiv.textContent = "No Darth Vadar quote to delete";
      } else {
        window.location.reload(true);
      }
    })
    .catch((error) => console.log(error));
});
