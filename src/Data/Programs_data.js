import strength_icon from "../../src/assets/strength_icon.png";
import fire_icon from "../../src/assets/fire_icon.png";
import health_icon from "../../src/assets/health_icon.png";
import cardio_icon from "../../src/assets/cardio_icon.png";

export const programsData = [
  {
    icon: (
      <img
        src={strength_icon}
        alt=""
        className="program_icon program_strength_icon"
      />
    ),

    program_name: "Trening snage",

    description:
      "Ako želite ojačati svoje mišiće, dobiti na masi i postati jaki onda je ovo pravi program za Vas.",
  },

  {
    icon: (
      <img
        src={cardio_icon}
        alt=""
        className="program_icon program_cardio_icon"
      />
    ),

    program_name: "Kardio trening",

    description:
      "Lako se umorite? Ne možete trčati i imate slabu kondiciju? Odaberite ovu vrstu programa.",
  },

  {
    icon: (
      <img
        src={health_icon}
        alt=""
        className="program_icon program_health_icon"
      />
    ),

    program_name: "Zdravlje",

    description:
      "Ako Vam je zdravlje na prvom mjestu te se želite zdravo hraniti i kretati, stisnite na gumb.",
  },

  {
    icon: (
      <img
        src={fire_icon}
        alt=""
        className="program_icon program_fat_burning_icon"
      />
    ),

    program_name: "Mršavljenje",

    description:
      "Mislite da imate višak kilograma? Svi Vas čudno gledaju kada ste na plaži? Sram Vas je skinuti majicu? Stisnite gumb.",
  },
];
