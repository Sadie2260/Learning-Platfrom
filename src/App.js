import Header from './componants/common/Header';
import SignUp from './componants/pages/Signup';
import Homepage from './componants/pages/Homepage';
import Courses from './componants/pages/Courses';
import CourseDetail from './componants/pages/CourseDetail';
import { Footer } from './componants/common/Footer';
function App() {
  return (
    <div className="app_wrapper">
    <Header/>
    <Homepage/>
<Footer/>
    {/* <SignUp/> */}
    </div>
  );
}

export default App;
