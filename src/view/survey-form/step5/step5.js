import React from "react";
import Checkbox from "../../../components/checkbox/checkbox";

const Step5 = (props) => {
    const { handlechange, value } = props;

    const options = [
        'Relevant job profiles & impacts',
        'Technological impacts',
        'Creating job opportunities',
        'Youth employment',
        'Gender impacts',
        'Career pathways',
        'Locational opportunities',
        'Staff augmentation'
    ];

    return (
        <div>
            <h1 className={`text-center`}>What insights are you interested in?</h1>
            <h4 className={`text-center`}>You can select a few:</h4>
            <div className={`container-fluid my-3`}>
                <div className="d-flex flex-wrap align-items-center justify-content-center px-5 mx-md-5" onChange={handlechange}>
                    {
                        options.map((option) => (
                            <Checkbox name="interest" value={option} lavel={option} selected={value} />
                        ))
                    }
                </div>
            </div>
        </div >

    );
};

export default Step5;