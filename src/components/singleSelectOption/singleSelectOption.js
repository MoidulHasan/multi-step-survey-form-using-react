import React from "react";
// import { From } from "react-bootstrap";
import './styles.css'
import { BsFillCheckCircleFill } from "react-icons/bs";
import Newsletter from '../../view/images/Newsletter.svg';
import ProductRecommandation from '../../view/images/Product recommendations.svg';
import InsightRecommendations from '../../view/images/Insight recommendations.svg';
import DashboardOnly from '../../view/images/Dashboard only.svg';

const SingleSelectOption = (props) => {
    let { name, value, lavel, selected } = props;

    let select = (selected === value) ? true : false;

    const col = name === 'gender' ? 'col-10 col-md-5' : 'col-10 col-md-3';
    // const imgsrc = './view/images/' + name + '.svg';
    let imgsrc;
    if (value === 'Newsletter') {
        imgsrc = Newsletter;
    }
    else if (value === 'Product recommendations') {
        imgsrc = ProductRecommandation;
    }
    else if (value === 'Insight recommendations') {
        imgsrc = InsightRecommendations;
    }
    else if (value === 'Dashboard only') {
        imgsrc = DashboardOnly;
    }
    console.log(imgsrc)

    if (imgsrc) {
        return (
            <label for={value} className="col-xs-12 col-sm-6 col-md-3  m-0 my-2 d-flex justify-content-center align-items-center">
                <div className="custom-card m-1">
                    <div className={`card  d-flex justify-content-center align-items-center text-center border-0 w-100 p-2`}>
                        <img className="card-img-top custom-img" src={imgsrc} alt={value} />
                        <div className="card-body">
                            <div className=" m-0 d-flex justify-content-center align-items-center fs-5">
                                {lavel} {select && <BsFillCheckCircleFill className={`text-info fs-3 position-absolute top-0 end-0 m-1`} />}
                            </div>
                            <input id={value} className={`radio-custom m-5`} type="radio" value={value} name={name} />
                        </div>
                    </div>
                </div>

            </label >

        );
    }
    else {
        return (
            <div className={`${col}   d-flex justify-content-center align-items-center text-center border-0`}>
                <label for={value} className="option m-0 d-flex justify-content-center align-items-center p-2 m-0 w-100 m-2">
                    {lavel} {select && <BsFillCheckCircleFill className={`text-info fs-3 position-absolute top-0 end-0 m-1`} />}
                </label>
                <input id={value} className={`radio-custom m-5`} type="radio" value={value} name={name} />
            </div>
        );
    }


};

export default SingleSelectOption;