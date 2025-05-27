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
      title: {
        type: String,
        default: "Our Latest Articles"
      },
      subtitle: {
        type: String,
        default: "Explore the insights and trends shaping our industry"
      },
      seeAllLink: {
        type: String,
        default: "#"
      }
    },
    blog2: {
      badge: {
        type: String,
        default: "From Blog"
      },
      title: {
        type: String,
        default: "Our Latest News and Articles"
      },
      subtitle: {
        type: String,
        default: "Explore the insights and trends shaping our industry. 🔥"
      },
      seeAllLink: {
        type: String,
        default: "#"
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
      subtitle: {
        type: String,
        default: "Explore the insights and trends shaping our industry"
      }
    },
    contact1: {
      badge: {
        type: String,
        default: "İletişime Geçin"
      },
      title: {
        type: String,
        default: "Ekibimiz İle İletişime Geçin"
      },
      description: {
        type: String,
        default: "Yardıma hazır uzmanlarımızla kapsamlı bir hizmet ajansıyız. <br />24 saat içinde sizinle iletişime geçeceğiz."
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
      salesEmail: {
        type: String,
        default: "satis@infinia.com"
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
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Other", OtherSchema); 