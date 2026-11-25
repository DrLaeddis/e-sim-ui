export const priceFormat = (angka: any) => {
    const value = Number(angka);

    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);
};

export const onFormattedDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",     
        month: "2-digit",     
        year: "numeric",    
    })
    .replaceAll("/", "-");
}

export const invoiceFormattedDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",     
        month: "short",   
        year: "numeric",    
    })
    .replaceAll("/", "-");
}

export const onFormattedTime = (date: string | Date) => {
    const time = new Date(date)
        .toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Jakarta",
        })
        .replaceAll(".", ":");

    return `${time} WIB`;
};