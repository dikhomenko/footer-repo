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
    .then((response) => {
      return response.json().then((data) => {
        // Handle the response status
        if (response.status === 201) {
          alert(data.message); // Success message
          emailInput.value = ""; // Clear input
        } else if (response.status === 400) {
          alert(data.message); // Error message for required field
        } else if (response.status === 404) {
          alert(data.message); // Service not found
        } else if (response.status === 409) {
          alert(data.message); // Subscription already exists
        } else if (response.status === 500) {
          alert(data.message); // Server error
        } else {
          alert("An unknown error occurred.");
        }
      });
    })
    .catch((error) => {
      alert("Error: " + error.message); // Display error message for network issues
    });
});
