export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('en-US', {
        useGrouping: true,
    });

    let formattedNumber = formatter.format(price);

    formattedNumber = formattedNumber.replace(/,/g, ' ');

    return formattedNumber;
}
