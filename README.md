# quick_weather_forecast

You can get weather information through this app

## Installation

```sh
npm install quick_weather_forecast
```

## Usage

Please obtain the weatherapi.com API_KEY and set the API Key to an environment variable.

```sh
export API_KEY=YOUR_API_KEY
```

Please execute the following command.

```sh

npx quick_weather_forecast
```

Please select your command.

```sh
? 選択一覧を選んでください
❯ 現在の天気 
  天気予報 
```

Please input location. The weather information for that location will be displayed.

```sh
? 選択一覧を選んでください 現在の天気
? 場所を入力してください Tokyo
現在の天気:
場所: Tokyo, Japan
温度: 22
```
