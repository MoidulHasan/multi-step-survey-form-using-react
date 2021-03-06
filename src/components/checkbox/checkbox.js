import React from "react";
// import { From } from "react-bootstrap";
import './styles.css'
import { BsFillCheckCircleFill, BsCircle } from "react-icons/bs";

const Checkbox = (props) => {
    let { name, value, lavel, selected } = props;
    console.log(selected);

    let select = selected.indexOf(value) === -1 ? false : true;

    const icon = selected.indexOf(value) === -1 ? '<BsCircle className={`text-info fs-3 position-absolute end-0 m-1`} />' : '<BsFillCheckCircleFill className={`text-info fs-3 position-absolute end-0 m-1`} />'

    // BsCircle

    return (
        <div className={`col-10 col-md-5  d-flex justify-content-center align-items-center text-center border-0`}>
            <label for={value} className="option m-0 d-flex justify-content-center align-items-center p-2 m-0 w-100 m-2">{lavel} {select && <BsFillCheckCircleFill className={`text-info fs-3 position-absolute end-0 m-1`} />} {!select && <BsCircle className={`text-info fs-3 position-absolute end-0 m-1`} />} </label>
            <input id={value} className={`checkbox-custom m-5`} type="checkbox" value={value} name={name} />
        </div>
    );
};

export default Checkbox;