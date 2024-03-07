import React from 'react'
import TradingViewWidget from './TradingViewWidget';

const BitcoinGraph = () => {
  return (
    <div className='bg-slate-200'>
        <div className='rounded-xl overflow-y-hidden p-12'>
            <TradingViewWidget />
        </div>
    </div>
  )
}

export default BitcoinGraph