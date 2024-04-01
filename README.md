<div align="center">

**binance-candlestick-data built with React, Typescript and TailwindCSS**

</div>

---

Check out <a href="https://binance-candlestick-data-package.onrender.com/?path=/docs/components-candlestick--docs">Storybook</a>

## 💿 Install

Make sure you've installed <a href="https://tailwindcss.com/docs/installation">TailwindCSS</a>, <a href="https://www.chartjs.org/docs/latest/getting-started/installation.html">Chart.js</a> and <a href="https://react-chartjs-2.js.org/">react-chartjs-2</a>.

Install the package with npm or yarn:

```bash
npm install binance-candlestick-data
or
yarn add binance-candlestick-data
```

To prevent TailwindCSS from purging your styles, add the following line to your tailwind.config.js:

```js
module.exports = {
  content: [
    'node_modules/binance-candlestick-data/dist/**/*.js',
  ],
}
```