export const isCelPhone = (value) => value === null ? true : /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/.test(value)
export const isCpf      = (value) => value === null ? true : /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value)
export const isCnpj     = (value) => /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(value)
export const isCpfCnpj  = (value) => /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/.test(value)
