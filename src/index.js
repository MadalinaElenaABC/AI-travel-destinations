function displayTrip(response) {
  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateTrip(event) {
  event.preventDefault();

  let destination = document.querySelector("#destination");
  let resultElement = document.querySelector("#result");

  resultElement.classList.remove("hidden");

  resultElement.innerHTML = `<div class="generating">
  ✈️ Generating your dream trip to <strong>${destination.value}</strong>...
  </div>`;

  let apiKey = "b45446c9o29t32bc100ffa02d6cbbaa0";

  let prompt = `Generate a dream vacation to ${destination.value}`;

  let context =
    "You are a travel expert. Answer using ONLY plain text separated by <br /><br />. Never use markdown, tables, divs or any HTML tags except <br />.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTrip);
}

let formElement = document.querySelector("form");

formElement.addEventListener("submit", generateTrip);
