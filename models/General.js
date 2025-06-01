const mongoose = require("mongoose");

const GeneralSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      default: "Infinia"
    },
    siteDescription: {
      type: String,
      default: "Multi-purpose Bootstrap 5 Template"
    },
    favicon: {
      type: String,
      default: ""
    },
    theme: {
      headerStyle: {
        type: Number,
        default: 1
      },
      footerStyle: {
        type: Number,
        default: 1
      }
    },
    cloudinary: {
      cloudName: {
        type: String,
        default: "dbw3ozdoh"
      },
      apiKey: {
        type: String,
        default: "742373231915158"
      },
      apiSecret: {
        type: String,
        default: "rlJxEB-nHt5b6dIywf57q_fc0iE"
      }
    },
    iyzico: {
      apiKey: {
        type: String,
        default: "sandbox-OwAK76eKxLfPmFS3uF65m3yOsohhKD3B"
      },
      secretKey: {
        type: String,
        default: "sandbox-P5Ppp3OxgdCQnfbCoZcaUEacUdv54l6i"
      },
      uri: {
        type: String,
        default: "https://sandbox-api.iyzipay.com"
      }
    },
    whatsapp: {
      enabled: {
        type: Boolean,
        default: true
      },
      phoneNumber: {
        type: String,
        default: "+905555555555"
      },
      message: {
        type: String,
        default: "Merhaba, size nasıl yardımcı olabilirim?"
      }
    },
    cookieConsent: {
      enabled: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: "Gizliliğinize değer veriyoruz"
      },
      description: {
        type: String,
        default: "Çerezler ile deneyiminizi iyileştiriyoruz. \"Tümünü Kabul Et\" seçeneğine tıklayarak, çerezlerin kullanımına izin vermiş olursunuz."
      },
      modalTitle: {
        type: String,
        default: "Çerez Tercihlerini Özelleştir"
      },
      modalDescription: {
        type: String,
        default: "Gezinmenize yardımcı olmak ve belirli işlevleri gerçekleştirmek için çerezleri kullanıyoruz."
      },
      necessaryTitle: {
        type: String,
        default: "Gerekli"
      },
      necessaryDescription: {
        type: String,
        default: "Gerekli çerezler, güvenli giriş yapma veya tercih ayarlarınızı düzenleme gibi bu sitenin temel özelliklerini etkinleştirmek için gereklidir."
      },
      functionalTitle: {
        type: String,
        default: "İşlevsel"
      },
      functionalDescription: {
        type: String,
        default: "İşlevsel çerezler, web sitesi içeriğini sosyal medya platformlarında paylaşma ve diğer üçüncü taraf özellikleri sağlar."
      },
      analyticsTitle: {
        type: String,
        default: "Analitik"
      },
      analyticsDescription: {
        type: String,
        default: "Analitik çerezler, ziyaretçilerin nasıl gezindiğini anlamamıza yardımcı olur ve site performansı hakkında bilgi sağlar."
      },
      performanceTitle: {
        type: String,
        default: "Performans"
      },
      performanceDescription: {
        type: String,
        default: "Performans çerezleri, web sitesinin performans ölçümlerini anlayarak kullanıcı deneyimini iyileştirmemize yardımcı olur."
      },
      moreInfoText: {
        type: String,
        default: "Daha fazla göster"
      },
      acceptAllText: {
        type: String,
        default: "Tümünü Kabul Et"
      },
      rejectAllText: {
        type: String,
        default: "Tümünü Reddet"
      },
      customizeText: {
        type: String,
        default: "Özelleştir"
      },
      savePreferencesText: {
        type: String,
        default: "Tercihlerimi Kaydet"
      },
      alwaysActiveText: {
        type: String,
        default: "Aktif"
      },
      iconColor: {
        type: String,
        default: "#000000"
      },
      buttonBgColor: {
        type: String,
        default: "#cccccc"
      },
      position: {
        type: String,
        enum: ["bottom-left", "bottom-right"],
        default: "bottom-left"
      }
    },
    colors: {
      primaryColor: {
        type: String,
        default: "#0088cc"
      },
      secondaryColor: {
        type: String,
        default: "#f7f7f7"
      },
      accentColor: {
        type: String,
        default: "#fd4a36"
      },
      textColor: {
        type: String,
        default: "#333333"
      },
      darkPrimaryColor: {
        type: String,
        default: "#1a1a1a"
      },
      darkSecondaryColor: {
        type: String,
        default: "#2d2d2d"
      },
      darkAccentColor: {
        type: String,
        default: "#fd4a36"
      },
      darkTextColor: {
        type: String,
        default: "#f5f5f5"
      }
    },
    seo: {
      general: {
        title: {
          type: String,
          default: "WordPress Clone | Modern CMS Solution"
        },
        description: {
          type: String,
          default: "WordPress Clone ile web sitenizi hızlı ve kolay bir şekilde oluşturun."
        },
        keywords: {
          type: String,
          default: "wordpress, clone, website, cms, blog"
        },
        ogTitle: {
          type: String,
          default: "WordPress Clone | Modern CMS"
        },
        ogDescription: {
          type: String,
          default: "WordPress Clone ile web sitenizi hızlı ve kolay bir şekilde oluşturun."
        },
        ogImage: {
          type: String,
          default: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
        }
      },
      pages: {
        type: Array,
        default: [
          {
            id: "home",
            name: "Ana Sayfa",
            url: "/",
            title: "Ana Sayfa | WordPress Clone",
            description: "WordPress Clone ile web sitenizi hızlı ve kolay bir şekilde oluşturun.",
            lastUpdated: "2023-06-15",
            keywords: "wordpress, clone, website, cms, blog",
            ogTitle: "WordPress Clone | Modern CMS",
            ogDescription: "WordPress Clone ile web sitenizi hızlı ve kolay bir şekilde oluşturun.",
            ogImage: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
          },
          {
            id: "blog",
            name: "Blog",
            url: "/blog",
            title: "Blog | WordPress Clone",
            description: "En son makalelerimizi keşfedin ve bilgi birikimimizden yararlanın.",
            lastUpdated: "2023-06-14",
            keywords: "blog, makaleler, wordpress, içerik, yazılar",
            ogTitle: "Blog Makaleleri | WordPress Clone",
            ogDescription: "En son makalelerimizi keşfedin ve bilgi birikimimizden yararlanın.",
            ogImage: "https://res.cloudinary.com/demo/image/upload/v1493119370/sample2.jpg"
          },
          {
            id: "about",
            name: "Hakkımızda",
            url: "/hakkimizda",
            title: "Hakkımızda | WordPress Clone",
            description: "WordPress Clone'un arkasındaki hikayeyi ve ekibi tanıyın.",
            lastUpdated: "2023-06-12",
            keywords: "hakkımızda, şirket, ekip, misyon, vizyon",
            ogTitle: "Hakkımızda | WordPress Clone",
            ogDescription: "WordPress Clone'un arkasındaki hikayeyi ve ekibi tanıyın.",
            ogImage: "https://res.cloudinary.com/demo/image/upload/v1493119383/sample3.jpg"
          },
          {
            id: "contact",
            name: "İletişim",
            url: "/iletisim",
            title: "İletişim | WordPress Clone",
            description: "Bizimle iletişime geçin. Sorularınızı yanıtlamaktan memnuniyet duyarız.",
            lastUpdated: "2023-06-10",
            keywords: "iletişim, bize ulaşın, adres, telefon, email",
            ogTitle: "İletişim | WordPress Clone",
            ogDescription: "Bizimle iletişime geçin. Sorularınızı yanıtlamaktan memnuniyet duyarız.",
            ogImage: "https://res.cloudinary.com/demo/image/upload/v1493118464/sample4.jpg"
          },
          {
            id: "service",
            name: "Hizmetler",
            url: "/hizmetler",
            title: "Hizmetlerimiz | WordPress Clone",
            description: "Sunduğumuz profesyonel hizmetleri keşfedin ve ihtiyaçlarınıza uygun çözümleri bulun.",
            lastUpdated: "2023-06-08",
            keywords: "hizmetler, çözümler, servisler, örnekler, işler",
            ogTitle: "Hizmetlerimiz | WordPress Clone",
            ogDescription: "Sunduğumuz profesyonel hizmetleri keşfedin ve ihtiyaçlarınıza uygun çözümleri bulun.",
            ogImage: "https://res.cloudinary.com/demo/image/upload/v1493118555/sample5.jpg"
          }
        ]
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("General", GeneralSchema); 