import './App.scss';
import Exerciser from './Components/Exerciser/Exerciser';
import Footer from './Components/Footer/Footer';
import Partners from './Components/Partners/Partners';
import Practicers from './Components/Practicers/Practicers';
import Programs from './Components/Programs/Programs';
import { Route, Routes } from "react-router-dom";
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import StrengthProgram from './Components/Program_details/Strength_program/StrengthProgram';


function App() {
  return (

    <div>

      <Routes>


        <Route path="/program/Trening snage" element={

          <div id='main'>

            <div>
              <Header />
            </div>
            <StrengthProgram/>
          </div>


        }></Route>

        <Route path="/gallery" element={

          <div id='main'>

            <div>
              <Header />
            </div>
            <Gallery />
          </div>


        }></Route>

      { /* <Route path="/programs" element={

          <div id='main'>

            <div>
              <Header />
            </div>
            <h1>Programs</h1>
          </div>


        }></Route>
      */}

        <Route path="/contact" element={

          <div id='main'>

            <div>
              <Header />
            </div>
            <h1>Kontakt</h1>
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
