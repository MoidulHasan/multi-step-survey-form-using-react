import React from "react";
import './styles.css';


const PageNavigator = (props) => {
    console.log(props);
    let { page, next, back } = props;
    let nextBtn;
    if (page !== 7) {
        nextBtn = "Next";
    }
    else if (page === 7) {
        nextBtn = "View Dashboard";
    }

    return (
        <div className="d-flex justify-content-center pt-0">
            <button onClick={back} className="btn btn-light px-4 border">
                <i className="fa fa-angle-left fs-2 text-info fw-3" />
            </button>
            <button onClick={next} className="btn btn-info px-4 border-0 text-light ms-2 fs-3">
                {nextBtn}
            </button>

        </div >
    );
};

export default PageNavigator;