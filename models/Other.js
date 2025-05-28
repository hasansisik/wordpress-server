const mongoose = require("mongoose");

const OtherSchema = new mongoose.Schema(
  {
    activeOther: {
      type: String,
      default: "blog1"
    },
    blog1: {
      badge: {
        type: String,
        default: "From Blog"
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
        default: "Our Latest Articles"
      },
      titleColor: {
        type: String,
        default: "#111827"
      },
      subtitle: {
        type: String,
        default: "Explore the insights and trends shaping our industry"
      },
      subtitleColor: {
        type: String,
        default: "#6E6E6E"
      },
      seeAllLink: {
        type: String,
        default: "#"
      },
      backgroundColor: {
        type: String,
        default: "#ffffff"
      }
    },
    blog2: {
      badge: {
        type: String,
        default: "From Blog"
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
        default: "Our Latest News and Articles"
      },
      titleColor: {
        type: String,
        default: "#111827"
      },
      subtitle: {
        type: String,
        default: "Explore the insights and trends shaping our industry. 🔥"
      },
      subtitleColor: {
        type: String,
        default: "#6E6E6E"
      },
      seeAllLink: {
        type: String,
        default: "#"
      },
      seeAllLinkText: {
        type: String,
        default: "See all articles"
      },
      seeAllButtonVisible: {
        type: Boolean,
        default: true
      },
      seeAllButtonColor: {
        type: String,
        default: "#111827"
      },
      backgroundColor: {
        type: String,
        default: "#ffffff"
      },
      bgLine: {
        type: String,
        default: "/assets/imgs/blog-2/img-bg-line.png"
      }
    },
    blog3: {
      title: {
        type: String,
        default: "Related Posts"
      },
      titleColor: {
        type: String,
        default: "#111827"
      },
      backgroundColor: {
        type: String,
        default: "#ffffff"
      },
      bgLine: {
        type: String,
        default: "/assets/imgs/team-1/bg-line.png"
      }
    },
    blog5: {
      title: {
        type: String,
        default: "Trending News"
      },
      titleColor: {
        type: String,
        default: "#111827"
      },
      subtitle: {
        type: String,
        default: "Explore the insights and trends shaping our industry"
      },
      subtitleColor: {
        type: String,
        default: "#6E6E6E"
      },
      backgroundColor: {
        type: String,
        default: "#ffffff"
      }
    },
    services2: {
      heading: {
        tag: {
          type: String,
          default: "What we offer"
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
          default: "Let's Discover Our Service <span class=\"fw-bold\">Our Service <br class=\"d-none d-lg-inline\" /> Features</span> Charter"
        },
        titleColor: {
          type: String,
          default: "#111827"
        }
      },
      tagImage: {
        type: String,
        default: "/assets/imgs/features-1/dots.png"
      },
      services: {
        type: Array,
        default: [
          {
            icon: "/assets/imgs/service-2/icon-1.svg",
            title: "Business Analytics",
            description: "A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.",
            iconBgColor: "bg-primary-soft"
          },
          {
            icon: "/assets/imgs/service-2/icon-2.svg",
            title: "Investment",
            description: "A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.",
            iconBgColor: "bg-success-soft"
          },
          {
            icon: "/assets/imgs/service-2/icon-3.svg",
            title: "Tax Advisory",
            description: "A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.",
            iconBgColor: "bg-warning-soft"
          },
          {
            icon: "/assets/imgs/service-2/icon-4.svg",
            title: "Automated reports",
            description: "A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.",
            iconBgColor: "bg-info-soft"
          },
          {
            icon: "/assets/imgs/service-2/icon-5.svg",
            title: "Funnel optimization",
            description: "A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.",
            iconBgColor: "bg-danger-soft"
          },
          {
            icon: "/assets/imgs/service-2/icon-6.svg",
            title: "Integrations",
            description: "A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.",
            iconBgColor: "bg-secondary-soft"
          }
        ]
      },
      backgroundColor: {
        type: String,
        default: "#ffffff"
      },
      backgroundImage: {
        type: String,
        default: "/assets/imgs/service-2/bg-line.png"
      },
      buttons: {
        primary: {
          text: {
            type: String,
            default: "Explore Now"
          },
          link: {
            type: String,
            default: "/page-services-1"
          },
          btnClass: {
            type: String,
            default: "btn-gradient"
          },
          iconClass: {
            type: String,
            default: "stroke-white"
          },
          visible: {
            type: Boolean,
            default: true
          },
          backgroundColor: {
            type: String,
            default: "#6342EC"
          },
          textColor: {
            type: String,
            default: "#FFFFFF"
          }
        },
        secondary: {
          text: {
            type: String,
            default: "Contact Us"
          },
          link: {
            type: String,
            default: "/page-contact-1"
          },
          btnClass: {
            type: String,
            default: "btn-outline-secondary"
          },
          iconClass: {
            type: String,
            default: "stroke-dark"
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
    contact1: {
      badge: {
        type: String,
        default: "İletişime Geçin"
      },
      badgeVisible: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: "Ekibimiz İle İletişime Geçin"
      },
      titleColor: {
        type: String,
        default: "#111827"
      },
      description: {
        type: String,
        default: "Yardıma hazır uzmanlarımızla kapsamlı bir hizmet ajansıyız. <br />24 saat içinde sizinle iletişime geçeceğiz."
      },
      descriptionColor: {
        type: String,
        default: "#6E6E6E"
      },
      backgroundColor: {
        type: String,
        default: "#ffffff"
      },
      formTitle: {
        type: String,
        default: "Mesaj Bırakın"
      },
      chatTitle: {
        type: String,
        default: "Bizimle sohbet edin"
      },
      chatDescription: {
        type: String,
        default: "Destek ekibimiz 7/24 hizmetinizdedir"
      },
      whatsappLink: {
        type: String,
        default: "#"
      },
      viberLink: {
        type: String,
        default: "#"
      },
      messengerLink: {
        type: String,
        default: "#"
      },
      emailTitle: {
        type: String,
        default: "Bize e-posta gönderin"
      },
      emailDescription: {
        type: String,
        default: "Ekibimiz sorularınıza hızlı bir şekilde yanıt verecektir"
      },
      supportEmail: {
        type: String,
        default: "destek@infinia.com"
      },
      showEmail: {
        type: Boolean,
        default: true
      },
      inquiryTitle: {
        type: String,
        default: "Daha fazla bilgi için"
      },
      inquiryDescription: {
        type: String,
        default: "Anında yardım için bize ulaşın"
      },
      phoneNumber: {
        type: String,
        default: "+01 (24) 568 900"
      },
      showPhone: {
        type: Boolean,
        default: true
      },
      addressTitle: {
        type: String,
        default: "Adresimiz"
      },
      addressDescription: {
        type: String,
        default: "Bizi ziyaret edin"
      },
      address: {
        type: String,
        default: "Atatürk Cad. No:123, 34000 İstanbul, Türkiye"
      },
      showAddress: {
        type: Boolean,
        default: true
      },
      services: {
        type: Array,
        default: [
          "Araştırma planlaması",
          "Finans Danışmanlığı",
          "İş promosyonu",
          "İş Danışmanlığı",
          "Finans Danışmanlığı",
          "İş promosyonu"
        ]
      },
      buttonColor: {
        type: String,
        default: "#6342EC"
      },
      buttonTextColor: {
        type: String,
        default: "#FFFFFF"
      },
      badgeColor: {
        type: String,
        default: "rgba(99, 66, 236, 0.1)"
      }
    },
    services5: {
      title: {
        type: String,
        default: "Explore Our Projects"
      },
      titleColor: {
        type: String,
        default: "#333333"
      },
      subtitle: {
        type: String,
        default: "What we offers"
      },
      subtitleVisible: {
        type: Boolean,
        default: true
      },
      subtitleBackgroundColor: {
        type: String,
        default: "#f1f0fe"
      },
      subtitleTextColor: {
        type: String,
        default: "#6342EC"
      },
      description: {
        type: String,
        default: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      descriptionColor: {
        type: String,
        default: "#6E6E6E"
      },
      buttonText: {
        type: String,
        default: "Get Free Quote"
      },
      buttonVisible: {
        type: Boolean,
        default: true
      },
      buttonLink: {
        type: String,
        default: "#"
      },
      linkText: {
        type: String,
        default: "How We Work"
      },
      linkVisible: {
        type: Boolean,
        default: true
      },
      linkUrl: {
        type: String,
        default: "#"
      },
      backgroundColor: {
        type: String,
        default: "#ffffff"
      },
      buttonColor: {
        type: String,
        default: "#6342EC"
      },
      buttonTextColor: {
        type: String,
        default: "#FFFFFF"
      },
      filterAllText: {
        type: String,
        default: "Hepsi"
      },
      filterButtonColor: {
        type: String,
        default: "#6342EC"
      },
      filterButtonTextColor: {
        type: String,
        default: "#FFFFFF"
      }
    },
    project2: {
      title: {
        type: String,
        default: "Our featured projects"
      },
      titleColor: {
        type: String,
        default: "#333333"
      },
      subtitle: {
        type: String,
        default: "Recent work"
      },
      subtitleVisible: {
        type: Boolean,
        default: true
      },
      subtitleBackgroundColor: {
        type: String,
        default: "rgba(99, 66, 236, 0.1)"
      },
      subtitleTextColor: {
        type: String,
        default: "#6342EC"
      },
      description: {
        type: String,
        default: "⚡Don't miss any contact. Stay connected."
      },
      descriptionColor: {
        type: String,
        default: "#6E6E6E"
      },
      backgroundColor: {
        type: String,
        default: "#f8f9fa"
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Other", OtherSchema); 