/**
 * Title: survey form
 * Description: this page binds the survey form
 */

// dependencies
import React, { useState } from "react";
// import Footer from "../../components/footer/footer";
// import PageNavigator from "../../components/pageNavigator/pageNavigator";
import Progress from "../../components/progressbar/progressbar";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import Step5 from "./step5/step5";
import Step6 from "./step6/step6";
import wave from '../images/Faethm footer wave 2.svg';

import formStyle from './styles.module.css';
import SurveyIntro from "../survey-intro/survey-intro";
import Summery from "./summery/summery";


const SurveyForm = () => {

    const [progress, Setprogress] = useState(0);
    const [step, Setstep] = useState(0);
    const [businessIndustry, SetbusinessIndustry] = useState('');
    const [jobTitle, SetjobTitle] = useState('');
    const [gender, Setgender] = useState('');
    const [age, Setage] = useState('');
    const [interest, Setinterest] = useState([]);
    const [learningMethod, SetlearningMethod] = useState('');

    const onChangeValue = (event) => {
        // console.log(event.target.name);
        if (event.target.name === 'business-industry') {
            SetbusinessIndustry(event.target.value);
            console.log(businessIndustry);
        }
        else if (event.target.name === 'job-title') {
            SetjobTitle(event.target.value);
        }
        else if (event.target.name === 'gender') {
            Setgender(event.target.value);
        }
        else if (event.target.name === 'age') {
            Setage(event.target.value);
        }
        else if (event.target.name === 'interest') {
            if (interest.indexOf(event.target.value) === -1) {
                Setinterest([...interest, event.target.value]);
            } else {
                interest.splice(interest.indexOf(event.target.value), 1);
                Setinterest([...interest]);
                console.log(interest);
            }
        }
        else if (event.target.name === 'learning-method') {
            SetlearningMethod(event.target.value);
        }

    }

    // proceed to the next step
    const nextStep = (e) => {
        e.preventDefault();
        if (step < 7) {
            Setstep(step + 1);

        }
        if (step > 1) {

            Setprogress(progress + 20);
        }
    };

    // proceed to the previous step
    const prevStep = (e) => {
        e.preventDefault();
        if (step > 0) {
            Setstep(step - 1);

        }
        if (step > 1) {
            Setprogress(progress - 20);
        }
    };
    console.log(step);
    let nextBtnText;
    if (step !== 7) {
        nextBtnText = "Next";
    }
    else if (step === 7) {
        nextBtnText = "View Dashboard";
    }

    let formContainer;

    switch (step) {
        case 1:
            formContainer = <Step1 value={businessIndustry} handlechange={onChangeValue} />;
            break;
        case 2:
            formContainer = <Step2 value={jobTitle} handlechange={onChangeValue} />;
            break;
        case 3:
            formContainer = <Step3 value={gender} handlechange={onChangeValue} />;
            break;
        case 4:
            formContainer = <Step4 value={age} handlechange={onChangeValue} />;
            break;
        case 5:
            formContainer = <Step5 value={interest} handlechange={onChangeValue} />;
            break;
        case 6:
            formContainer = <Step6 value={learningMethod} handlechange={onChangeValue} />;
            break;
        case 7:
            formContainer = <Summery values={[businessIndustry, jobTitle, gender, age, interest, learningMethod]} />;
            break;
        default:
            break;
    }
    // console.log("step: ", step);

    if (step === 0) {
        return (
            <SurveyIntro next={nextStep} />
        );
    } else {
        return (
            <div>
                <div className={`row ${formStyle.container}`}>
                    <form className="surveyForm">
                        <Progress now={progress} />
                        {formContainer}
                        {/* <PageNavigator page={step} next={nextStep} back={prevStep} /> */}

                        {/* {step === 1 && <Step1 value={businessIndustry} handlechange={onChangeValue} />}
                        {step === 2 && <Step2 value={jobTitle} handlechange={onChangeValue} />}
                        {step === 3 && <Step3 value={gender} handlechange={onChangeValue} />} */}


                        <div className="d-flex justify-content-center pt-0">
                            <button onClick={prevStep} className="btn btn-light px-4 border">
                                <i className="fa fa-angle-left fs-2 text-info fw-3" />
                            </button>
                            <button onClick={nextStep} className="btn btn-info px-4 border-0 text-light ms-2 fs-3">
                                {nextBtnText}
                            </button>
                        </div >
                    </form>
                </div>
                <div className={formStyle.wave}>
                    <img src={wave} alt="wave" />
                </div>
            </div >
        );
    }





};

export default SurveyForm;