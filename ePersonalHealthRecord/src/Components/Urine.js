import React from 'react'

const Urine = () => {
  return (
    <div className='ui container my-5'>
      <form className="ui large form">
        <h2 className="ui header">Urine Test</h2>
        <h4 className="ui dividing header">Physical Examination </h4>
        <div className="ui equal width grid">
          <div className="doubling four column row" >
            <div className="field column "  >
              <label htmlFor="urine-color">Urine Color</label>
              <input type="text" id="urine-color" name="urine-color" patten="[A-Za-z\-]{4,}" placeholder="Urine color..." />
            </div>
            <div className="field column">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                Pale-Yellow
              </div>
            </div>
            <div className="field column"  >
              <label htmlFor="urine-ph">Urine pH:</label>
              <select id="urine-ph" name="urine-ph" className='ui dropdown'>
                <option selected>Select ph value</option>
                <option value="1">Very acidic (pH {'<'} 5)</option>
                <option value="2">Slightly acidic (pH 5-6)</option>
                <option value="3">Neutral (pH 7)</option>
                <option value="4">Slightly alkaline (pH 8-9)</option>
                <option value="5">Very alkaline (pH {'>'} 9)</option>
              </select>

            </div>
            <div className="field column">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                Acidic/Alkaline
              </div>
            </div>
          </div>
          <div className="doubling four column row" >
            <div className="field column "  >
              <label htmlFor="gravity">Specific Gravity</label>
              <input type="number" id ="gravity" min="0.0" step="0.001" max="5.0 " name="gravity" placeholder="Specific gravity value..." />
            </div>
            <div className="field column">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                Pale-Yellow
              </div>
            </div>
            <div className="field column"  >
              <label htmlFor="appearance">Appearance:</label>
              <input type="text" name="appearance" placeholder="Appearance..." />
            </div>
            <div className="field column">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                clear
              </div>
            </div>
          </div>
          <h4 className="ui dividing header">Chemical Examination</h4>
          <div className="doubling four column row" >
            <div className="field column "  >
              <label htmlFor="albumin">Albumin:</label>
              <select id="albumin" name="albumin" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">traces</option>
                <option value="2">Nill</option>
              </select>
            </div>
            <div className="field column "  >
            <label htmlFor="sugar">Sugar</label>
              <select id="sugar" name="sugar" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Nill</option>
                <option value="2">Present</option>
              </select>
            </div>
            <div className="field column "  >
              <label htmlFor="acetone">Acetone</label>
              <select id="acetone" name="acetone" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
            <div className="field column "  >
              <label htmlFor="nitrate">Nitrate:</label>
              <select id="nitrate" name="nitrate" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
          </div>
          <div className="doubling four column row" >
          <div className="field column "  >
              <label htmlFor="keton bodies">Keton bodies:</label>
              <select id="keton bodies" name="keton bodies" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
            <div className="field column "  >
              <label htmlFor="urobilinogen">Urobilinogen:</label>
              <select id="urobilinogen" name="urobilinogen" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
            <div className="field column "  >
              <label htmlFor="bile-salt">Bile salt:</label>
              <select id="bile-salt" name="bile-salt" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
            <div className="field column "  >
              <label htmlFor="bile-pigments">Bile Pigments:</label>
              <select id="bile-pigments" name="bile-pigments" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
          </div>
          <h4 className="ui dividing header">Microsoft Examination</h4>
          <div className="doubling four column row" >
            <div className=" field column "  >
              <label htmlFor="WBC">W.B.C</label>
              <input type="number" id="WBC" name="WBC" min="0" max="20" step="0.1"  placeholder=" W.B.C..." />
            </div>
            <div className="field column">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                Male:2-3 & Female:5
              </div>
            </div>
            <div className="field column"  >
              <label htmlFor="pus-cells">Pus cells</label>
              <input type="text" id ="pus-cells" name="pus-cells" pattern="[0-9\-]{5}"  title="value will be 1-2" placeholder="Pus cells..." />

            </div>
            <div className="field column">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                0-1 cells/hpf
              </div>
            </div>
          </div>
          <div className="doubling four column row" >
            <div className="field column "  >
              <label htmlFor="rbc">R.B.C:</label>
              <select id="rbc" name="rbc" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
            <div className="field column "  >
              <label htmlFor="epithelial-cells">Epithelial-cells:</label>
              <select id="epithelial-cells" name="epithelial-cells" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
            <div className="field column "  >
              <label htmlFor="crystals">Crystals:</label>
              <select id="crystals" name="crystals" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
            <div className="field column "  >
              <label htmlFor="casts">Casts:</label>
              <select id="casts" name="casts" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Absent</option>
                <option value="2">Present</option>
              </select>
            </div>
          </div>
          
        </div>
        <div className=" ui center mt-4" style={{ numberAlign:"center"}}>
          <div className="ui button me-2" >Save</div>
          <div className="ui button  me-2" >Update</div>
        </div>
      </form>
    </div>
  )
}

export default Urine