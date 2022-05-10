import React from "react";
// import { From } from "react-bootstrap";
import './styles.css'
import { BsFillCheckCircleFill } from "react-icons/bs";

const SingleSelectOption = (props) => {
    let { name, value, lavel, selected } = props;

    let select = (selected === value) ? true : false;
    console.log(select);

    return (
        <div className={`col-5 col-md-3 d-flex justify-content-center align-items-center text-center border-0 my-3`}>
            <label for={value} className="option m-0 d-flex justify-content-center align-items-center">{lavel} {select && <BsFillCheckCircleFill className={`text-info fs-3 position-absolute top-0 end-0 m-1`} />} </label>
            <input id={value} className={`radio-custom m-5`} type="radio" value={value} name={name} />
        </div>
    );
};

export default SingleSelectOption;