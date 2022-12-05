import React from 'react'
import products from "../assets/3.png"

const Mid = () => {
  return (
    <div className='mid'>
        <div className='mid-1'>
            <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <img src={products} alt="products" className='products'/>
            <p className='p-names'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
          </div>
          <hr />
          <div className='mid-2'>
              <p className='head'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
              <p>CHEMICALS & PROCESS <i className="edit1">|</i> POWER <i className="edit1">|</i> WATER & WASTE WATER <i className="edit1">|</i> OILS & GAS <i className="edit1">|</i> PHARMA <i className="edit1">|</i> SUGARS & DISTILLERIES <i className="edit1">|</i> PAPER & PULP <i className="edit1">|</i> MARINE & DEFENCE <i className="edit1">|</i> METAL & MINING <i className="edit1">|</i> FOOD & BEVERAGE <i className="edit1">|</i> PETROCHEMICAL & REFINERIES <i className="edit1">|</i> SOLAR <i className="edit1">|</i> BUILDING <i className="edit1">|</i> HVAC <i className="edit1">|</i> FIRE <i className="edit1">|</i> FIGHTING <i className="edit1">|</i> AGRICULTURE & RESIDENTIAL</p>
          </div>
    </div>
  )
}

export default Mid
