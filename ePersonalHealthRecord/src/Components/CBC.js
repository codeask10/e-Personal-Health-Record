import React, { useState } from 'react';
import "../CSS/CBC.css";
import { useNavigate } from 'react-router-dom';


const CBC = () => {

const [cbc,setCbc]= useState({
  haemoglobin:"", totalWBCCount:"", neutrophils:"", lymphocytes:"", monocytes:"", eosinophils:"", absNeutrophisCount:"", absLymphocytesCount:"", absMonocytesCount:"", absEosinophilsCount:"", plateletCount:"", RBCCount:"", MCV:"", MCH:"", MCHC:"",RDWCV:""
});

const navigate = useNavigate();

  
const onSubmit= async (e)=>{
  e.preventDefault();
  if(localStorage.getItem('token')){
    const response = await fetch("http://localhost:5001/api/CBC/addData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ haemoglobin:cbc.haemoglobin, 
        totalWBCCount:cbc.totalWBCCount, 
        neutrophils:cbc.neutrophils,
        lymphocytes:cbc.lymphocytes,
        monocytes:cbc.monocytes, 
        eosinophils:cbc.eosinophils, 
        absNeutrophisCount: cbc.absNeutrophisCount, 
        absLymphocytesCount:cbc.absLymphocytesCount, 
        absMonocytesCount:cbc.absMonocytesCount, 
        absEosinophilsCount:cbc.absEosinophilsCount, 
        plateletCount:cbc.plateletCount, 
        RBCCount:cbc.RBCCount, 
        MCV:cbc.MCV, 
        MCH:cbc.MCH,
        MCHC:cbc.MCHC,
        RDWCV:cbc.RDWCV
       })
    });
    // eslint-disable-next-line 
    const json = await response.json();
    console.log(json);

  }
  else{
    navigate('/Login')
  }

}
 
