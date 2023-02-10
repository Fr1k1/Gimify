import strength_icon from "./assets/strength_icon.png";
import fire_icon from "./assets/fire_icon.png";
import health_icon from "./assets/health_icon.png";
import cardio_icon from "./assets/cardio_icon.png";
import background from "./assets/Rectangle_6.png";



export const programsData = [

    {
        ikona: (
            <img src={strength_icon} alt="" className="program_icon program_strength_icon" />
        ),

        naslov: "Trening snage",

        opis: "Isprobajte nešto novo, postanite jači nego ikad uz sposobne trenere i najjaču ekipu uz Vas.",

        pozadina: (
            <img src={background} alt="" className="program_background" />

        ),

    },

    {
        ikona: (
            <img src={cardio_icon} alt="" className="program_icon program_cardio_icon" />
        ),

        naslov: "Kardio trening",

        opis: "Isprobajte nešto novo, postanite jači nego ikad uz sposobne trenere i najjaču ekipu uz Vas.",

        pozadina: (
            <img src={background} alt="" className="program_background" />

        ),

    },

    {
        ikona: (
            <img src={health_icon} alt="" className="program_icon program_health_icon" />
        ),

        naslov: "Zdravlje",


        opis: "Isprobajte nešto novo, postanite jači nego ikad uz sposobne trenere i najjaču ekipu uz Vas.",

        pozadina: (
            <img src={background} alt="" className="program_background" />

        ),

    },

    {
        ikona: (
            <img src={fire_icon} alt="" className="program_icon program_fat_burning_icon" />
        ),

        naslov: "Mršavljenje",


        opis: "Isprobajte nešto novo, postanite jači nego ikad uz sposobne trenere i najjaču ekipu uz Vas.",

        pozadina: (
            <img src={background} alt="" className="program_background" />

        ),

    },


]