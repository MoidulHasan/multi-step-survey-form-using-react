import React from "react";
import { ProgressBar } from "react-bootstrap";
import './styles.css';

const Progress = (props) => {
    console.log(props);
    return (
        <div className="d-flex justify-content-center">
            <div className="pt-5">
                <ProgressBar className="bar" variant="info" now={props.now} />
            </div>
        </div >
    );
};

export default Progress;