const handleChange = (e) => {
  setCbc({ ...cbc, [e.target.name]: e.target.value });
}
  return (
    <div className='ui container  my-5'>
      <form className="ui form" onSubmit={onSubmit}>
        <h2 className="ui dividing header">Complete blood count</h2>
        <div className="ui equal width grid">
          <div className="doubling four column row" >
            <div className="column field "  >
              <label htmlFor="haemoglobin" >Haemoglobin</label>
              <div className="ui right labeled input">
                <input type="text" id="haemoglobin" name="haemoglobin" value={cbc.haemoglobin} onChange={handleChange} pattern="^(?!0\d)(\d{1,2}|100)(\.\d{1,2})?$" title="Enter a decimal value between 1 and 100 (up to 2 decimal places)" placeholder="Haemoglobin" />
                <div className="ui basic label">
                  gm/dl
                </div>
              </div>
            </div>
            <div className=" column field  myElement" >
              <label >Ref. Range</label>
              <div className="ui large label mt-1 ">
                12-15
              </div>
            </div>
            <div className=" column field "  >
              <label htmlFor="totalWBCCount" >Total W.B.C Count</label>
              <div className="ui right labeled input">
                <input type="text" id="totalWBCCount" name="totalWBCCount" value={cbc.totalWBCCount}  onChange={handleChange} pattern="^([1-9]\d{3,3}|1\d{4}|20000)$" title="Enter a value between 1000 and 20000" placeholder="Enter a value" />
                <div className="ui basic label px-1">
                  cells/cu.mm
                </div>
              </div>
            </div>
            <div className="  column field myElement" >
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                5k-10K
              </div>
            </div>
          </div>
        </div>
        <h4 className="ui dividing header">W.B.C Differential</h4>
        <div className="ui equal width grid">
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="neutrophils" >Neutrophils</label>
              <div className="ui right labeled input">
                <input type="text" id="neutrophils" name="neutrophils" value={cbc.neutrophils} onChange={handleChange} pattern="^(100|[1-9][0-9]?)" title="Enter a value between 1 and 100" placeholder="neutrophils" />
                <div className="ui basic label">
                  %
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                40-70
              </div>
            </div>
            <div className="column field "  >
              <label htmlFor="lymphocytes" >Lymphocytes</label>
              <div className="ui right labeled input">
                <input type="text" id="lymphocytes" name="lymphocytes" value={cbc.lymphocytes} onChange={handleChange} pattern="^(100|[1-9][0-9]?)" title="Enter a value between 1 and 100" placeholder="lymphocytes" />
                <div className="ui basic label">
                  %
                </div>
              </div>
            </div>
            <div className="column field myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                25-40
              </div>
            </div>
          </div>
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="monocytes" >Monocytes</label>
              <div className="ui right labeled input">
                <input type="text" id="monocytes" name="monocytes" value={cbc.monocytes} onChange={handleChange} pattern="^(100|[1-9][0-9]?)" title="Enter a value between 1 and 100" placeholder="monocytes" />
                <div className="ui basic label">
                  %
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                3-7
              </div>
            </div>
            <div className="column field "  >
              <label htmlFor="eosinophils" >Eosinophils</label>
              <div className="ui right labeled input">
                <input type="text" id="eosinophils" name="eosinophils" value={cbc.eosinophils} onChange={handleChange}  pattern="^(100|[0-9][0-9]?)" title="Enter a value between 0 and 100" placeholder="eosinophils" />
                <div className="ui basic label">
                  %
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                0-6
              </div>
            </div>
          </div>
        </div>
        <h4 className="ui dividing header">W.B.C Absolute Values</h4>
        <div className="ui equal width grid">
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="absNeutrophisCount" >Absolute Neutrophils Count (ANC)</label>
              <div className="ui right labeled input">
                <input type="text" id="absNeutrophisCount" name="absNeutrophisCount"  value={cbc.absNeutrophisCount}  onChange={handleChange} pattern="^(100|[1-9][0-9]?)" title="Enter a value between 1 and 100" placeholder="ANC" />
                <div className="ui basic label">
                  10^3/ul
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                2-7
              </div>
            </div>
            <div className="column field "  >
              <label htmlFor="absLymphocytesCount" >Absolute Lymphocytes Count(ALC)</label>
              <div className="ui right labeled input">
                <input type="text" id="absLymphocytesCount" name="absLymphocytesCount" value={cbc.absLymphocytesCount}  onChange={handleChange}  pattern="^(100|[1-9][0-9]?)" title="Enter a value between 1 and 100 " placeholder="ALC" />
                <div className="ui basic label">
                  10^3/ul
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                1-3
              </div>
            </div>
          </div>
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="absMonocytesCount" >Absolute Monocytes count (AMC)</label>
              <div className="ui right labeled input">
                <input type="text" id="absMonocytesCount" name="absMonocytesCount"  value={cbc.absMonocytesCount} onChange={handleChange}  pattern="^(0\.[1-9]\d?|[1-9](\.\d{1,2})?|10(\.00)?)$" title="Enter a number between 0.01 and 10.00" min="0.01" max="10.00" placeholder="AMC" />
                <div className="ui basic label">
                  10^3/ul
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                0.2-1.0
              </div>
            </div>
            <div className="column field "  >
              <label htmlFor="absEosinophilsCount" >Absolute Eosinophils count(AEC)</label>
              <div className="ui right labeled input">
                <input type="text" id="absEosinophilsCount" name="absEosinophilsCount" value={cbc.absEosinophilsCount}  onChange={handleChange}  pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="AEC" />
                <div className="ui basic label">
                  10^3/ul
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                0.0-0.6
              </div>
            </div>
          </div>
        </div>
        <h4 className="ui dividing header">Platelet Count</h4>
        <div className="ui equal width grid">
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="plateletCount" >Platelet Count</label>
              <div className="ui right labeled input">
                <input type="text" id="plateletCount" name="plateletCount" value={cbc.plateletCount} onChange={handleChange}  pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Platelet Count " />
                <div className="ui basic label">
                  /cmm
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label >Ref. Range</label>
              <div className="ui large label mt-1">
                150K-450K
              </div>
            </div>
            <div className="column field "  >
              <label htmlFor="RBCCount">RBC Count</label>
              <div className="ui right labeled input">
                <input type="text" id="RBCCount" name="RBCCount" value={cbc.RBCCount} onChange={handleChange}  pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="RBC count.." />
                <div className="ui basic label px-0">
                  mil./cu mm
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                4.5-6
              </div>
            </div>
          </div>
        </div>
        <h4 className="ui dividing header">Blodd Cell Indices</h4>
        <div className="ui equal width grid">
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="MCV" >M.C.V</label>
              <div className="ui right labeled input">
                <input type="text" id="MCV" name="MCV" value={cbc.MCV} onChange={handleChange}  pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="M.C.V values.." />
                <div className="ui basic label px-0">
                  femtolitres
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                83-101
              </div>
            </div>
            <div className="column field "  >
              <label htmlFor="MCH" >M.C.H</label>
              <div className="ui right labeled input">
                <input type="text" id="MCH" name="MCH" value={cbc.MCH} onChange={handleChange} pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="M.C.H values" />
                <div className="ui basic label px-0">
                  pico-grams
                </div>
              </div>
            </div>
            <div className="column field myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                27-32
              </div>
            </div>
          </div>
          <div className="doubling four column row">
            <div className="column field " >
              <label htmlFor="MCHC" >M.C.H.C.</label>
              <div className="ui right labeled input">
                <input type="text" id="MCHC" name="MCHC" value={cbc.MCHC} onChange={handleChange}  pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="M.C.H.C.." />
                <div className="ui basic label">
                  g/dl
                </div>
              </div>
            </div>
            <div className="column field myElement " >
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                31.5-34.5
              </div>
            </div>
            <div className="column field" style={{ fontSize: "15px " }} >
              <label htmlFor="RDWCV" >RBC Distribution Width -CV(RDW-CV)</label>
              <div className="ui right labeled input">
                <input type="text" id="RDWCV" name="RDWCV" value={cbc.RDWCV}  onChange={handleChange}  pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="RDW-CV value.." />
                <div className="ui basic label">
                  %
                </div>
              </div>
            </div>
            <div className="column field myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                11-16
              </div>
            </div>
          </div>
        </div>
        <div className=" my-5" style={{ numberAlign: "center" }}>
          <button className="ui button me-3" type="submit">Save</button>
          <button className="ui button ms-3" type="submit">Update</button>
        </div>
      </form>
    </div>
  )
}

export default CBC