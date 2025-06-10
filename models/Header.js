const mongoose = require("mongoose");

const HeaderSchema = new mongoose.Schema(
  {
    logo: {
      src: {
        type: String,
        default: "/assets/imgs/template/favicon.svg",
      },
      alt: {
        type: String,
        default: "infinia",
      },
      text: {
        type: String,
        default: "Infinia",
      },
    },
    links: {
      freeTrialLink: {
        href: {
          type: String,
          default: "/",
        },
        text: {
          type: String,
          default: "Giris",
        },
      },
      secondActionButton: {
        href: {
          type: String,
          default: "/register",
        },
        text: {
          type: String,
          default: "Kayıt Ol",
        },
      },
    },
    mainMenu: {
      type: Array,
      default: [
        {
          _id: "1",
          name: "Anasayfa",
          link: "/",
          order: 0,
        },
        {
          _id: "3",
          name: "Hizmetler",
          link: "/hizmetler",
          order: 1,
        },
        {
          _id: "4",
          name: "Blog",
          link: "/blog",
          order: 2,
        },
        {
          _id: "5",
          name: "İletişim",
          link: "/iletisim",
          order: 3,
        },
        {
          _id: "2",
          name: "Hakkımızda",
          link: "/hakkimizda",
          order: 4,
        },
      ],
    },
    socialLinks: {
      type: Array,
      default: [],
    },
    topBarItems: {
      type: Array,
      default: [],
    },
    showDarkModeToggle: {
      type: Boolean,
      default: false,
    },
    showActionButton: {
      type: Boolean,
      default: false,
    },
    showSecondActionButton: {
      type: Boolean,
      default: false,
    },
    actionButtonText: {
      type: String,
      default: "Giris",
    },
    actionButtonLink: {
      type: String,
      default: "/",
    },
    headerComponent: {
      type: String,
      default: "Header1",
    },
    workingHours: {
      type: String,
      default: "Mon-Fri: 10:00am - 09:00pm",
    },
    topBarColor: {
      type: String,
      default: "#3b71fe", // Default is primary color
    },
    topBarTextColor: {
      type: String,
      default: "#ffffff", // Default is white text
    },
    mobileMenuButtonColor: {
      type: String,
      default: "transparent", // Default is transparent
    },
    phoneIconBgColor: {
      type: String,
      default: "#3b71fe", // Default is primary color
    },
    phoneIconColor: {
      type: String,
      default: "#ffffff", // Default is white
    },
    phoneQuestionText: {
      type: String,
      default: "Have Any Questions?", // Default text
    },
    buttonColor: {
      type: String,
      default: "#3b71fe", // Default button color
    },
    buttonTextColor: {
      type: String,
      default: "#ffffff", // Default button text color
    },
    secondButtonColor: {
      type: String,
      default: "#ffffff", // Default second button color
    },
    secondButtonTextColor: {
      type: String,
      default: "#3b71fe", // Default second button text color
    },
    secondButtonBorderColor: {
      type: String,
      default: "#3b71fe", // Default second button border color
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Header", HeaderSchema); 