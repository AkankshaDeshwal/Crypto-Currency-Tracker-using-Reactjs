export const formatPrice = (price) => {
    if (price<0.01) return price.toFixed(8)

    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits:2, maximumFractionDigits:2 }).format(price)
}

export const compactPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: "currency", currency: "USD", minimumFractionDigits:2, maximumFractionDigits:2, 
  notation: 'compact',
  compactDisplay: 'short' // Uses 'M', 'B', etc.
}).format(price);
}

export const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num)
}