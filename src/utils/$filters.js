export function registerFilters(app) {
  app.config.globalProperties.$filters = {
    currencyUSD(value) {
      return '$' + value.toFixed(2)
    }
  }
}
