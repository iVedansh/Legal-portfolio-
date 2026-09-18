import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About Advocate",
      "practiceAreas": "Practice Areas",
      "resources": "Resources",
      "faqs": "FAQs",
      "contact": "Contact",
      "callNow": "Call Now",
      "whatsapp": "WhatsApp",
      "requestConsultation": "Request a Consultation",
      "yearsOfPractice": "Years of Practice",
      "heroTitle": "Vineet Kumar Misra",
      "heroSubtitle": "Advocate | High Court, Civil Court, Lucknow",
      "heroSupport": "Experienced legal practice in Lucknow, with a focus on matrimonial and family matters, Will-related work, civil matters, criminal matters and court proceedings.",
    }
  },
  hi: {
    translation: {
      "home": "होम",
      "about": "अधिवक्ता के बारे में",
      "practiceAreas": "अभ्यास क्षेत्र",
      "resources": "संसाधन",
      "faqs": "सामान्य प्रश्न",
      "contact": "संपर्क करें",
      "callNow": "अभी कॉल करें",
      "whatsapp": "व्हाट्सएप",
      "requestConsultation": "परामर्श का अनुरोध करें",
      "yearsOfPractice": "अभ्यास के वर्ष",
      "heroTitle": "विनीत कुमार मिश्रा",
      "heroSubtitle": "अधिवक्ता | उच्च न्यायालय, सिविल न्यायालय, लखनऊ",
      "heroSupport": "लखनऊ में अनुभवी कानूनी अभ्यास, वैवाहिक और पारिवारिक मामलों, वसीयत से संबंधित कार्य, नागरिक मामलों, आपराधिक मामलों और अदालती कार्यवाही पर ध्यान देने के साथ।",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;