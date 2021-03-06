// Copyright (c) 2021 ShusukeO
// This software is released under the MIT License, see LICENSE.

function bToRColorTemperatureDefaultSettings() {
  return {
    maxTemperature: 40,
    minTemperature: -5,
  };
}

function getBToRColorTemperature(temperature, config) {
  if (config == null) config = bToRColorTemperatureDefaultSettings();
  const temperatureBase = Math.round(
    ((temperature - config.minTemperature) /
      (config.maxTemperature - config.minTemperature)) *
      255
  );
  return "rgb(" + [temperatureBase, 128, 255 - temperatureBase].join(",") + ")";
}
