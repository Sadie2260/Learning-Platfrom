import Header from './componants/common/Header';
import SignUp from './componants/pages/Signup';
import Homepage from './componants/pages/Homepage';
import Courses from './componants/pages/Courses';
import { Footer } from './componants/common/Footer';
import LoginForm from './componants/pages/LoginForm';
import BlogCard from './componants/pages/BlogCard';
function App() {
  return (
    <div className="app_wrapper">
    <Header/>
    <Homepage/>
<Footer/>
    <SignUp/>
    <BlogCard/>
    <LoginForm/>
    </div>
  );
}

export default App;
