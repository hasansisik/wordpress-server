const { HomePage, PrivacyPage, TermsPage } = require("../models/Page");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Get page content
const getPage = async (req, res) => {
  const { pageType } = req.params;
  
  if (!pageType || !["home", "privacy", "terms"].includes(pageType)) {
    throw new CustomError.BadRequestError("Invalid page type");
  }
  
  try {
    let page;
    
    if (pageType === "home") {
      // Find or create home page
      page = await HomePage.findOne({});
      if (!page) {
        page = await HomePage.create({
          sections: [
            {
              id: `hero1-${Date.now()}`,
              name: "Hero 1",
              type: "Hero1",
              description: "Main hero with floating card and shapes"
            },
            {
              id: `cta4-${Date.now()}`,
              name: "CTA 4",
              type: "Cta4",
              description: "Feature showcase with video"
            },
            {
              id: `services2-${Date.now()}`,
              name: "Services 2", 
              type: "Services2",
              description: "Services grid with icons"
            },
            {
              id: `faqs2-${Date.now()}`,
              name: "FAQs 2",
              type: "Faqs2",
              description: "Two-column FAQ accordion"
            }
          ]
        });
      }
    } else if (pageType === "privacy") {
      // Find or create privacy page
      page = await PrivacyPage.findOne({});
      if (!page) {
        page = await PrivacyPage.create({
          hero: {
            title: "Infinia System Privacy Policy",
            description: "At Infinia System, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services."
          },
          content: "<p>Infinia System (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, platform, and services (collectively, \"Services\"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Services.</p><h5>Information We Collect</h5><p>We may collect personal information that you provide directly to us, including but not limited to:</p><ul><li><p>Contact Information: Name, email address, phone number, and postal address.</p></li><li><p>Account Information: Username, password, and other login details.</p></li><li><p>Payment Information: Credit card details, billing address, and transaction history.</p></li><li><p>Communication Information: Feedback, messages, and other communications with us.</p></li></ul><h5>Non-Personal Information</h5><p>We may also collect non-personal information about your interactions with our Services, including but not limited to:</p><ul><li><p>Usage Data: IP address, browser type, operating system, access times, and pages viewed.</p></li><li><p>Device Information: Device type, unique device identifiers, and mobile network information.</p></li><li><p>Location Data: General location information based on IP address or GPS data (with your consent).</p></li></ul><h5>How We Use Your Information</h5><p>We may use the information we collect for various purposes, including but not limited to:</p><ul><li><p>Providing, maintaining, and improving our Services.</p></li><li><p>Processing transactions and managing billing.</p></li><li><p>Communicating with you about your account and our Services.</p></li><li><p>Responding to your inquiries and providing customer support.</p></li><li><p>Analyzing usage patterns to enhance user experience.</p></li><li><p>Sending marketing and promotional communications (with your consent).</p></li><li><p>Complying with legal obligations and protecting our legal rights.</p></li></ul><p>Overall, Infinia System's commitment to enhancing user engagement through personalized experiences, optimized design, and proactive support transformed their user base and positioned them for continued growth and success.</p><h5>How We Share Your Information</h5><p>We may share your information in the following circumstances:</p><ul><li><p>Service Providers: With third-party vendors, consultants, and service providers who perform services on our behalf.</p></li><li><p>Business Transfers: In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</p></li><li><p>Legal Requirements: To comply with legal obligations, enforce our terms of service, or protect our rights, privacy, safety, or property.</p></li><li><p>Consent: With your consent or at your direction.</p></li></ul><h5>Data Security</h5><p>We implement reasonable administrative, technical, and physical security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.</p><h5>Your Rights and Choices</h5><p>You have the following rights regarding your personal information:</p><ul><li><p>Access and Update: You can access and update your personal information through your account settings.</p></li><li><p>Opt-Out: You can opt out of receiving marketing communications by following the unsubscribe instructions in those communications.</p></li><li><p>Data Portability: You can request a copy of your personal information in a structured, machine-readable format.</p></li><li><p>Deletion: You can request the deletion of your personal information, subject to certain exceptions prescribed by law.</p></li></ul><h5>Children's Privacy</h5><p>Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.</p><h5>Changes to This Privacy Policy</h5><p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email (sent to the email address specified in your account) or by means of a notice on our Services prior to the change becoming effective. We encourage you to review this Privacy Policy periodically to stay informed about our information practices.</p>"
        });
      }
    } else if (pageType === "terms") {
      // Find or create terms page
      page = await TermsPage.findOne({});
      if (!page) {
        page = await TermsPage.create({
          hero: {
            title: "Terms and Conditions",
            description: "Welcome to Infinia System. These Terms and Conditions (\"Terms\") govern your use of our website, platform, and services (collectively, \"Services\"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Services."
          },
          content: "<h4 class=\"text-primary\">Use of Services</h4><h5 class=\"my-3\">Eligibility</h5><p>You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement.</p><h5 class=\"mb-3 mt-4\">Account Registration</h5><p>To access certain features of our Services, you may be required to create an account. You agree to:</p><ul><li>Provide accurate, current, and complete information during the registration process.</li><li>Maintain and promptly update your account information to keep it accurate, current, and complete.</li><li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li><li>Notify us immediately if you discover or suspect any security breaches related to your account.</li></ul><h5 class=\"mb-3 mt-4\">Prohibited Conduct</h5><p>You agree not to:</p><ul><li>Use our Services for any illegal or unauthorized purpose.</li><li>Violate any laws, rules, or regulations in connection with your use of our Services.</li><li>Interfere with or disrupt the operation of our Services.</li><li>Impersonate any person or entity, or falsely state or otherwise misrepresent yourself.</li><li>Engage in any activity that could harm or damage our Services, reputation, or users.</li></ul><h4 class=\"text-primary mt-4\">Intellectual Property</h4><h5 class=\"my-3\">Ownership</h5><p>All content and materials provided through our Services, including but not limited to text, graphics, logos, images, and software, are the property of Infinia System or our licensors and are protected by intellectual property laws.</p><h5 class=\"mb-3 mt-4\">License</h5><p>We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for personal and commercial purposes in accordance with these Terms. You may not:</p><ul><li>Copy, modify, distribute, sell, or lease any part of our Services.</li><li>Reverse engineer or attempt to extract the source code of our software.</li></ul><h4 class=\"text-primary mt-4\">User Content</h4><h5 class=\"my-3\">Submissions</h5><p>By submitting any content to our Services, you grant us a worldwide, perpetual, irrevocable, non-exclusive, royalty-free, fully paid, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the content in connection with our Services and our business.</p><h5 class=\"mb-3 mt-4\">Responsibility</h5><p>You are solely responsible for the content you submit and the consequences of sharing it. You represent and warrant that you have all necessary rights to submit the content and that it does not infringe or violate any third-party rights or any laws.</p><h4 class=\"text-primary mt-4\">Payment and Billing</h4><h5 class=\"my-3\">Fees</h5><p>Certain features of our Services may be subject to fees. You agree to pay all applicable fees in connection with your use of our Services. We reserve the right to change our fees at any time, with notice to you if required by applicable law.</p><h5 class=\"my-3\">Billing</h5><p>You authorize us to charge your designated payment method for the fees due. If we are unable to process your payment, we may suspend or terminate your access to the Services.</p><p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p><h5 class=\"mb-3 mt-4\">Termination</h5><p>We may terminate or suspend your access to our Services, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our Services will immediately cease.</p><h4 class=\"text-primary mt-4\">Disclaimers and Limitation of Liability</h4><h5 class=\"my-3\">Disclaimers</h5><p>Our Services are provided \"as is\" and \"as available\" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, and course of dealing or performance.</p><h5 class=\"mb-3 mt-4\">Limitation of Liability</h5><p>To the maximum extent permitted by law, Infinia System and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p><ul><li>Your use or inability to use our Services.</li><li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li><li>Any interruption or cessation of transmission to or from our Services.</li></ul><h5 class=\"mb-3 mt-4\">Indemnification</h5><p>You agree to defend, indemnify, and hold harmless Infinia System and its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:</p><ul><li>Your use of and access to the Services.</li><li>Your violation of any term of these Terms.</li><li>Your violation of any third-party right, including without limitation any intellectual property, property, or privacy right.</li><li>Any claim that your content caused damage to a third party.</li></ul><h5 class=\"mb-3 mt-4\">Governing Law</h5><p>These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the personal jurisdiction of the courts located in [Your Jurisdiction] for the purpose of litigating all such claims or disputes.</p><h5 class=\"mb-3 mt-4\">Changes to Terms</h5><p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.</p>"
        });
      }
    }
    
    // Add pageType to the response for frontend consistency
    const response = {
      ...page.toObject(),
      pageType
    };
    
    res.status(StatusCodes.OK).json({ page: response });
  } catch (error) {
    console.error(`Error getting ${pageType} page:`, error);
    throw new CustomError.InternalServerError(`Failed to get ${pageType} page`);
  }
};

