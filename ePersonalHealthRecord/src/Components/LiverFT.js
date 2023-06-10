import React from 'react'


const LiverFT = () => {

    return (
        <div className=" ui container mt-5">
            <form className="ui form large" >
                <h2 className="ui dividing header">Liver Function Test</h2>
                <div className="ui equal width grid">
                    <div className="doubling four column row">
                        <div className="  column field pe-0 ">
                            <label htmlFor='bTotal'> Bilirubin Total:</label>
                            <div className="ui right labeled input">
                                <input type="text" id="bTotal" name="bTotal" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
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
                            <label htmlFor='bDirect'> Bilirubin Direct:</label>
                            <div className="ui right labeled input">
                                <input type="text" id="bDirect" name="bDirect" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
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
                    <div className="doubling four column row">
                        <div className=" column field pe-0 ">
                            <label htmlFor='bIndirect'> Bilirubin Indirect:</label>
                            <div className="ui right labeled input">
                                <input type="text" id="bIndirect" name="bIndirect" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
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
                            <label htmlFor='ALT'> SGPT(ALT):</label>
                            <div className="ui right labeled input">
                                <input type="text" id="ALT" name="ALT" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
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
                    <div className="doubling four column row">
                        <div className=" column field pe-0 ">
                            <label htmlFor='AST'> SGOT(AST):</label>
                            <div className="ui right labeled input">
                                <input type="text" id="AST" name="AST" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
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
                            <label htmlFor='alk-phos'> Alkaline Phosphates:</label>
                            <div className="ui right labeled input">
                                <input type="text" id="alk-phos" name="alk-phos" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
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
                    <div className="doubling four column row">
                        <div className="column field pe-0 ">
                            <label htmlFor='tProteins'> Toatal Proteins:</label>
                            <div className="ui right labeled input">
                                <input type="text" id="tProteins" name="tProteins" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
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
                                <input type="text" id="albumin" name="albumin" pattern="[0-9]+(\.[0-9]+)?" title="Enter correct value" placeholder="Enter a value" />
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