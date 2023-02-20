import './App.scss';
import Exerciser from './Components/Exerciser/Exerciser';
import Footer from './Components/Footer/Footer';
import Partners from './Components/Partners/Partners';
import Practicers from './Components/Practicers/Practicers';
import Programs from './Components/Programs/Programs';
import { Route, Routes } from "react-router-dom";
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import HealthProgram from './Components/Program_details/Health_program/HealthProgram';
import Contact from './Components/Contact/Contact';
import ProgramInfo from './Components/ProgramInfo/ProgramInfo';
import ProgramDetails from './Components/Program_details/ProgramDetails';
import { programDetails } from './Data/Program_details';


/*ove programe jos nemrem maknuti iz importa jer je na njima css */

function App() {
  return (

    <div>

      <Routes>

        <Route path="/program/:name"
          element={

            <div id="main">
          <Header/>
          <ProgramDetails programDetails={programDetails} /></div>}></Route>

        <Route path="/program/Zdravlje" element={

          <div id='main'>

            <div>
              <Header />
            </div>
            <HealthProgram />
          </div>


        }></Route>



        <Route path="/gallery" element={

          <div id='main'>

            <div>
              <Header />
            </div>
            <Gallery />

            <Footer />
          </div>


        }></Route>

        <Route path="/contact" element={

          <div id='main'>

            <div>
              <Header />
            </div>
            <Contact />
          </div>


        }></Route>


        <Route path="/" element={

          <div>
            <Exerciser />
            <Partners />
            <Programs />
            <Practicers />
            <Footer />
          </div>


        }></Route>


      </Routes>
    </div>


  )
}

export default App;
