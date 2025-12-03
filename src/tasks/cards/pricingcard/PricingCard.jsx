import React from 'react'

const PricingCard = () => {
  return (
    <div style={{width: '950px', height: '500px', display: 'flex', margin: '20px', gap: '20px', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2', padding: '20px 5px', borderRadius: '10px'}}>
      
      {/* first card */}
      <div style={{textAlign: 'center', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2', padding: '10px', borderRadius: '10px', width: '250px'}}>
        <h1 style={{background: '#f7f0f0ff', borderRadius: '2px', width: '100%', fontSize: '15px', padding: '15px 0'}}>FREE</h1>
        <h1> <sup style={{fontSize: '16px'}}>$</sup>0<br /><span style={{fontSize: '15px', color: '#535050ff'}}>GREAT FOR STARTERS</span></h1>
        <p style={{marginTop: '20px'}}>Discover how to create <br /> your first project.</p>
        <button className='btn' style={{padding: '15px', border: '0.5px solid black', borderRadius: '3px', width: '100%', fontSize: '15px', fontWeight: 'bolder', marginTop: '20px'}}>GET STARTED</button>

        <div style={{textAlign: 'left', marginTop: '20px'}}>
            <h5>✅ 3 new projects / month</h5>
            <h5>❌ Basic interaction</h5>
            <h5>❌ Assets library</h5>
        </div>
      </div>

      {/* second card */}
      <div style={{textAlign: 'center', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2', padding: '10px', borderRadius: '10px', width: '250px'}}>
        <h1 style={{background: 'linear-gradient(to right, #D2DDFF, #C89AFE)', color: 'white', borderRadius: '2px', width: '100%', fontSize: '15px', padding: '15px 0', height: '100%'}}>LITE</h1>
        <h1><sup style={{fontSize: '16px'}}>$</sup>7<sub style={{fontSize: '16px'}}>/mo</sub> <br /><span style={{fontSize: '15px', color: '#535050ff'}}>FOR PLANNED PROJECTS</span></h1>
        <p style={{marginTop: '20px'}}>Bring your designs to the <br /> next level and export them.</p>
        <button className='btn' style={{padding: '15px', border: '0.5px solid black', borderRadius: '3px', width: '100%', fontSize: '15px', fontWeight: 'bolder', marginTop: '20px'}}>GET STARTED</button>

        <div style={{textAlign: 'left', marginTop: '20px'}}>
            <h5>✅ 3 new projects / month</h5>
            <h5>✅ Basic interaction</h5>
            <h5>✅ Assets library</h5>
        </div>
      </div>

      {/* third card */}
      <div style={{textAlign: 'center', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2', padding: '10px', borderRadius: '10px', width: '250px'}}>
        <h1 style={{background: 'linear-gradient(to right, #FFB1C3, #FFCB6F)', color: 'white', borderRadius: '2px', width: '100%', fontSize: '15px', padding: '15px 0', height: '100%'}}>PRO</h1>
        <h1> <sup style={{fontSize: '16px'}}>$</sup>12<sub style={{fontSize: '16px'}}>/mo</sub> <br /><span style={{fontSize: '15px', color: '#535050ff'}}>FOR PROFESSIONAL USE</span></h1>
        <p style={{marginTop: '20px'}}>Enjoy limitless use with <br /> interactive export options.</p>
        <button className='btn' style={{padding: '15px', border: '0.5px solid black', borderRadius: '3px', width: '100%', fontSize: '15px', fontWeight: 'bolder', marginTop: '20px'}}>GET STARTED</button>

        <div style={{textAlign: 'left', marginTop: '20px'}}>
            <h5>✅ 3 new projects / month</h5>
            <h5>✅ Basic interaction</h5>
            <h5>✅ Assets library</h5>
        </div>
      </div>
    </div>
  )
}

export default PricingCard;
