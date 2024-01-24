"use strict";
(self["webpackChunktop_template"] =
  self["webpackChunktop_template"] || []).push([
  ["main"],
  {
    /***/ "./src/main.js":
      /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _scripts_weather_api_getForecast__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./scripts/weather-api/getForecast */ "./src/scripts/weather-api/getForecast.js",
          );

        (0,
        _scripts_weather_api_getForecast__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ])();

        /***/
      },

    /***/ "./src/scripts/weather-api/getForecast.js":
      /*!************************************************!*\
  !*** ./src/scripts/weather-api/getForecast.js ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ getLocationForecast,
          /* harmony export */
        });
        async function getLocationForecast(location = "39.474275,2.830115") {
          const apiKey = "b6f3bfef636f4c98ac093255242401";

          const forecast = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`,
          )
            .then((response) => {
              console.log(response);
              response.json();
            })
            .then((response) => {
              console.log(response);
            });
        }

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/main.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEQ7O0FBRTVELDRFQUFXOzs7Ozs7Ozs7Ozs7OztBQ0ZJO0FBQ2Y7O0FBRUEsaUZBQWlGLE9BQU8sS0FBSyxTQUFTO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRlbXBsYXRlLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9wLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvd2VhdGhlci1hcGkvZ2V0Rm9yZWNhc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gXCIuL3NjcmlwdHMvd2VhdGhlci1hcGkvZ2V0Rm9yZWNhc3RcIjtcblxuZ2V0Rm9yZWNhc3QoKTsiLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbkZvcmVjYXN0IChsb2NhdGlvbiA9IFwiMzkuNDc0Mjc1LDIuODMwMTE1XCIpIHtcbiAgY29uc3QgYXBpS2V5ID0gXCJiNmYzYmZlZjYzNmY0Yzk4YWMwOTMyNTUyNDI0MDFcIjtcblxuICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7bG9jYXRpb259JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYClcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PntcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