// Update page content
const updatePage = async (req, res) => {
  const { pageType } = req.params;
  
  if (!pageType || !["home", "privacy", "terms"].includes(pageType)) {
    throw new CustomError.BadRequestError("Invalid page type");
  }
  
  try {
    let page;
    
    if (pageType === "home") {
      // Update home page
      const { sections } = req.body;
      page = await HomePage.findOne({});
      
      if (!page) {
        page = await HomePage.create({ sections });
      } else if (sections !== undefined) {
        page.sections = sections;
        await page.save();
      }
    } else if (pageType === "privacy") {
      // Update privacy page
      const { hero, content } = req.body;
      page = await PrivacyPage.findOne({});
      
      if (!page) {
        page = await PrivacyPage.create({ hero, content });
      } else {
        if (hero) {
          if (!page.hero) page.hero = {};
          if (hero.title !== undefined) page.hero.title = hero.title;
          if (hero.description !== undefined) page.hero.description = hero.description;
        }
        if (content !== undefined) page.content = content;
        await page.save();
      }
    } else if (pageType === "terms") {
      // Update terms page
      const { hero, content } = req.body;
      page = await TermsPage.findOne({});
      
      if (!page) {
        page = await TermsPage.create({ hero, content });
      } else {
        if (hero) {
          if (!page.hero) page.hero = {};
          if (hero.title !== undefined) page.hero.title = hero.title;
          if (hero.description !== undefined) page.hero.description = hero.description;
        }
        if (content !== undefined) page.content = content;
        await page.save();
      }
    }
    
    // Add pageType to the response for frontend consistency
    const response = {
      ...page.toObject(),
      pageType
    };
    
    res.status(StatusCodes.OK).json({ page: response });
  } catch (error) {
    console.error(`Error updating ${pageType} page:`, error);
    throw new CustomError.InternalServerError(`Failed to update ${pageType} page`);
  }
};

module.exports = {
  getPage,
  updatePage,
}; 