# Usage

```js
console.log(getbToRColorTemperature(40));
>>> rgb(255, 128, 0)
```

```js
const config = bToRColorTemperatureDefaultSettings();
config.maxTemperature = 50;
config.minTemperature = -10;
console.log(getbToRColorTemperature(-10, config));
>>> rgb(0, 128, 255)
```

# License

BtoRColorTemperature.js is available under the [MIT license](https://opensource.org/licenses/MIT).
