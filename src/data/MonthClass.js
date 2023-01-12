const workHoursPerDay = 8;
const digitsAfterComa = 2;
const formatValue = (value) => Number(value.toFixed(digitsAfterComa));

class Month {
    constructor(monthParametersValues) {
        const calcUSDmonth = monthParametersValues.amount;
        const calcUSDday = calcUSDmonth / monthParametersValues.days;
        const calcUSDhour = calcUSDday / workHoursPerDay;

        const calcUAHmonth = calcUSDmonth * monthParametersValues.exchangeRate;
        const calcUAHday = calcUAHmonth / monthParametersValues.days;
        const calcUAHhour = calcUAHday / workHoursPerDay;

        const calcTAXEDmonth =
            calcUAHmonth -
            calcUAHmonth * monthParametersValues.taxPercent -
            monthParametersValues.ESV;
        const calcTAXEDday = calcTAXEDmonth / monthParametersValues.days;
        const calcTAXEDhour = calcTAXEDday / workHoursPerDay;

        const paymentExpected = calcUAHhour * monthParametersValues.hours;
        const sallaryExpected =
            paymentExpected -
            paymentExpected * monthParametersValues.taxPercent -
            monthParametersValues.ESV;

        this.USDmonth = formatValue(calcUSDmonth);
        this.USDday = formatValue(calcUSDday);
        this.USDhour = formatValue(calcUSDhour);

        this.UAHmonth = formatValue(calcUAHmonth);
        this.UAHday = formatValue(calcUAHday);
        this.UAHhour = formatValue(calcUAHhour);

        this.TAXEDmonth = formatValue(calcTAXEDmonth);
        this.TAXEDday = formatValue(calcTAXEDday);
        this.TAXEDhour = formatValue(calcTAXEDhour);

        this.paymentExpected = formatValue(paymentExpected);
        this.sallaryExpected = formatValue(sallaryExpected);

        this.parameters = monthParametersValues;
    }
}

export { Month };

// const monthParametersValues = {
//     year: 2023,
//     month: 0,
//     days: 22,
//     hours: 176,
//     ESV: 1430,
//     taxPercent: 0.05,
//     exchangeRate: 36.5686,
//     amount: 620,
// };
// let month = new Month(monthParametersValues);

// const log = () => console.log(JSON.stringify([month, month, month]));
// log();
