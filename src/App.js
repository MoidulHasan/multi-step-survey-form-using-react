// import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';



import SurveyForm from './view/survey-form/survey-form';
import SurveyIntro from './view/survey-intro/survey-intro';


function App() {
  return (
    <div className="App">
      {/* <SurveyIntro /> */}
      <SurveyForm />
    </div>
  );
}

export default App;
