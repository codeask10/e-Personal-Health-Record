import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Urine = () => {

  const [urine, setUrine] = useState({ urineColor: "", PHLevel: "", gravity: "", appearance: "", albumin: "", sugar: "", acetone: "", nitrate: "", keton: "", urobilinogen: "", bileSalt: "", bilePigments: "", WBC: "", pusCells: "", RBC: "", epithelialCells: "", crystals: "", casts: "" });
  const navigate = useNavigate();


  const submit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      const response = await fetch("http://localhost:5001/api/urine/addData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          urineColor: urine.urineColor, PHLevel: urine.PHLevel, gravity: urine.gravity, appearance: urine.appearance, albumin: urine.albumin, sugar: urine.sugar, acetone: urine.acetone, nitrate: urine.nitrate, keton: urine.keton, urobilinogen: urine.urobilinogen, bileSalt: urine.bileSalt, bilePigments: urine.bilePigments, WBC: urine.WBC, pusCells: urine.pusCells, RBC: urine.pusCells, epithelialCells: urine.epithelialCells, crystals: urine.crystals, casts: urine.casts
        })
      });
      // eslint-disable-next-line 
      const json = await response.json();
      console.log(json);
    }
    else {
      navigate('/Login')
    }
  }
  const handleChange = (e) => {
    setUrine({ ...urine, [e.target.name]: e.target.value });
  }
  return (
    <div className='ui container my-5'>
      <form className="ui  form" onSubmit={submit}>
        <h2 className="ui header">Urine Test</h2>
        <h4 className="ui dividing header">Physical Examination </h4>

        <div className="ui stackable equal width grid" >
          <div className="field column "  >
            <label htmlFor="urineColor">Urine Color</label>
            <input type="text" id="urineColor" name="urineColor" onChange={handleChange} patten="[A-Za-z\-]{3,}" placeholder="Urine color..." value={urine.urineColor} />
          </div>
          <div className="field column">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              Pale-Yellow
            </div>
          </div>
          <div className="field column"  >
            <label htmlFor="PHLevel"> PH Level :</label>
            <select id="PHLevel" name="PHLevel" className='ui dropdown' onChange={handleChange} placeholder="Select PH level" value={urine.PHLevel}>
              <option value="" disabled>Select pH value</option>
              <option value="Very acidic (PH < 5)">Very acidic (pH {'<'} 5)</option>
              <option value="Slightly acidic (PH 5-6)">Slightly acidic (pH 5-6)</option>
              <option value="Neutral (pH 7)">Neutral (pH 7)</option>
              <option value="Slightly alkaline (pH 8-9)">Slightly alkaline (pH 8-9)</option>
              <option value="Very alkaline (pH > 9)">Very alkaline (pH {'>'} 9)</option>
            </select>
          </div>
          <div className="field column">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              Acidic/Alkaline
            </div>
          </div>
        </div>
        <div className="ui stackable equal width grid" >
          <div className="field column "  >
            <label htmlFor="gravity">Specific Gravity</label>
            <input type="text" id="gravity" name="gravity" onChange={handleChange} value={urine.gravity} placeholder="Specific gravity value..." />
          </div>
          <div className="field column">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              Pale-Yellow
            </div>
          </div>
          <div className="field column"  >
            <label htmlFor="appearance">Appearance:</label>
            <input type="text" name="appearance" onChange={handleChange} value={urine.appearance} placeholder="Appearance..." />
          </div>
          <div className="field column">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              clear
            </div>
          </div>
        </div>
        <h4 className="ui dividing header">Chemical Examination</h4>
        <div className="ui stackable equal width grid" >
          <div className="field column "  >
            <label htmlFor="albumin">Albumin:</label>
            <select id="albumin" name="albumin" onChange={handleChange} value={urine.albumin} className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="traces">traces</option>
              <option value="Nill">Nill</option>
            </select>
          </div>
          <div className="field column "  >
            <label htmlFor="sugar">Sugar</label>
            <select id="sugar" name="sugar" onChange={handleChange} value={urine.sugar} className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Nill">Nill</option>
              <option value="Present">Present</option>
            </select>
          </div>
          <div className="field column "  >
            <label htmlFor="acetone">Acetone</label>
            <select id="acetone" name="acetone" onChange={handleChange} value={urine.acetone} className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
          </div>
          <div className="field column "  >
            <label htmlFor="nitrate">Nitrate:</label>
            <select id="nitrate" name="nitrate" onChange={handleChange} value={urine.nitrate} className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
          </div>
        </div>
        <div className="ui stackable equal width grid" >
          <div className="field column "  >
            <label htmlFor="keton ">Keton bodies:</label>
            <select id="keton" name="keton" onChange={handleChange} value={urine.keton} className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
          </div>
          <div className="field column "  >
            <label htmlFor="urobilinogen">Urobilinogen:</label>
            <select id="urobilinogen" name="urobilinogen" onChange={handleChange} value={urine.urobilinogen} className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
          </div>
          <div className="field column "  >
            <label htmlFor="bileSalt">Bile salt:</label>
            <select id="bileSalt" name="bileSalt" onChange={handleChange} value={urine.bileSalt} className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
          </div>
          <div className="field column "  >
            <label htmlFor="bilePigments">Bile Pigments:</label>
            <select id="bilePigments" name="bilePigments" onChange={handleChange} value={urine.bilePigments} className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
          </div>
        </div>
        <h4 className="ui dividing header">Microsoft Examination</h4>
        <div className="ui stackable equal width grid" >
          <div className=" field column "  >
            <label htmlFor="WBC">W.B.C</label>
            <input type="text" id="WBC" name="WBC" onChange={handleChange} urine={urine.WBC} placeholder=" W.B.C..." />
          </div>
          <div className="field column">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              Male:2-3 & Female:5
            </div>
          </div>
          <div className="field column"  >
            <label htmlFor="pusCells">Pus cells</label>
            <input type="text" id="pusCells" name="pusCells" onChange={handleChange} value={urine.pusCells} placeholder="Pus cells..." />

          </div>
          <div className="field column">
            <label>Ref. Range</label>
            <div className="ui large label mt-1">
              0-1 cells/hpf
            </div>
          </div>
        </div>
        <div className="ui stackable equal width grid" >
          <div className="field column "  >
            <label htmlFor="RBC">R.B.C:</label>
            <select id="RBC" name="RBC" onChange={handleChange} value={urine.RBC} className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
          </div>
          <div className="field column "  >
            <label htmlFor="epithelialCells">Epithelial-cells:</label>
            <select id="epithelialCells" onChange={handleChange} value={urine.epithelialCells} name="epithelialCells" className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
          </div>
          <div className="field column "  >
            <label htmlFor="crystals">Crystals:</label>
            <select id="crystals" onChange={handleChange} value={urine.crystals} name="crystals" className='ui dropdown'>
              <option value="" disabled>Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
          </div>
          <div className="field column "  >
            <label htmlFor="casts">Casts:</label>
            <select id="casts" onChange={handleChange} value={urine.casts} name="casts" className='ui dropdown'>
              <option value="" disabled >Select value</option>
              <option value="Absent">Absent</option>
              <option value="Present">Present</option>
            </select>
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

export default Urine