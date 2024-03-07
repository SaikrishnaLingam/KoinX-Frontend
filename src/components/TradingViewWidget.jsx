// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();


  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "INDEX:BTCUSD|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": 600,
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "Andale Mono, monospace",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "gridLineColor": "rgba(0, 0, 0, 0.06)",
          "widgetFontColor": "rgba(0, 0, 0, 1)",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|60",
            "1w|1D",
            "1m|1W",
            "3m|1W",
            "6m|1M",
            "12m|1M",
            "all|6M"
          ]
        }`;
      container.current.appendChild(script);
    },[]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
