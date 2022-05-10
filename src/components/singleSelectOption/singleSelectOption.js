import React from "react";
// import { From } from "react-bootstrap";
import './styles.css'
import { BsFillCheckCircleFill } from "react-icons/bs";

const SingleSelectOption = (props) => {
    let { name, value, lavel, selected } = props;

    let select = (selected === value) ? true : false;

    const col = name === 'gender' ? 'col-10 col-md-5' : 'col-10 col-md-3';

    return (
        <div className={`${col}   d-flex justify-content-center align-items-center text-center border-0`}>
            <label for={value} className="option m-0 d-flex justify-content-center align-items-center p-2 m-0 w-100 m-2">{lavel} {select && <BsFillCheckCircleFill className={`text-info fs-3 position-absolute top-0 end-0 m-1`} />} </label>
            <input id={value} className={`radio-custom m-5`} type="radio" value={value} name={name} />
        </div>
    );
};

export default SingleSelectOption;