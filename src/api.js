export default function api() {
  const key = "5bc3480b3d8d4997b85112547240501";

  async function getWeather(city) {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=4`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    console.log(data);

    return data;
  }

  return {
    getWeather,
  };
}
