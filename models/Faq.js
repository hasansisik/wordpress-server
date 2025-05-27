const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema(
  {
    activeFaq: {
      type: String,
      default: "faqs2"
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
        }
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
        }
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
          }
        }
      },
      images: {
        image1: {
          type: String,
          default: "/assets/imgs/faqs-3/img-1.png"
        },
        image2: {
          type: String,
          default: "/assets/imgs/faqs-3/img-2.png"
        }
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