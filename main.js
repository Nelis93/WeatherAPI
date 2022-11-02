const APIKey = "f71321ba3b2a9ede088e8728708923cd";
let chosenCity = "London";

const inputField = document.getElementById("inputField");
const newForm = document.getElementById("form");

function getWeather(event) {
  event.preventDefault();
  chosenCity = inputField.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${APIKey}`
  )
    .then((data) => data.json())
    .then((data) => {
      const [temperature, humidity] = [data.main.temp, data.main.humidity];
      newForm.insertAdjacentHTML(
        "beforeend",
        `<p>The current temperature in ${data.name} is: ${temperature} degrees F</p>`
      );
      console.log(data);
    })
    .catch((err) => console.log(err));
}
newForm.addEventListener("submit", getWeather);
