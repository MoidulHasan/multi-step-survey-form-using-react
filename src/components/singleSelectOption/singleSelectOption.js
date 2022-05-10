import React from "react";
// import { From } from "react-bootstrap";
import './styles.css'

const SingleSelectOption = (props) => {
    let { lavel, selected } = props;
    return (
        <button className="option text-center border-0">
            <h5>{lavel}</h5>

            <i class="fa fa-circle-check"></i>
            <i class="fa-light fa-circle-check"></i>
            <i className="fa fa-angle-left fs-2 text-info fw-3" />
        </button>
    );
}

export default SingleSelectOption;