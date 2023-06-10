import React from 'react'

const OtherTest = () => {
  return (
    <div className='ui container my-5 '>
      <form className="ui form">
        <h2 className="ui dividing header">Other Test Report</h2>
        <h3 className='ui dividing header '>Serum Test</h3>
        <div className="ui grid">
          <div className="doubling four column row">
            <div className="field column ">
              <label htmlFor='serum-urea'>Serum Urea:</label>
              <div className="ui right labeled input">
                <input type="text" id="serum-urea" name="serum-urea" min="0" max="100" step="0.1" placeholder="Serum-urea" />
                <div className="ui basic label px-1">
                  mg/dl
                </div>
              </div>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>15-45</h5>
              </div>
            </div>
            <div className="field column "  >
              <label htmlFor='serum-sodium'>Serum Sodium:</label>
              <div className="ui right labeled input">
                <input type="text" id="serum-sodium" name="serum-sodium" min="0" max="250" step="0.1" placeholder="Enter a value" />
                <div className="ui basic label px-1">
                  mEq/L
                </div>
              </div>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>136-145</h5>
              </div>
            </div>
          </div>
          <div className="doubling four column row">
            <div className="field column "  >
              <label htmlFor='serum-potassium'>Serum Potassium:</label>
              <div className="ui right labeled input">
                <input type="text" id="serum-potassium" name="serum-potassium" min="0" max="50" step="0.1" placeholder="Enter a value" />
                <div className="ui basic label px-1">
                  mEq/L
                </div>
              </div>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>3.50- 5.00</h5>
              </div>
            </div>
            <div className="field column "  >
              <label htmlFor='serum-uric-acid'>Serum Uric Acid:</label>
              <div className="ui right labeled input">
                <input type="text" id="serum-uric-acid" name="serum uric-acid" min="0" max="50" step="0.1" placeholder="Enter a value" />
                <div className="ui basic label px-1">
                  mg/dl
                </div>
              </div>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>2.6-6.0</h5>
              </div>
            </div>
          </div>
          <div className="doubling two column row">
            <div className=" six wide tablet six wide computer column field  "  >
              <label htmlFor='eGFR' >Estimated Glomerular Filtration Rate(eGFR):</label>
              <input type="text" id="eGFR" name="eGFR" placeholder="eGFR ..." />
            </div>
            <div className=" six wide tablet six wide computer column field  ">
              <label htmlFor='technolgy'>Technology Name</label>
              <input type="text" id="technolgy" name="technology" placeholder="Technology Name..." />
            </div>
          </div>
          <h4 className='ui dividing header '>Typhoid Test  </h4>
          <div className="doubling four column row">
            <div className="field column "  >
              <label htmlFor='typhoid-igm'>Typhoid IGM:</label>
              <select id="typhoid-igm" name="typhoid-igm" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Negative </option>
                <option value="2">Positive</option>
              </select>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>Negative</h5>
              </div>
            </div>
            <div className="field column "  >
              <label htmlFor='typhoid-igg'>Typhoid IGG:</label>
              <select id="typhoid-ig" name="typhoid-ig" className='ui dropdown'>
                <option selected>Select value</option>
                <option value="1">Negative </option>
                <option value="2">Positive</option>
              </select>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>Negative</h5>
              </div>
            </div>
          </div>
          <div className="stackable one column row">
            <div className="eight wide tablet six wide computer  field column">
              <label htmlFor='technolgy'>Technology Name</label>
              <input type="text" id="technolgy" name="technology" placeholder="Technology Name.." />
            </div>
          </div>
          <h4 className='ui dividing header '>Serum Test</h4>
          <div className="doubling four column row">
            <div className="field column "  >
              <label htmlFor='t3'>Total Triodothyronine(T3)</label>
              <div className="ui right labeled input">
                <input type="text" id="t3" name="t3" dmin="0" max="100" step="0.1" placeholder="Total T3..." />
                <div className="ui basic label px-1">
                  ng/dl
                </div>
              </div>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>15-45</h5>
              </div>
            </div>
            <div className="field column "  >
              <label htmlFor='t4'>Total Thyroxine(T4)</label>
              <div className="ui right labeled input">
                <input type="number" id="t4" name="serum sodium" dmin="0" max="30" step="0.1" placeholder="Enter a value" />
                <div className="ui basic label px-1">
                  μg/dl
                </div>
              </div>
            </div>
            <div className="field column myElement">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>4.5-12</h5>
              </div>
            </div>
          </div>
          <div className="doubling three column row">
            <div className="field column "  >
              <label htmlFor='tsh'>Tyhroid Stimulating Harmone(TSH)</label>
              <div className="ui right labeled input">
                <input type="text" id="tsh" name="tsh" min="0" max="20" step="0.1" placeholder="Value of TSH.." />
                <div className="ui basic label px-1">
                  μg/dl
                </div>
              </div>
            </div>
            <div className="two wide computer field column myElement ">
              <label>Ref. Range</label>
              <div className="ui large label mt-1">
                <h5>0.35-4.5</h5>
              </div>
            </div>
            <div className=" field column">
              <label htmlFor='technolgy'>Technology Name</label>
              <input type="text" id="technolgy" name="technology" placeholder="Technology name..." />
            </div>
          </div>

        </div>
        <div className=" my-5" style={{ textAlign: "center" }}>
          <button className="ui button me-3" type="submit">Save</button>
          <button className="ui button ms-3" type="submit">Update</button>
        </div>
      </form>
    </div>
  )
}

export default OtherTest