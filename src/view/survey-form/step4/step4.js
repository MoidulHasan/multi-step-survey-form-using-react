import React from "react";
import SingleSelectOption from "../../../components/singleSelectOption/singleSelectOption";

const Step3 = (props) => {

    const { handlechange, value } = props;


    const options = [
        '17 or younger',
        '18-20',
        '21-29',
        '30-39',
        '40-49',
        '50-59',
        '60 or older'
    ];

    return (
        <div>
            <h1 className={`text-center`}>What is your age range?</h1>
            <div className={`container-fluid my-3`}>
                <div className="d-flex flex-wrap align-items-center justify-content-center px-5 mx-5" onChange={handlechange}>
                    {
                        options.map((option) => (
                            <SingleSelectOption name="age" value={option} lavel={option} selected={value} />
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default Step3; 