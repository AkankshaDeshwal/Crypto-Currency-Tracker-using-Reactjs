const BASE_URL = "https://api.coingecko.com/api/v3"
export const fetchCryptos = async () => {
    const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false`)

    if (!response.ok) {
        throw new Error('Failed to fetch cyprtos')
    }

    return response.json()
}

export const fetchCoinData = async (id)=> {
    const response = await fetch(`${BASE_URL}/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`)

    if (!response.ok) {
        throw new Error('Failed to fetch coin data')
    }

    return response.json()
}