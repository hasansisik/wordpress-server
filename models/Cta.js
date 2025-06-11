const mongoose = require("mongoose");

const CtaSchema = new mongoose.Schema(
  {
    activeCta: {
      type: String,
      default: "cta4"
    },
    cta1: {
      badge: {
        type: String,
        default: "About us"
      },
      badgeVisible: {
        type: Boolean,
        default: true
      },
      badgeBackgroundColor: {
        type: String,
        default: "#f1f0fe"
      },
      badgeTextColor: {
        type: String,
        default: "#6342EC"
      },
      title: {
        type: String,
        default: "Together, We are <span class=\"fw-bold\">Shaping </span> a<br /> <span class=\"fw-bold\">Promising</span> Future<span class=\"fw-bold\">.</span>"
      },
      tagImage: {
        type: String,
        default: "/assets/imgs/features-1/dots.png"
      },
      star1: {
        type: String,
        default: "/assets/imgs/cta-15/star-2.svg"
      },
      star2: {
        type: String,
        default: "/assets/imgs/cta-15/star-1.svg"
      },
      bgEllipse: {
        type: String,
        default: "/assets/imgs/cta-15/bg-ellipse.png"
      },
      images: {
        type: Array,
        default: [
          {
            src: "/assets/imgs/cta-15/img-1.png",
            alt: "Team member 1"
          },
          {
            src: "/assets/imgs/cta-15/img-2.png",
            alt: "Team member 2"
          },
          {
            src: "/assets/imgs/cta-15/img-3.png",
            alt: "Team member 3"
          },
          {
            src: "/assets/imgs/cta-15/img-4.png",
            alt: "Team member 4"
          },
          {
            src: "/assets/imgs/cta-15/img-5.png",
            alt: "Team member 5"
          }
        ]
      },
      socialLabel: {
        type: String,
        default: "Follow us:"
      },
      buttons: {
        primary: {
          visible: {
            type: Boolean,
            default: true
          },
          text: {
            type: String,
            default: "Get Started"
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
          }
        },
        secondary: {
          visible: {
            type: Boolean,
            default: true
          },
          text: {
            type: String,
            default: "Learn More"
          },
          link: {
            type: String,
            default: "#"
          },
          backgroundColor: {
            type: String,
            default: "transparent"
          },
          textColor: {
            type: String,
            default: "#111827"
          }
        }
      }
    },
    cta4: {
      videoGuide: {
        image: {
          type: String,
          default: "/assets/imgs/cta-4/img-1.png"
        },
        videoId: {
          type: String,
          default: "gXFATcwrO-U"
        },
        buttonText: {
          type: String,
          default: "Video Guide"
        }
      },
      vector: {
        image: {
          type: String,
          default: "/assets/imgs/cta-4/vector.svg"
        }
      },
      heading: {
        small: {
          type: String,
          default: "What We Do"
        },
        title: {
          type: String,
          default: "Custom Services For Your Business"
        },
        visible: {
          type: Boolean,
          default: true
        },
        smallColor: {
          type: String,
          default: "#6342EC"
        },
        titleColor: {
          type: String,
          default: "#111827"
        }
      },
      description: {
        type: String,
        default: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      description2: {
        type: String,
        default: ""
      },
      features: {
        type: Array,
        default: [
          "Creative Ideas",
          "Web Development",
          "Digital Marketing",
          "App Development"
        ]
      },
      buttons: {
        primary: {
          text: {
            type: String,
            default: "Get Free Quote"
          },
          link: {
            type: String,
            default: "#"
          },
          visible: {
            type: Boolean,
            default: true
          },
          backgroundColor: {
            type: String,
            default: ""
          },
          textColor: {
            type: String,
            default: "#FFFFFF"
          }
        },
        secondary: {
          text: {
            type: String,
            default: "How We Work"
          },
          link: {
            type: String,
            default: "#"
          },
          visible: {
            type: Boolean,
            default: true
          },
          backgroundColor: {
            type: String,
            default: "transparent"
          },
          textColor: {
            type: String,
            default: "#111827"
          }
        }
      }
    },
    cta3: {
      tag: {
        type: String,
        default: "Our History"
      },
      tagVisible: {
        type: Boolean,
        default: true
      },
      tagBackgroundColor: {
        type: String,
        default: "#f1f0fe"
      },
      tagTextColor: {
        type: String,
        default: "#6342EC"
      },
      title: {
        type: String,
        default: "A Journey of Innovation and Growth"
      },
      titleColor: {
        type: String,
        default: "#111827"
      },
      subtitle: {
        type: String,
        default: "Loved By Developers Trusted By Enterprises"
      },
      subtitleColor: {
        type: String,
        default: "#6E6E6E"
      },
      description: {
        type: String,
        default: "Was founded with a passion for technology and a desire to make a difference in the digital world. From our humble beginnings, we have grown into a reputable and sought-after web development agency, serving a diverse range of clients across various industries. Over the years, we have successfully delivered countless projects, each one a testament to our dedication, expertise, and innovative approach. Our journey has been marked by continuous growth, learning, and adaptation and we are proud of the milestones we have achieved along the way."
      },
      descriptionColor: {
        type: String,
        default: "#111827"
      },
      tagImage: {
        type: String,
        default: "/assets/imgs/features-1/dots.png"
      },
      buttons: {
        primary: {
          visible: {
            type: Boolean,
            default: true
          },
          text: {
            type: String,
            default: "Get Started"
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
          }
        }
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cta", CtaSchema); 