import '../styles/CurrencyDetailsRow.css'
import { memo } from 'react';

function CurrencyDetailsRow({item }) {
    const {image, name, symbol, current_price, fully_diluted_valuation, price_change, market_cap} = item;

    return (
        <tr className="coin-details-row">
            
            <td className="coin-name-image">
                <div className="coin-image-container">
                    <img src={image} alt={name} />
                </div>
                {name}
            </td>

            <td className="coin-symbol">{symbol}</td>

            <td className="current-price">{`$${current_price}`}</td>

            <td className="full-valuation">{`$${fully_diluted_valuation}`}</td>

            <td className={`price-change${price_change < 0 ? ' down' : ' up'}`}>{`${price_change}%`}</td>

            <td className="mkt-cap">{`Mkt Cap: $${market_cap}`}</td>
        </tr>
    )
    
}

export default memo(CurrencyDetailsRow);