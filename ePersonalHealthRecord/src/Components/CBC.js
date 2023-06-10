import React from 'react';
import "../CSS/CBC.css";

const CBC = () => {

  return (
    <div className='ui container  my-5'>
      <form className="ui form">
        <h2 className="ui dividing header">Complete blood count</h2>
        <div className="ui equal width grid">
          <div className="doubling four column row" >
            <div className="column field "  >
              <label htmlFor="haemoglobin" >Haemoglobin</label>
              <div className="ui right labeled input">
                <input type="text" id="haemoglobin" name="haemoglobin" pattern="^(?!0\d)(\d{1,2}|100)(\.\d{1,2})?$" title="Enter a decimal value between 1 and 100 (up to 2 decimal places)" placeholder="Haemoglobin" />
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
              <label htmlFor="WBC" >Total W.B.C Count</label>
              <div className="ui right labeled input">
                <input type="text" id="bTotal" name="bTotal" pattern="^([1-9]\d{3,3}|1\d{4}|20000)$" title="Enter a value between 1000 and 20000" placeholder="Enter a value" />
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
          <h4 className="ui dividing header">W.B.C Differential</h4>
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="neutrophils" >Neutrophils</label>
              <div className="ui right labeled input">
                <input type="text" id="neutrophils" name="neutrophils" pattern="^(100|[1-9][0-9]?)"  title="Enter a value between 1 and 100" placeholder="neutrophils" />
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
                <input type="text" id="lymphocytes" name="lymphocytes" pattern="^(100|[1-9][0-9]?)" title="Enter a value between 1 and 100" placeholder="lymphocytes" />
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
                <input type="text" id="monocytes" name="monocytes" pattern="^(100|[1-9][0-9]?)" title="Enter a value between 1 and 100" placeholder="monocytes" />
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
                <input type="text" id="eosinophils" name="eosinophils" pattern="^(100|[0-9][0-9]?)" title="Enter a value between 0 and 100" placeholder="eosinophils" />
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
          <h4 className="ui dividing header">W.B.C Absolute Values</h4>
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="ACN" >Absolute Neutrophils Count (ACN)</label>
              <div className="ui right labeled input">
                <input type="text" id="ACN" name="ACN" pattern="^(100|[1-9][0-9]?)"  title="Enter a value between 1 and 100" placeholder="ACN" />
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
              <label htmlFor="ALC" >Absolute Lymphocytes Count(ALC)</label>
              <div className="ui right labeled input">
                <input type="text" id="ALC" name="ALC" pattern="^(100|[1-9][0-9]?)"  title="Enter a value between 1 and 100 " placeholder="ALC" />
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
              <label htmlFor="AMC" >Absolute Monocytes count (AMC)</label>
              <div className="ui right labeled input">
                <input type="text" id="AMC" name="AMC" pattern="^(0\.[1-9]\d?|[1-9](\.\d{1,2})?|10(\.00)?)$" title="Enter a number between 0.01 and 10.00" min="0.01" max="10.00" placeholder="AMC" />
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
              <label htmlFor="AEC" >Absolute Eosinophils count(AEC)</label>
              <div className="ui right labeled input">
                <input type="text" id="AEC" name="AEC" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="AEC" />
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
          <h4 className="ui dividing header">Platelet Count</h4>
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="plateletCount" >Platelet Count</label>
              <div className="ui right labeled input">
                <input type="text" id="plateletCount" name="plateletCount" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Platelet Count " />
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
                <input type="text" id="RBCCount" name="RBCCount" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="RBC count.." />
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
          <h4 className="ui dividing header">Blodd Cell Indices</h4>
          <div className=" doubling four column row">
            <div className="column field "  >
              <label htmlFor="MCV" >M.C.V</label>
              <div className="ui right labeled input">
                <input type="text" id="MCV" name="MCV" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="M.C.V values.." />
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
                <input type="text" id="MCH" name="MCH" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="M.C.H values" />

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
          <div className=" doubling four column row">
            <div className=" column field " >
              <label htmlFor="MCHC" >M.C.H.C.</label>
              <div className="ui right labeled input">
                <input type="text" id="MCHC" name="MCHC" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="M.C.H.C.." />
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
            <div className="column field  " style={{ fontSize: "15px " }} >
              <label htmlFor="RDWCV" >RBC Distribution Width -CV(RDW-CV)</label>
              <div className="ui right labeled input">
                <input type="text" id="RDWCV" name="RDWCV" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="RDW-CV value.." />

                <div className="ui basic label">
                  %
                </div>
              </div>
            </div>
            <div className="column field myElement ">
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