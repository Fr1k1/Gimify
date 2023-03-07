import strength_icon from "../../src/assets/strength_icon.png";
import fire_icon from "../../src/assets/fire_icon.png";
import health_icon from "../../src/assets/health_icon.png";
import cardio_icon from "../../src/assets/cardio_icon.png";
import background from "../../src/assets/Rectangle_6.png";



export const programsData = [

    {
        icon: (
            <img src={strength_icon} alt="" className="program_icon program_strength_icon" />
        ),

        naslov: "Trening snage",

        opis: "Ako želite ojačati svoje mišiće, dobiti na masi i postati jaki onda je ovo pravi program za Vas.",

        pozadina: (
            <img src={background} alt="" className="program_background" />

        ),

    },

    {
        icon: (
            <img src={cardio_icon} alt="" className="program_icon program_cardio_icon" />
        ),

        naslov: "Kardio trening",

        opis: "Lako se umorite? Ne možete trčati i imate slabu kondiciju? Odaberite ovu vrstu programa.",

        pozadina: (
            <img src={background} alt="" className="program_background" />

        ),

    },

    {
        icon: (
            <img src={health_icon} alt="" className="program_icon program_health_icon" />
        ),

        naslov: "Zdravlje",


        opis: "Ako Vam je zdravlje na prvom mjestu te se želite zdravo hraniti i kretati, stisnite na gumb.",

        pozadina: (
            <img src={background} alt="" className="program_background" />

        ),

    },

    {
        icon: (
            <img src={fire_icon} alt="" className="program_icon program_fat_burning_icon" />
        ),

        naslov: "Mršavljenje",


        opis: "Mislite da imate višak kilograma? Svi Vas čudno gledaju kada ste na plaži? Sram Vas je skinuti majicu? Stisnite gumb.",

        pozadina: (
            <img src={background} alt="" className="program_background" />

        ),

    },


]