export const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));};

export const formatMoney = ( value, currency, precision ) => {

    currency  = typeof currency === 'undefined'  ? 'R$' : currency;
    precision = typeof precision === 'undefined' ? 2    : precision;

    let amount = parseFloat( value ).toFixed( precision )
        .replace('.',',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    return `${currency} ${amount}`;
};

export const formatMsgError = (error) => {
    let msgError = 'Alguma coisa errada aconteceu.';
    if( window._.isNull(error) ){
        msgError = null
    } else if(typeof error === 'string'){
        msgError = error
    } else {
        msgError = error.response.data.message
    }
    return msgError
}
