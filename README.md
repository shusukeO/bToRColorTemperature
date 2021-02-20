# Sample

[sample](https://shusukeo.github.io/bToRColorTemperature/sample/)

# Usage

```js
console.log(getBToRColorTemperature(40));
>>> rgb(255, 128, 0)
```

```js
const config = bToRColorTemperatureDefaultSettings();
config.maxTemperature = 50;
config.minTemperature = -10;
console.log(getBToRColorTemperature(-10, config));
>>> rgb(0, 128, 255)
```

# License

BtoRColorTemperature.js is available under the [MIT license](https://opensource.org/licenses/MIT).
