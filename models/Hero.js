const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema(
  {
    activeHero: {
      type: String,
      default: "hero1"
    },
    hero1: {
      badge: {
        label: {
          type: String,
          default: "yeni"
        },
        text: {
          type: String,
          default: "Free Lifetime "
        },
        link: {
          type: String,
          default: "#"
        }
      },
      title: {
        type: String,
        default: "Create stunning websites with our"
      },
      description: {
        type: String,
        default: "Build beautiful, responsive websites without code. Our drag-and-drop interface makes it easy to create professional sites in minutes."
      },
      primaryButton: {
        text: {
          type: String,
          default: "Get Started"
        },
        link: {
          type: String,
          default: "/register"
        }
      },
      secondaryButton: {
        text: {
          type: String,
          default: "Contact Sales"
        },
        link: {
          type: String,
          default: "/contact"
        }
      },
      images: {
        background: {
          type: String,
          default: "/assets/imgs/hero-1/background.png"
        },
        shape1: {
          type: String,
          default: "/assets/imgs/hero-1/shape-1.png"
        },
        shape2: {
          type: String,
          default: "/assets/imgs/hero-1/shape-2.png"
        },
        shape3: {
          type: String,
          default: "/assets/imgs/hero-1/shape-3.png"
        }
      },
      card: {
        image: {
          type: String,
          default: "/assets/imgs/hero-1/shape-4.png"
        },
        title: {
          type: String,
          default: "Join Our Community"
        },
        description: {
          type: String,
          default: "Over 2,500+ happy customers"
        },
        button: {
          label: {
            type: String,
            default: "Get"
          },
          text: {
            type: String,
            default: "Free Update"
          },
          link: {
            type: String,
            default: "#"
          }
        }
      }
    },
    hero3: {
      badge: {
        text: {
          type: String,
          default: "Build Without Limits"
        }
      },
      title: {
        part1: {
          type: String,
          default: "Create Stunning"
        },
        part2: {
          type: String,
          default: "Websites Easily"
        }
      },
      description: {
        type: String,
        default: "Design professional websites with our powerful drag-and-drop builder. No coding skills required."
      },
      button: {
        text: {
          type: String,
          default: "Try It Free"
        },
        link: {
          type: String,
          default: "/register"
        }
      },
      avatars: {
        type: Array,
        default: [
          {
            image: "/assets/imgs/hero-3/avatar-1.png",
            alt: "User avatar 1"
          },
          {
            image: "/assets/imgs/hero-3/avatar-2.png",
            alt: "User avatar 2"
          },
          {
            image: "/assets/imgs/hero-3/avatar-3.png",
            alt: "User avatar 3"
          }
        ]
      },
      images: {
        image1: {
          type: String,
          default: "/assets/imgs/hero-3/img-1.png"
        },
        image2: {
          type: String,
          default: "/assets/imgs/hero-3/img-2.png"
        },
        image3: {
          type: String,
          default: "/assets/imgs/hero-3/img-3.png"
        },
        image4: {
          type: String,
          default: "/assets/imgs/hero-3/img-4.png"
        },
        star: {
          type: String,
          default: "/assets/imgs/hero-3/star-rotate.png"
        }
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hero", HeroSchema); 