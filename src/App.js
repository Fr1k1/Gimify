import './App.scss';
import Exerciser from './Components/Exerciser/Exerciser';
import Footer from './Components/Footer/Footer';
import Partners from './Components/Partners/Partners';
import Practicers from './Components/Practicers/Practicers';
import Programs from './Components/Programs/Programs';


function App() {
  return (

    <div>
      <Exerciser />
      <Partners />
      <Programs />
      <Practicers/>
      <Footer/>
    </div>)
}

export default App;
