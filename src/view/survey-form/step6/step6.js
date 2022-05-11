import React from "react";
import SingleSelectOption from "../../../components/singleSelectOption/singleSelectOption";

const Step6 = (props) => {
    const { handlechange, value } = props;

    const options = [
        'Newsletter',
        'Product recommendations',
        'Insight recommendations',
        'Dashboard only'
    ];

    return (
        <div>
            <h1 className={`text-center`}>How would you like to learn about these topics?</h1>
            <div className={`container-fluid my-3`}>
                <div className="p-2 d-flex flex-wrap align-items-center justify-content-center px-5 mx-md-5" onChange={handlechange}>
                    {
                        options.map((option) => (
                            <SingleSelectOption name="learning-method" value={option} lavel={option} selected={value} />
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default Step6;