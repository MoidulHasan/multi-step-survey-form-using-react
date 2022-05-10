import React from "react";
import './styles.css';


const PageNavigator = (props) => {
    let { page } = props;
    let nextBtn;
    if (page !== 7) {
        nextBtn = <button className="btn btn-info px-4 border-0 text-light ms-2 fs-3">
            Next
        </button>
    }
    else if (page === 7) {
        nextBtn = <button className="btn btn-info px-4 border-0 text-light ms-2 fs-3">
            View Dashboard
        </button>
    }

    return (
        <div className="d-flex justify-content-center pt-5">
            <button className="btn btn-light px-4 border">
                <i className="fa fa-angle-left fs-2 text-info fw-3" />
            </button>
            {nextBtn}
        </div>
    );
};

export default PageNavigator;