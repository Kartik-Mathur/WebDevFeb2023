import React, { createContext } from 'react'
import Purvaj from './Purvaj';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHouse } from '@fortawesome/free-solid-svg-icons'
import mycss from './God.module.css';

const sonaKahaGadaTha = createContext();
const jobLagegiYaNahi = createContext();
// 1. Create context
// 2. Context ka Provider banega
// 3. Context ko export karo
// 4. Consumer ke arrow function mei value aa jaegi

const God = () => {
    return (
        <sonaKahaGadaTha.Provider value={"W ke neeche"}>
            <jobLagegiYaNahi.Provider value={"Beta Tumse Na Ho Paega"}>
                {/* <FontAwesomeIcon className={mycss.logoColor} icon={faHouse} /> */}
                <Purvaj />
            </jobLagegiYaNahi.Provider>
        </sonaKahaGadaTha.Provider>
    )
}

export default God;
export { sonaKahaGadaTha, jobLagegiYaNahi };