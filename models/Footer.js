const mongoose = require("mongoose");

const FooterSchema = new mongoose.Schema(
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
    copyright: {
      type: String,
      default: "Copyright © 2024 Infinia. All Rights Reserved",
    },
    description: {
      type: String,
      default: "You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.",
    },
    socialLinks: {
      type: Array,
      default: [
        {
          _id: "1",
          name: "Facebook",
          link: "https://www.facebook.com/",
          order: 0
        },
        {
          _id: "2",
          name: "Twitter",
          link: "https://twitter.com/",
          order: 1
        },
        {
          _id: "3",
          name: "LinkedIn",
          link: "https://www.linkedin.com/",
          order: 2
        },
        {
          _id: "4",
          name: "Instagram",
          link: "https://www.instagram.com/",
          order: 3
        }
      ],
    },
    columns: {
      type: Array,
      default: [
        {
          _id: "1",
          title: "Company",
          order: 0,
          links: [
            {
              _id: "1",
              name: "Mission & Vision",
              link: "#",
              order: 0
            },
            {
              _id: "2",
              name: "Our Team",
              link: "#",
              order: 1
            },
            {
              _id: "3",
              name: "Careers",
              link: "#",
              order: 2
            }
          ]
        },
        {
          _id: "2",
          title: "Resource",
          order: 1,
          links: [
            {
              _id: "1",
              name: "Knowledge Base",
              link: "#",
              order: 0
            },
            {
              _id: "2",
              name: "Documents",
              link: "#",
              order: 1
            }
          ]
        }
      ],
    },
    contactItems: {
      address: {
        type: String,
        default: "0811 Erdman Prairie, Joaville CA",
      },
      phone: {
        type: String,
        default: "+01 (24) 568 900",
      },
      email: {
        type: String,
        default: "contact@infinia.com",
      },
      hours: {
        type: String,
        default: "Mon-Fri: 9am-5pm",
      },
    },
    instagramPosts: {
      type: Array,
      default: [],
    },
    appLinks: {
      type: Array,
      default: [],
    },
    showAppLinks: {
      type: Boolean,
      default: false,
    },
    showInstagram: {
      type: Boolean,
      default: false,
    },
    showPrivacyLinks: {
      type: Boolean,
      default: true,
    },
    showSocialLinks: {
      type: Boolean,
      default: true,
    },
    privacyLinks: {
      type: Array,
      default: [
        {
          _id: "1",
          name: "Privacy policy",
          link: "#",
          order: 0
        },
        {
          _id: "2",
          name: "Cookies",
          link: "#",
          order: 1
        },
        {
          _id: "3",
          name: "Terms of service",
          link: "#",
          order: 2
        }
      ],
    },
    footerComponent: {
      type: String,
      default: "Footer1",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Footer", FooterSchema); 