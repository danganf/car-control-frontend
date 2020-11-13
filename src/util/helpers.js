export const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));};

export const formatMoney = ( value, currency, precision ) => {

    currency  = typeof currency === 'undefined'  ? 'R$' : currency;
    precision = typeof precision === 'undefined' ? 2    : precision;

    let amount = parseFloat( value ).toFixed( precision )
        .replace('.',',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    return `${currency} ${amount}`;
};
