// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from 'react';

function TradingViewWidget() {
    const container = useRef();
    const [widgetHeight, setWidgetHeight] = useState(600);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            // Adjust height based on window width
            if (windowWidth < 768) {
                setWidgetHeight(400);
            } else {
                setWidgetHeight(600);
            }
        };

        // Initial call to handleResize
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        "height": ${widgetHeight},
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
        }, [widgetHeight]);

    return (
        <div className="tradingview-widget-container rounded-xl overflow-hidden" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}

export default memo(TradingViewWidget);
