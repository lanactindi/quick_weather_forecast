const Inquirer = require("inquirer");
const axios = require("axios");
const API_KEY = process.env.API_KEY;
const BASE_URL = "http://api.weatherapi.com/v1";
const choices = ["現在の天気", "天気予報"];

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { key: API_KEY },
});

function getCurrentWeather(params) {
  instance.get("/current.json", { params: params }).then((res) => {
    console.log("現在の天気:");
    console.log(
      "場所:",
      `${res.data.location.name}, ${res.data.location.country}`
    );
    console.log("温度:", res.data.current.temp_c);
  });
}

function getForecastWeather(params) {
  instance.get(BASE_URL + "/forecast.json", { params: params }).then((res) => {
    console.log("明日の天気:");
    console.log(
      "場所:",
      `${res.data.location.name}, ${res.data.location.country}`
    );
    console.log("温度:", res.data.current.temp_c);
  });
}

Inquirer.prompt([
  {
    type: "list",
    name: "command",
    message: "選択一覧を選んでください",
    choices: choices,
  },
]).then((choice) => {
  if (!choice) {
    console.log("error");
  }
  return Inquirer.prompt([
    {
      type: "input",
      name: "location",
      message: "場所を入力してください",
      validate: (locationInput) => {
        if (locationInput) {
          return true;
        } else {
          console.log("まだ場所を入れてないので確認してください");
          return false;
        }
      },
    },
  ]).then((answer) => {
    switch (choice.command) {
      case "現在の天気":
        getCurrentWeather({ q: answer.location });
        break;
      case "天気予報":
        getForecastWeather({ q: answer.location, days: 1 });
        break;
    }
  });
});
