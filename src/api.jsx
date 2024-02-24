import axios from "axios";

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

const httpConfig = {
    method: 'GET'
}

export default async function makeApiCall() {
    try {
        const response = await axios.get(url);

        if (!(response.status === 200)) {
            throw new Error('Error in making api request, please check url');
        }

        return {data: [...getApiResponse(response.data)]};
    }
    catch(error) {        
        return {error: error.message};
    }    
}

function getApiResponse(data) {

    const usableData = data.map(item => {
        return {
            id : item.id,
            image : item.image,
            name: item.name,
            symbol: item.symbol,
            current_price: item.current_price.toLocaleString(),
            fully_diluted_valuation: item.fully_diluted_valuation.toLocaleString(),
            price_change: item.price_change_percentage_24h.toFixed(2),
            market_cap: item.market_cap.toLocaleString(),
        }
    })    
    
    return usableData;
}