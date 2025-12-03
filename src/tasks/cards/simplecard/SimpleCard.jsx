import React from 'react'
import cabinImg from '../../../assets/Iceland_cabin.jpg'

const SimpleCard = () => {
  return (
    <div style={{width: '280px', display: 'inline-block',  alignItems: 'center', margin: "auto", borderRadius: '10px',boxShadow:"0px 0px 4px rgba(0,0,0,0.25)", background: 'white'}}>
      
      {/* for Image */}
      <div style={{margin: 'auto'}}>
        <img src={cabinImg} alt="iceland-cabin-image" className='w-65 h-50' style={{borderRadius: '10px', contain: 'size', margin: '8px auto', border: '0 solid black'}} />
      </div>

      {/* for Title and price */}
      <div style={{marginLeft: '8px', width: '100%'}}>
        <h1 style={{fontSize: '20px', fontWeight: 'bolder'}}>Iceland Cabin</h1>
        <h4 style={{color: '#8b8787ff', fontSize: '10px'}}>$680 per night</h4>
      </div>

      {/* for Description */}
      <div style={{marginLeft: '8px', marginTop: "5px", width: '100%'}}>
        <p style={{fontSize: '10px', color: '#8b8787ff', width: '100%'}}>Cozy cabin nestled in Iceland's breathtaking landscape, offering stunning views of mountains and Northern Lights.</p>
      </div>

      {/* for Days & Rating Part */}
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '8px'}}>
        <div style={{marginLeft: '8px', textAlign: 'center', backgroundColor: '#e9e7e7ff', width: '130px', borderRadius: '5px', marginTop: '8px', padding: 'auto'}}>
          <h3 style={{fontSize: '8px', color: '#8b8787ff'}}>Days</h3>
          <h2 style={{fontSize: '20px'}}>3</h2>
        </div>

        <div style={{marginRight: '8px', textAlign: 'center', backgroundColor: '#e9e7e7ff', width: '130px', borderRadius: '5px', marginTop: '8px', padding: 'auto'}}>
          <h3 style={{fontSize: '8px', color: '#8b8787ff'}}>Rating</h3>
          <h2 style={{fontSize: '20px'}}>4.9</h2>
        </div>
      </div>

      {/* for Button */}
      <div style={{textAlign: 'center', border: '0 solid black', backgroundColor: '#000000ff', margin: '8px 8px', borderRadius: '5px', padding: '5px 10px'}}>
        <button style={{color: '#fff', fontSize: '12px'}}>Reserve</button>
      </div>
      
    </div>
  )
}

export default SimpleCard
