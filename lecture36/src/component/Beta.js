import React, { useContext } from 'react'
import { sonaKahaGadaTha, jobLagegiYaNahi } from './God';


const Beta = () => {
    const jagah = useContext(sonaKahaGadaTha);
    const company = useContext(jobLagegiYaNahi);
    
    return (
        <>
            Hello <h1>Hello job lagegi:{company}, jaakar sona nikal le is jagah:  {jagah}</h1>
        </>
    )
}
// const Beta = () => {
//     return (
//         <>
//             {/* Hello */}
//             <sonaKahaGadaTha.Consumer>
//                 {(jagah) => {
//                     return <jobLagegiYaNahi.Consumer>
//                         {(company)=>{
//                             return <div>
//                             <h1>Sone ki Jagah -- {jagah}</h1>
//                             <h1>Job Lagegi -- {company}</h1>
//                         </div>
//                         }}
//                     </jobLagegiYaNahi.Consumer>
//                 }}
//             </sonaKahaGadaTha.Consumer>
//         </>
//     )
// }

export default Beta
// return <>
//                         <h1>Dekho Majaa</h1>
//                         <jobLagegiYaNahi.Consumer>
//                             {(company) => {
//                                 return <>
//                                     <h1>Hello job lagegi:{company}, jaakar sona nikal le is jagah:  {jagah}</h1>
//                                     <h1>Hello job lagegi:{company}, jaakar sona nikal le is jagah:  {jagah}</h1>
//                                 </>
//                             }}
//                         </jobLagegiYaNahi.Consumer>
//                     </>