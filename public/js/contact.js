const form = document.querySelector(".contact__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted!");
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = `${name.value} at ${email.value} gets in touch`;
  const message = document.querySelector(".messageField");
  const data = {
    name: name.value,
    email: email.value,
    subject,
    message: message.value,
  };

  fetch("/email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text()) // Parse JSON response
    .then((result) => {
      console.log(result.message); // "Message received!"
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
      alert("Email sent!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
