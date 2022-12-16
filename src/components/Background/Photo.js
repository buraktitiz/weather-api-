import React from 'react';
import yagmurlu from '../../Pictures/Rainy.jpg';
import bulutlu from '../../Pictures/Cloud.jpg';
import sisli from '../../Pictures/Foggy.jpg';
import karli from '../../Pictures/Snowy.jpg';
import gokkusagi from '../../Pictures/Rainbow.jpg';
import ruzgarli from '../../Pictures/Storm.png';
import gunesli from '../../Pictures/Sunny.jpg';


function Photo({statu}) {
    switch (statu){
        case "Rain":
            return <img className="background-picture" src={yagmurlu} alt="yagmurlu" />
        case "Drizzle":
            return <img className="background-picture" src={yagmurlu} alt="yagmurlu" />
        case "Clear":
            return <img className="background-picture" src={gunesli} alt="gunesli" />
        case "Mist":
            return <img className="background-picture" src={sisli} alt="sisli" />
        case "Snow":
            return <img className="background-picture" src={karli} alt="karli" />
        case "Storm":
            return <img className="background-picture" src={ruzgarli} alt="ruzgarli" />
        case "Clouds":
            return <img className="background-picture" src={bulutlu} alt="bulutlu" />
        default:
            return <img className="background-picture" src={gokkusagi} alt="gokkusagi" />           
    }
}

export default Photo;