const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema(
  {
    activeFaq: {
      type: String,
      default: "faqs2"
    },
    faqs1: {
      heading: {
        title: {
          type: String,
          default: "Frequently Asked Questions"
        },
        description: {
          type: String,
          default: "Find the answers to all of our most frequently asked questions"
        },
        titleColor: {
          type: String,
          default: "#111827"
        },
        descriptionColor: {
          type: String,
          default: "#6E6E6E"
        }
      },
      mainImage: {
        type: String,
        default: "/assets/imgs/faqs-1/img-1.png"
      },
      supportItems: {
        type: Array,
        default: [
          {
            icon: "/assets/imgs/faqs-1/icon-1.png",
            title: "Live chat support 24/7",
            description: "More than 300 employees are ready to help you"
          },
          {
            icon: "/assets/imgs/faqs-1/icon-2.png",
            title: "Help desk support center",
            description: "Via ticket system. 24/7 available."
          },
          {
            icon: "/assets/imgs/faqs-1/icon-3.png",
            title: "Book a demo",
            description: "Live support via video call"
          }
        ]
      },
      questions: {
        type: Array,
        default: [
          {
            question: "The Future of SaaS: Emerging Trends to Watch",
            answer: "Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly."
          },
          {
            question: "Is the video call app free to use?",
            answer: "Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly."
          },
          {
            question: "What devices are compatible with the video call app?",
            answer: "Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly."
          },
          {
            question: "How can I ensure my video calls are secure?",
            answer: "Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly."
          },
          {
            question: "Can I share my screen during a video call?",
            answer: "Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly."
          }
        ]
      },
      backgroundImage: {
        type: String,
        default: "/assets/imgs/faqs-1/img-bg-line.png"
      },
      numberColor: {
        type: String,
        default: "#6342EC"
      },
      numberBgColor: {
        type: String,
        default: "#ffffff"
      }
    },
    faqs2: {
      heading: {
        tag: {
          type: String,
          default: "Pricing FAQs"
        },
        title: {
          type: String,
          default: "Ask us anything"
        },
        description: {
          type: String,
          default: "Have any questions? We're here to assist you."
        },
        titleColor: {
          type: String,
          default: "#111827"
        },
        descriptionColor: {
          type: String,
          default: "#6E6E6E"
        }
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
      tagImage: {
        type: String,
        default: "/assets/imgs/features-1/dots.png"
      },
      questions: {
        type: Array,
        default: [
          {
            question: "What are the key benefits of using <span class=\"text-primary\">Infinia System</span>",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "What features does <span class=\"text-primary\">Infinia</span> offer?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "How do your services work?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "What is SEO and why do I need it?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "What SEO strategies do you use?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "How can you help with identity development?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "What is your process for starting a project?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "How much do your services cost?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "How long does it take to see results?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "Do you offer ongoing support?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          }
        ]
      }
    },
    faqs3: {
      heading: {
        tag: {
          type: String,
          default: "Frequently Asked questions"
        },
        title: {
          type: String,
          default: "Got questions? <br /> We've got answers"
        },
        description: {
          type: String,
          default: "Quick answers to questions you may have. Can't find what you're looking for? Get in touch with us."
        },
        titleColor: {
          type: String,
          default: "#111827"
        },
        descriptionColor: {
          type: String,
          default: "#6E6E6E"
        }
      },
      descriptionVisible: {
        type: Boolean,
        default: true
      },
      leftImagesVisible: {
        type: Boolean,
        default: true
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
      buttons: {
        primary: {
          text: {
            type: String,
            default: "Get in touch"
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
            default: "Help Center"
          },
          link: {
            type: String,
            default: "#"
          },
          visible: {
            type: Boolean,
            default: true
          },
          textColor: {
            type: String,
            default: "#111827"
          }
        }
      },
      leftImage1: {
        type: String,
        default: "/assets/imgs/faqs-3/img-1.png"
      },
      leftImage2: {
        type: String,
        default: "/assets/imgs/faqs-3/img-2.png"
      },
      tagImage: {
        type: String,
        default: "/assets/imgs/features-1/dots.png"
      },
      questions: {
        type: Array,
        default: [
          {
            question: "What are the key benefits of using <span class=\"text-primary\">Infinia System</span>",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "What features does <span class=\"text-primary\">Infinia</span> offer?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "How do your services work?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "What is SEO and why do I need it?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          },
          {
            question: "What SEO strategies do you use?",
            answer: "We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan."
          }
        ]
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faq", FaqSchema); 