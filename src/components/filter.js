import React from 'react';
import './filter.css';

const Filter = () => {
    return (
        <div >
            <br></br>

            <form>

                <div className="form-row align-items-center filterContainer" style={{ marginLeft: "5%" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <label className="mr-sm-2" >Length</label>

                            <input type="number" className="form-control form-control-sm" style={{ width: '5em' }} />
                        </div>

                        <div className="col-md-4">
                            <p style={{ fontSize: '20px' , marginTop:'1em'}}>cm</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label className="mr-sm-2" >Shoulder</label>

                            <input type="number" className="form-control form-control-sm" style={{ width: '5em' }} />
                        </div>

                        <div className="col-md-4">
                            <p style={{ fontSize: '20px' , marginTop:'1em'}}>cm</p>
                        </div>
                    </div><div className="row">
                        <div className="col-md-4">
                            <label className="mr-sm-2" >Chest</label>

                            <input type="number" className="form-control form-control-sm" style={{ width: '5em' }} />
                        </div>

                        <div className="col-md-4">
                            <p style={{ fontSize: '20px' , marginTop:'1em'}}>cm</p>
                        </div>
                    </div><div className="row">
                        <div className="col-md-4">
                            <label className="mr-sm-2" >Weight</label>

                            <input type="number" className="form-control form-control-sm" style={{ width: '5em' }} />
                        </div>

                        <div className="col-md-4">
                            <p style={{ fontSize: '20px' , marginTop:'1em'}}>cm</p>
                        </div>
                    </div><div className="row">
                        <div className="col-md-4">
                            <label className="mr-sm-2" >Arm</label>

                            <input type="number" className="form-control form-control-sm" style={{ width: '5em' }} />
                        </div>

                        <div className="col-md-4">
                            <p style={{ fontSize: '20px' , marginTop:'1em'}}>cm</p>
                        </div>
                    </div>
                    <div className="col-auto my-1">
                        <div className="custom-control custom-checkbox mr-sm-2">
                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                            <label className="custom-control-label" for="customControlAutosizing">Remember my preference</label>
                        </div>
                    </div>
                    <div className="col-auto my-1">
                        <button type="submit" className="btn btn-primary" style={{ width: '5em' }} >Filter</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Filter;
