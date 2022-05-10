/**
 * Title: survey form
 * Description: this page binds the survey form
 */

// dependencies
import React, { useState } from "react";
import Footer from "../../components/footer/footer";
import PageNavigator from "../../components/pageNavigator/pageNavigator";
import Progress from "../../components/progressbar/progressbar";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import './styles.css';


const SurveyForm = () => {

    const [businessIndustry, SetbusinessIndustry] = useState('');
    const [jobTitle, SetjobTitle] = useState('');
    const [gender, Setgender] = useState('');


    const onChangeValue = (event) => {
        // console.log(event.target.name);
        if (event.target.name === 'business-industry') {
            SetbusinessIndustry(event.target.value);
        }
        else if (event.target.name === 'job-title') {
            SetjobTitle(event.target.value);
        }
        else if (event.target.name === 'gender') {
            Setgender(event.target.value);
        }
    }

    return (
        <form className="surveyForm">

            <Progress now={60} />
            {/* <Step1 value={businessIndustry} handlechange={onChangeValue} /> */}
            {/* <Step2 value={jobTitle} handlechange={onChangeValue} /> */}
            <Step3 value={gender} handlechange={onChangeValue} />

            {/* <Step2 />
            <Step3 /> */}
            <PageNavigator page={3} />
            <Footer />
        </form>
    );
};

export default SurveyForm;