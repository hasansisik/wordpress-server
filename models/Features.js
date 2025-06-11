const mongoose = require("mongoose");

const FeaturesSchema = new mongoose.Schema(
  {
    activeFeature: {
      type: String,
      default: "features1"
    },
    features1: {
      badge: {
        visible: {
          type: Boolean,
          default: true
        },
        label: {
          type: String,
          default: "Our Features"
        },
        text: {
          type: String,
          default: ""
        },
        backgroundColor: {
          type: String,
          default: ""
        },
        labelTextColor: {
          type: String,
          default: "#6342EC"
        }
      },
      title: {
        part1: {
          type: String,
          default: "1, we are creating a"
        },
        part2: {
          type: String,
          default: "Bright Future."
        },
        part3: {
          type: String,
          default: "Join us."
        },
        part3TextColor: {
          type: String,
          default: "#6342EC"
        }
      },
      images: {
        img1: {
          type: String,
          default: "/assets/imgs/features-1/img-1.png"
        },
        img2: {
          type: String,
          default: "/assets/imgs/features-1/img-2.png"
        },
        img3: {
          type: String,
          default: "/assets/imgs/features-1/img-3.png"
        },
        bgEllipse: {
          type: String,
          default: "/assets/imgs/features-1/bg-ellipse.png"
        },
        starLg: {
          type: String,
          default: "/assets/imgs/features-1/star-lg.png"
        },
        starMd: {
          type: String,
          default: "/assets/imgs/features-1/star-md.png"
        },
        dots: {
          type: String,
          default: "/assets/imgs/features-1/dots.png"
        }
      },
      features: {
        type: Array,
        default: [
          {
            icon: "/assets/imgs/features-1/icon-1.svg",
            title: "Work organization",
            description: "A business consultant provides expert advice and guidance to businesses on various aspects.",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconBackgroundColor: ""
          },
          {
            icon: "/assets/imgs/features-1/icon-2.svg",
            title: "Strategy Development",
            description: "Business consultants play a crucial role by offering expert advice and guidance to companies",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconBackgroundColor: ""
          },
          {
            icon: "/assets/imgs/features-1/icon-3.svg",
            title: "Data analytics",
            description: "Consultants provide invaluable expertise to businesses, assisting them with strategic advice",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconBackgroundColor: ""
          },
          {
            icon: "/assets/imgs/features-1/icon-4.svg",
            title: "Business Intelligence",
            description: "Through their deep understanding of industry trends and best practices, consultants empower organizations",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconBackgroundColor: ""
          }
        ]
      },
      videoId: {
        type: String,
        default: "gXFATcwrO-U"
      }
    },
    features4: {
      badge: {
        visible: {
          type: Boolean,
          default: true
        },
        label: {
          type: String,
          default: "What we offers"
        },
        backgroundColor: {
          type: String,
          default: ""
        },
        labelTextColor: {
          type: String,
          default: "#6342EC"
        },
        icon: {
          type: String,
          default: "/assets/imgs/features-1/dots.png"
        }
      },
      title: {
        part1: {
          type: String,
          default: "Professional"
        },
        part2: {
          type: String,
          default: "UltraHD Video Conferencing"
        },
        part3: {
          type: String,
          default: "Platform"
        },
        part2TextColor: {
          type: String,
          default: ""
        }
      },
      features: {
        type: Array,
        default: [
          {
            icon: "/assets/imgs/features-4/icon-1.svg",
            title: "Unified Communications",
            description: "Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconColor: ""
          },
          {
            icon: "/assets/imgs/features-4/icon-2.svg",
            title: "Team Messenger",
            description: "Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconColor: ""
          },
          {
            icon: "/assets/imgs/features-4/icon-3.svg",
            title: "Telephony and PBX",
            description: "Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconColor: ""
          },
          {
            icon: "/assets/imgs/features-4/icon-4.svg",
            title: "Smart Meeting",
            description: "Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconColor: ""
          }
        ]
      },
      buttons: {
        primary: {
          visible: {
            type: Boolean,
            default: true
          },
          text: {
            type: String,
            default: "Get Free Quote"
          },
          link: {
            type: String,
            default: "#"
          },
          backgroundColor: {
            type: String,
            default: ""
          },
          textColor: {
            type: String,
            default: "#FFFFFF"
          },
          iconColor: {
            type: String,
            default: "#FFFFFF"
          }
        },
        secondary: {
          visible: {
            type: Boolean,
            default: true
          },
          text: {
            type: String,
            default: "How We Work"
          },
          link: {
            type: String,
            default: "#"
          },
          textColor: {
            type: String,
            default: ""
          }
        }
      },
      backgroundColor: {
        type: String,
        default: ""
      }
    },
    features5: {
      title: {
        type: String,
        default: "Innovative Solutions for Modern Business"
      },
      titleColor: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      descriptionColor: {
        type: String,
        default: ""
      },
      sections: {
        type: Array,
        default: [
          {
            id: "section1",
            visible: true,
            position: 1,
            image: "/assets/imgs/features-5/img-1.png",
            imagePosition: "left",
            backgroundColor: "",
            photoBackgroundColor: "",
            gradientBackgroundColor: "",
            gradientBackgroundColor2: "",
            title: {
              part1: "All that's necessary for",
              part2: "effective team effort.",
              part3: "Join us.",
              part2Color: "",
              part3Color: "#6342EC"
            },
            description: "Provide your team with top-tier group mentoring programs and exceptional professional benefits.",
            descriptionColor: ""
          },
          {
            id: "section2",
            visible: true,
            position: 2,
            image: "/assets/imgs/features-5/img-2.png",
            imagePosition: "right",
            backgroundColor: "",
            photoBackgroundColor: "",
            gradientBackgroundColor: "",
            gradientBackgroundColor2: "",
            title: {
              part1: "Experience the",
              part2: "cutting-edge",
              part3: "capabilities",
              part2Color: ""
            },
            description: "Provide your team with top-tier group mentoring programs and exceptional professional benefits.",
            descriptionColor: ""
          }
        ]
      },
      backgroundColor: {
        type: String,
        default: ""
      }
    },
    features8: {
      title: {
        type: String,
        default: "Core values"
      },
      description: {
        type: String,
        default: "We break down barriers so teams can focus on what matters – working together to create products their customers love."
      },
      values: {
        type: Array,
        default: [
          {
            title: "Customers First",
            description: "Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.",
            icon: "/assets/imgs/features-2/tick.svg"
          },
          {
            title: "Think Big",
            description: "Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.",
            icon: "/assets/imgs/features-2/tick.svg"
          },
          {
            title: "Make a Difference",
            description: "Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.",
            icon: "/assets/imgs/features-2/tick.svg"
          },
          {
            title: "Act With Integrity",
            description: "Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.",
            icon: "/assets/imgs/features-2/tick.svg"
          },
          {
            title: "Do the right thing",
            description: "Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.",
            icon: "/assets/imgs/features-2/tick.svg"
          },
          {
            title: "Stronger united",
            description: "Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.",
            icon: "/assets/imgs/features-2/tick.svg"
          }
        ]
      },
      starIcon: {
        type: String,
        default: "/assets/imgs/features-8/icon-star.svg"
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      titleColor: {
        type: String,
        default: "#FFFFFF"
      },
      descriptionColor: {
        type: String,
        default: "#FFFFFF"
      },
      valuesTitleColor: {
        type: String,
        default: "#FFFFFF"
      },
      valuesDescriptionColor: {
        type: String,
        default: "#FFFFFF"
      }
    },
    features10: {
      backgroundColor: {
        type: String,
        default: ""
      },
      features: {
        type: Array,
        default: [
          {
            icon: "/assets/imgs/features-1/icon-1.svg",
            title: "Best Solutions",
            description: "delivering exceptional results and Innovation solutons maximizing your success.",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconBackgroundColor: ""
          },
          {
            icon: "/assets/imgs/features-1/icon-2.svg",
            title: "Secure payment",
            description: "We ensure your transactions are safe with advanced encryption and secure payment options.",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconBackgroundColor: ""
          },
          {
            icon: "/assets/imgs/features-1/icon-3.svg",
            title: "Save Money",
            description: "Enjoy competitive pricing, exclusive discounts, promotions to maximize your savings.",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconBackgroundColor: ""
          },
          {
            icon: "/assets/imgs/features-1/icon-4.svg",
            title: "Quick Support",
            description: "Our dedicated support team offers prompt assistance through live chat, email, and phone.",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            iconBackgroundColor: ""
          }
        ]
      },
      backgroundImage: {
        type: String,
        default: "/assets/imgs/feature-10/bg-line.png"
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Features", FeaturesSchema); 