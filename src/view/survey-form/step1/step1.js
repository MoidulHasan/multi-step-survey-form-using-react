import React, { useState } from "react";
import SingleSelectOption from "../../../components/singleSelectOption/singleSelectOption";
import { Form } from "react-bootstrap";

const Step1 = () => {
    const onChangeValue = (event) => {
        console.log(event.target.value);
        SetbusinessIndustry(event.target.value);
    }

    const [businessIndustry, SetbusinessIndustry] = useState('Defence');

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
            <div className="d-flex flex-wrap align-items-center justify-content-center px-5 mx-5" onChange={onChangeValue}>
                {
                    options.map((option) => (
                        <SingleSelectOption name="business-industry" value={option} lavel={option} selected={businessIndustry} />
                    ))
                }
            </div>
        </div>

    );
};

export default Step1;