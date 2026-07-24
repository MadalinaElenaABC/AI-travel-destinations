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

  let resultElement = document.querySelector("#result");
  let userInstructions = document.querySelector("#destination").value;

  resultElement.classList.remove("hidden");

  resultElement.innerHTML = `
    <div class="generating">
      ✈️ Generating your dream trip...
    </div>
  `;

  let apiKey = "b45446c9o29t32bc100ffa02d6cbbaa0";

  let prompt = `Generate a dream vacation based on these instructions: ${userInstructions}`;

  let context =
    "You are an experienced travel expert. Generate a personalized travel itinerary based on the user's instructions. Use only plain text separated by <br /><br />. Do not use markdown, tables, lists or HTML tags except <br />.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTrip);
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generateTrip);
