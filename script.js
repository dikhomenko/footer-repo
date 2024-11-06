document.getElementById("send-button").addEventListener("click", function () {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  if (!emailInput.checkValidity()) {
    alert("Please enter a valid email address.");
    return;
  }

  const subscriptionData = { email };

  fetch("https://your-energy.b.goit.study/api/subscription", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(subscriptionData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (response.status === 201) {
        alert(data.message); // Display success message
        emailInput.value = ""; // Clear input
      } else {
        throw new Error(data.message);
      }
    })
    .catch((error) => {
      alert("Error: " + error.message); // Display error message
    });
});
