import HealthPic from "../assets/health_training.jpg";
import StrengthPic2 from "../assets/strength_training2.jpg";
import StrengthPic3 from "../assets/strength_training3.jpg";
import CardioPic from "../assets/cardio_training1.jpg";
import CardioPic2 from "../assets/cardio_training2.jpg";


export const programDetails = [        

  {
      name: "Trening snage",

      slider_images: [HealthPic, StrengthPic2, StrengthPic3],

      opis: "Ovaj program namijenjen je za ljude koji žele brzo ojačati i izgledati što bolje za što kraće vrijeme obzirom da se uz pravilnu prehranu i pravilno treniranje može lakoupravljati nečijom masom.",

      list_items:[
          "Već nakon nekoliko dana vidi se napredak", "Brzo dobivanje mase", "Razvijanje mišića"
          
      ],


  },

  {
    name: "Kardio trening",

    slider_images: [CardioPic, CardioPic2],

    opis: "Ovaj program namijenjen je za ljude koji žele steći kondiciju i za one koji ne mogu trčati.",

    list_items:[
        "Već nakon nekoliko dana vidi se napredak", "Brzo dobivanje mase", "Razvijanje mišića"
        
    ],


},


]