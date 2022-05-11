import React from "react";
import SingleSelectOption from "../../../components/singleSelectOption/singleSelectOption";

const Step3 = (props) => {

    const { handlechange, value } = props;


    const options = [
        'Female',
        'Male',
        'Other',
        'Prefer not to say',
    ];

    return (
        <div>
            <h1 className={`text-center`}>What is your job title?</h1>
            <div className={`container-fluid my-3`}>
                <div className="d-flex flex-wrap align-items-center justify-content-center px-5 mx-5" onChange={handlechange}>
                    {
                        options.map((option) => (
                            <SingleSelectOption name="gender" value={option} lavel={option} selected={value} />
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default Step3;