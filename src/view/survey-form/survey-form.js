/**
 * Title: survey form
 * Description: this page binds the survey form
 */

// dependencies
import React from "react";
import Footer from "../../components/footer/footer";
import PageNavigator from "../../components/pageNavigator/pageNavigator";
import Progress from "../../components/progressbar/progressbar";
import Step1 from "./step1/step1";
import './styles.css';


const SurveyForm = () => {
    return (
        <div className="surveyForm">

            <Progress now={60} />
            <Step1 />
            <PageNavigator page={3} />
            <Footer />
        </div>
    );
};

export default SurveyForm;