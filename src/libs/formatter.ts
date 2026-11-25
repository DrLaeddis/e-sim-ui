export const priceFormat = (angka: any) => {
    const value = Number(angka);

    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);
};