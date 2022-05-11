import React from "react";
import SingleSelectOption from "../../../components/singleSelectOption/singleSelectOption";

const Step1 = (props) => {
    const { handlechange, value } = props;

    const options = [
        'Advanced manufacturing',
        'Advanced technologies',
        'Agribusiness & food',
        'Arts, culture & creative',
        'Cyber security',
        'Defence',
        'Education',
        'Financial & professional services',
        'Infrastructure & construction',
        'Medical technology',
        'Mining & resources',
        'Renewable energy & sustainability',
        'Retail services',
        'Space',
        'Tourism',
        'Other'
    ];

    return (
        <div>
            <h1 className={`text-center`}>What industry is your business?</h1>
            <div className={`container-fluid my-3`}>
                <div className="d-flex flex-wrap align-items-center justify-content-center px-5 mx-md-5" onChange={handlechange}>
                    {
                        options.map((option) => (
                            <SingleSelectOption name="business-industry" value={option} lavel={option} selected={value} />
                        ))
                    }
                </div>
            </div>
        </div >

    );
};

export default Step1;