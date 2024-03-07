import React from 'react'
import TradingViewWidget from './TradingViewWidget';

const BitcoinGraph = () => {
  return (
    <div>
        <div className='rounded-lg overflow-y-hidden'>
            <TradingViewWidget />
        </div>
    </div>
  )
}

export default BitcoinGraph