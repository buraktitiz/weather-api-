import React from 'react'

function Result({air}) {

    return (
        <>
        {typeof air.main != 'undefined' &&( // Eğer veri yoksa(undefined olarak dönüyorsa) sonucu göstermiyoruz.
            <div className="result">
                <div className="city">{air.name}, {air.sys.country}</div>
                <div className="detail">
                    <div className="degree">{Math.round(air.main.temp)}°</div>
                    <div className="status">{air.weather[0].description}</div>
                    </div>
                </div>
        )}
        </>
    )
}

export default Result
