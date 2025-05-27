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
        }
      },
      description: {
        type: String,
        default: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
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
          }
        }
      }
    },
    cta9: {
      videoGuide: {
        image: {
          type: String,
          default: "/assets/imgs/cta-14/img-1.png"
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
      vectors: {
        vector1: {
          type: String,
          default: "/assets/imgs/cta-14/vector.svg"
        },
        vector2: {
          type: String,
          default: "/assets/imgs/cta-14/vector-2.svg"
        },
        bgLine: {
          type: String,
          default: "/assets/imgs/service-2/bg-line.png"
        }
      },
      heading: {
        tag: {
          type: String,
          default: "How It Work"
        },
        title: {
          type: String,
          default: "What are the <span class=\"fw-bold\">Steps Involved</span> in <br /> Our <span class=\"fw-bold\">Process?</span>"
        }
      },
      tagImage: {
        type: String,
        default: "/assets/imgs/features-1/dots.png"
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cta", CtaSchema); 