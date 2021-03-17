export const onlyNumbers = (str: string) => str?.replace(/\D/g, '');
export const toNumber = (str: string) => parseInt(onlyNumbers(str), 10);
