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
import Step4 from "./step4/step4";
import Step5 from "./step5/step5";

import './styles.css';


const SurveyForm = () => {

    const [businessIndustry, SetbusinessIndustry] = useState('');
    const [jobTitle, SetjobTitle] = useState('');
    const [gender, Setgender] = useState('');
    const [age, Setage] = useState('');
    const [interest, Setinterest] = useState([]);
    // console.log(interest);

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

    }

    return (
        <form className="surveyForm">

            <Progress now={60} />
            {/* <Step1 value={businessIndustry} handlechange={onChangeValue} /> */}
            {/* <Step2 value={jobTitle} handlechange={onChangeValue} /> */}
            {/* <Step3 value={gender} handlechange={onChangeValue} /> */}
            {/* <Step4 value={age} handlechange={onChangeValue} /> */}
            <Step5 value={interest} handlechange={onChangeValue} />

            <PageNavigator page={3} />
            <Footer />
        </form>
    );
};

export default SurveyForm;