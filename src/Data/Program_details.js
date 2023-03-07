import StrengthPic from "../assets/strength_training.jpg"
import StrengthPic2 from "../assets/strength_training2.jpg";
import StrengthPic3 from "../assets/strength_training3.jpg";
import CardioPic from "../assets/cardio_training1.jpg";
import CardioPic2 from "../assets/cardio_training2.jpg";
import CardioPic3 from "../assets/cardio_training3.jpg";
import HealthPic from "../assets/health_training.jpg"
import HealthPic2 from "../assets/health_training2.jpg"
import HealthPic3 from "../assets/health_training3.jpg"
import FatBurningPic from "../assets/fat_burning.jpg"
import FatBurningPic2 from "../assets/fat_burning2.jpg"
import FatBurningPic3 from "../assets/fat_burning3.jpg"


export const programDetails = [

    {
        name: "Trening snage",

        slider_images: [StrengthPic, StrengthPic2, StrengthPic3],

        description: "Ovaj program namijenjen je za ljude koji žele brzo ojačati i izgledati što bolje za što kraće vrijeme obzirom da se uz pravilnu prehranu i pravilno treniranje može lakoupravljati nečijom masom.",

        list_items: [
            "Već nakon nekoliko dana vidi se napredak", "Brzo dobivanje mase", "Razvijanje mišića"

        ],

        price: "20 € mjesečno",


    },

    {
        name: "Kardio trening",

        slider_images: [CardioPic, CardioPic2, CardioPic3],

        description: "Ovaj program namijenjen je za ljude koji žele steći kondiciju i za one koji ne mogu trčati.",

        list_items: [
            "Steknite kondiciju", "Naučite pravilno disati i trčati"

        ],

        price: "18 € mjesečno",



    },

    {
        name: "Zdravlje",

        slider_images: [HealthPic, HealthPic2, HealthPic3],

        description: "Naučite više o pravilnom disanju, kretanju i zdravom načinu života.",

        list_items: [
            "Razgibajte svoje tijelo kako bi održali zdravlje",
            "Naučite više o pravilnom disanju i trčanju",
            "Živite duže i kvalitetnije"

        ],

        price: "24 € mjesečno (u cijenu uključeni recepti za zdravu prehranu)",



    },


    {
        name: "Mršavljenje",

        slider_images: [FatBurningPic, FatBurningPic2, FatBurningPic3],

        description: "Naučite više o zdravoj i pravilnoj prehrani, skidanju kilograma i kako biti fit.",

        list_items: [
            "Skinite višak kilograma",
            "Naučite više o zdravoj prehrani",
            "Vratite svoje samopouzdanje"
        ],

        price: "25 € mjesečno",


    },


]