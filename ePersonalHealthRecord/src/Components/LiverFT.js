import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LiverFTContext from '../Context/LiverFunction/LiverFTContext'


const LiverFT = ({setProgress}) => {
    const [liverTest, setLiverTest] = useState({ bilirubinTotal: "", bilirubinDirect: "", bilirubinIndirect: "", sgptALT: "", sgotAST: "", alkalinePhosphates: "", toatalProteins: "", albumin: "" })
    const navigate = useNavigate();

    const context= useContext(LiverFTContext);
    const {LFTData, getLFTData, addLFTData}=context;

    useEffect(()=>{
        if(localStorage.getItem('token')){
            getLFTData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(()=>{
        setProgress(100);
        if(LFTData.length>0){
            setLiverTest({
                bilirubinTotal: LFTData[0].bilirubinTotal,
                bilirubinDirect: LFTData[0].bilirubinDirect,
                bilirubinIndirect: LFTData[0].bilirubinIndirect,
                sgptALT: LFTData[0].sgptALT,
                sgotAST: LFTData[0].sgotAST,
                alkalinePhosphates: LFTData[0].alkalinePhosphates,
                toatalProteins: LFTData[0].toatalProteins,
                albumin: LFTData[0].albumin
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[LFTData]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setProgress(10)
        if (localStorage.getItem('token')) {
            addLFTData(liverTest);
            setProgress(50)
        }
        else {
            navigate('/Login');
        }
        setProgress(100);
    }
    const handleChange = (e) => {
        setLiverTest({ ...liverTest, [e.target.name]: e.target.value })
    }

    return (
        <div className=" ui container mt-5">
            <form className="ui form large" onSubmit={onSubmit} >
                <h2 className="ui dividing header">Liver Function Test</h2>
                <div className="ui stackable equal width grid">
                    <div className="  column field pe-0 ">
                        <label htmlFor='bilirubinTotal'> Bilirubin Total:</label>
                        <div className="ui right labeled input">
                            <input type="text" id="bilirubinTotal" name="bilirubinTotal" value={liverTest.bilirubinTotal} onChange={handleChange} pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
                            <div className="ui basic label px-1">
                                mG/dL
                            </div>
                        </div>
                    </div>
                    <div className="column field " style={{ paddingLeft: "60px" }} >
                        <label>Ref. Range</label>
                        <div className="ui large label mt-1">
                            <h5>0.2-1.1</h5>
                        </div>
                    </div>
                    <div className="  column field pe-0 ">
                        <label htmlFor='bilirubinDirect'> Bilirubin Direct:</label>
                        <div className="ui right labeled input">
                            <input type="text" id="bilirubinDirect" name="bilirubinDirect" value={liverTest.bilirubinDirect} onChange={handleChange} pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
                            <div className="ui basic label px-1">
                                mG/dL
                            </div>
                        </div>
                    </div>
                    <div className="column field " style={{ paddingLeft: "60px" }} >
                        <label>Ref. Range</label>
                        <div className="ui large label mt-1">
                            <h5>0.1-0.70</h5>
                        </div>
                    </div>
                </div>
                <div className="ui stackable equal width grid">
                    <div className=" column field pe-0 ">
                        <label htmlFor='bilirubinIndirect'> Bilirubin Indirect:</label>
                        <div className="ui right labeled input">
                            <input type="text" id="bilirubinIndirect" name="bilirubinIndirect" value={liverTest.bilirubinIndirect} onChange={handleChange} pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
                            <div className="ui basic label px-1">
                                mG/dL
                            </div>
                        </div>
                    </div>
                    <div className="column field " style={{ paddingLeft: "60px" }} >
                        <label>Ref. Range</label>
                        <div className="ui large label mt-1">
                            <h5>0.1-0.40</h5>
                        </div>
                    </div>
                    <div className="column field pe-0 ">
                        <label htmlFor='sgptALT'> SGPT(ALT):</label>
                        <div className="ui right labeled input">
                            <input type="text" id="sgptALT" name="sgptALT" value={liverTest.sgptALT} onChange={handleChange} pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
                            <div className="ui basic label px-1">
                                IU/L
                            </div>
                        </div>
                    </div>
                    <div className="column field " style={{ paddingLeft: "60px" }} >
                        <label>Ref. Range</label>
                        <div className="ui large label mt-1">
                            <h5>5-41</h5>
                        </div>
                    </div>
                </div>
                <div className="ui stackable equal width grid">
                    <div className=" column field pe-0 ">
                        <label htmlFor='sgotAST'> SGOT(AST):</label>
                        <div className="ui right labeled input">
                            <input type="text" id="sgotAST" name="sgotAST" value={liverTest.sgotAST} onChange={handleChange} pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
                            <div className="ui basic label px-1">
                                IU/L
                            </div>
                        </div>
                    </div>
                    <div className="column field " style={{ paddingLeft: "60px" }} >
                        <label>Ref. Range</label>
                        <div className="ui large label mt-1">
                            <h5>5-37</h5>
                        </div>
                    </div>
                    <div className="column field pe-0 ">
                        <label htmlFor='alkalinePhosphates'> Alkaline Phosphates:</label>
                        <div className="ui right labeled input">
                            <input type="text" id="alkalinePhosphates" name="alkalinePhosphates" value={liverTest.alkalinePhosphates} onChange={handleChange} pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
                            <div className="ui basic label px-1">
                                U/L
                            </div>
                        </div>
                    </div>
                    <div className="column field " style={{ paddingLeft: "60px" }} >
                        <label>Ref. Range</label>
                        <div className="ui large label mt-1">
                            <h5>65-306</h5>
                        </div>
                    </div>
                </div>
                <div className="ui stackable equal width grid">
                    <div className="column field pe-0 ">
                        <label htmlFor='toatalProteins'> Toatal Proteins:</label>
                        <div className="ui right labeled input">
                            <input type="text" id="toatalProteins" name="toatalProteins" value={liverTest.toatalProteins} onChange={handleChange} pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
                            <div className="ui basic label px-1">
                                G/dL
                            </div>
                        </div>
                    </div>
                    <div className="column field ref" style={{ paddingLeft: "60px" }}>
                        <label>Ref. Range</label>
                        <div className="ui large label mt-1">
                            <h5>6.4-8.3</h5>
                        </div>
                    </div>
                    <div className="column field pe-0 ">
                        <label htmlFor='albumin'> Albumin:</label>
                        <div className="ui right labeled input">
                            <input type="text" id="albumin" name="albumin" value={liverTest.albumin} onChange={handleChange} pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
                            <div className="ui basic label px-1">
                                G/dL
                            </div>
                        </div>
                    </div>
                    <div className="column field " style={{ paddingLeft: "60px" }} >
                        <label>Ref. Range</label>
                        <div className="ui large label mt-1">
                            <h5>3.4-5</h5>
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

export default LiverFT