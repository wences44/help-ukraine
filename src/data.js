const countries = [
  {
    id: 1,
    name: "Austria",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/AT.svg",
    entities: [
      {
        id: 1,
        entity: "Goverment",
        url: "https://www.oesterreich.gv.at/en/themen/gesundheit_und_notfaelle/Informationen-f%C3%BCr-ukrainische-Staatsangeh%C3%B6rige.html",
        phone: "+43 1 715 10 51 - 120",
      },
      {
        id: 2,
        entity: "United Nations",
        url: "https://help.unhcr.org/austria/information-for-ukrainian-nationals/",
      },
      {
        id: 3,
        entity: "European Union Agency for Asylum PDF Booklet",
        url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjRos_ruf3-AhUcM0QIHUALCuMQFnoECCkQAQ&url=https%3A%2F%2Feuaa.europa.eu%2Fsites%2Fdefault%2Ffiles%2F2022-06%2FBooklet_Austria_EN.pdf&usg=AOvVaw1de_uczdn_DMa8HMqQlJts",
      },
    ],
  },
  {
    id: 2,
    name: "Belgium",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/BE.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://info-ukraine.be/en/assistance-belgium",
        services:
          "Legal aid, accomodation, medical care, education for youth and more",
      },
      {
        id: 2,
        entity: "Brussels city",
        url: "https://www.helpukraine.brussels/en",
        services:
          "Legal aid, accomodation, medical care, education for youth and more",
      },
      {
        id: 3,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-belgium-%d1%8f-%d0%b2-%d0%b1%d0%b5%d0%bb%d1%8c%d0%b3%d1%96%d1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
      {
        id: 4,
        entity: "United Nations",
        url: "https://help.unhcr.org/belgium/en/ukraine-situation/",
      },
      {
        id: 5,
        entity: "European Union Agency for Asylum PDF Booklet",
        url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiGu4Dg7__-AhUglmoFHXeJAo0QFnoECB4QAQ&url=https%3A%2F%2Feuaa.europa.eu%2Fsites%2Fdefault%2Ffiles%2F2022-06%2FBooklet_Belgium_EN.pdf&usg=AOvVaw3GrU0vRsb4kuNmSL1pbF7_",
      },
    ],
  },
  {
    id: 3,
    name: "Bulgaria",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/BG.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://ukraine.gov.bg/",
        phone: " +380/322-465-075",
        services:
          "legal aid, accommodation, medical care, humanitarian help and more",
      },
      {
        id: 2,
        entity: "United Nations",
        url: "https://help.unhcr.org/bulgaria/information-for-ukrainian-nationals/",
      },
      {
        id: 3,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-bulgaria-%D1%8F-%D0%B2-%D0%B1%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%96%D1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
      {
        id: 4,
        entity: "UN migration",
        url: "https://bulgaria.iom.int/ukraine-response",
        services: "Migration",
      },
    ],
  },
  {
    id: 4,
    name: "Croatia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/HR.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://hrvatskazaukrajinu.gov.hr/ua",
        services: "Inmigration, Health Care, Accommodation and more",
      },
      {
        id: 2,
        entity: "European Commision",
        url: "https://ec.europa.eu/migrant-integration/library-document/croatia-useful-information-displaced-persons-ukraine_en",
        services: "Accommodation and useful information",
      },
      {
        id: 3,
        entity: "Expat in Croatia",
        url: "https://www.expatincroatia.com/ukraine-citizens/",
        services:
          "Inmigration, Consulting, Accommodation, Citizenship, Daily Life",
      },
      {
        id: 4,
        entity: "United Nations",
        url: "https://help.unhcr.org/croatia/",
      },
    ],
  },

  {
    id: 5,
    name: "Czech Republic",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CZ.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/czech",
      },
      {
        id: 2,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/uk/i-am-in-czech-republic-%d1%8f-%d0%b2-%d1%87%d0%b5%d1%85%d1%96%d1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 6,
    name: "Denmark",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/DK.svg",
    entities: [
      {
        
        id: 1,
        entity: "Danish authorities information for Ukrainians",
        url: "https://en.kriseinformation.dk/war/for-ukrainians"
      },
      { id: 2,
        entity: "Information on temporary protection in Denmark",
        url: "https://euaa.europa.eu/sites/default/files/2022-09/Booklet_Denmark_EN.pdf"
      },
      {
        id: 3,
        entity: "United Nations",
        url: "https://help.unhcr.org/denmark",
      },
    ],
  },
  {
    id: 7,
    name: "Estonia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/EE.svg",
    entities: [
      { id: 1,
        entity: "Estonian Government help for Ukrainian refugees",
        url: "https://kriis.ee/en/security-situation-europe/ukrainian-war-refugees"
      },
      { id: 2,
        entity: "Information for Ukrainian refugees arriving to Tallinn",
        url: "https://www.tallinn.ee/en/ukraine"
      },
      {
        id: 3,
        entity: "United Nations",
        url: "https://help.unhcr.org/estonia/information-for-people-fleeing-ukraine/",
        phone: "+36 80 984 583",
      },
    ],
  },
  {
    id: 8,
    name: "Finland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/FI.svg",
    entities: [
      
      {
        id: 1,
        entity: "Finland government assistance",
        url: "https://intermin.fi/en/helping-ukrainians"
      },
      {
        id: 2,
        entity: "FinUA Urgent support, job assistance",
        url: "https://finua.org/en"
      },
      {
        id: 3,
        entity: "Treatment for Ukraine",
        url: "https://www.treatment4ukraine.com/en/countries/finland/"
      },
     
      {
        id: 4,
        entity: "United Nations",
        url: "https://help.unhcr.org/finland/information-for-people-fleeing-ukraine-seeking-protection-in-finland/",
        phone: "+358 295 790 605",
      },
    ],
  },
  {
    id: 9,
    name: "France",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/france/informations-pour-les-personnes-qui-arrivent-dukraine/",
      },
      {
        id: 2,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-france-%d1%8f-%d1%83-%d1%84%d1%80%d0%b0%d0%bd%d1%86%d1%96%d1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 10,
    name: "Georgia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GE.svg",
    entities: [
      {
        id: 1,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-georgia-%d1%8f-%d0%b2-%d0%b3%d1%80%d1%83%d0%b7%d1%96%d1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
      {
        id: 2,
        entity: "Ambassador Hotel",
        phone: "Contact +995800800909",
        services:
          "Ambassador Hotel offers free accommodation for Ukrainians in Tbilisi, Kachreti and Gordredzi. in ",
      },
    ],
  },
  {
    id: 11,
    name: "Germany",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
    entities: [
      {
        id: 1,
        entity: "Federal Government",
        url: "https://www.germany4ukraine.de/hilfeportal-en",
        phone: "0800 500 225 0",
        services:
          "residence permit, integration, healthcare, accomodation, report war crime, education, mobility",
      },
      {
        id: 2,
        entity: "Berlin Government",
        url: "https://www.berlin.de/ukraine/en/arrive/",
        phone: "+49 30 90 127 127",
        services: "residence permit, accomodation, support",
      },
      {
        id: 3,
        entity: "Federal Agency",
        url: "https://www.arbeitsagentur.de/ukraine/ukraine-en",
        services: "Employement, financial help",
      },
      {
        id: 4,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-germany-%d1%8f-%d0%b2-%d0%bd%d1%96%d0%bc%d0%b5%d1%87%d1%87%d0%b8%d0%bd%d1%96/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
      {
        id: 5,
        entity: "United Nations",
        url: "https://help.unhcr.org/germany/information-on-ukraine/",
      },
    ],
  },
  {
    id: 12,
    name: "Greece",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GR.svg",
    entities: [
      {
        id: 1,
        entity: "UN Migration",
        url: "https://greece.iom.int/hellenic-integration-support-beneficiaries-international-protection-and-temporary-protection-helios",
        phone: "+30 210 9919040",
      },
      {
        id: 2,
        entity: "UN Refugee Agency",
        url: "https://www.unhcr.org/gr/#_ga=2.2222067.274725204.1682451029-1836247767.1682451029",
      },
    ],
  },
  {
    id: 13,
    name: "Hungary",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/HU.svg",
    entities: [
      {
        id: 1,
        entity: "Ingatlan",
        url: "https://ingatlan.com/",
        services: "Accommodation",
      },
      {
        id: 2,
        entity: "United Nations",
        url: "https://help.unhcr.org/hungary/",
        phone: "+36 80 984 583",
      },
      {
        id: 3,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-hungary-%d1%8f-%d0%b2-%d1%83%d0%b3%d0%be%d1%80%d1%89%d0%b8%d0%bd%d1%96/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 14,
    name: "Iceland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IS.svg",
    entities: [
      
      {
        id: 1,
        entity: "Iceland government assistance",
        url: "https://island.is/en/p/ukrainian-citizens",
      },
      {
        id: 2,
        entity: "Temporary protection in Iceland",
        url: "https://euaa.europa.eu/sites/default/files/2022-07/Booklet_Iceland_EN.pdf",
      },
      {
        id: 3,
        entity: "United Nations - Iceland",
        url: "https://help.unhcr.org/iceland/information-for-people-fleeing-ukraine/",
      },
    ],
  },
  {
    id: 15,
    name: "Italy",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/italy/",
        phone: "+36 80 984 583",
      },
      {
        id: 2,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-italy-%d1%8f-%d0%b2-%d1%96%d1%82%d0%b0%d0%bb%d1%96%d1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 16,
    name: "Ireland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/ireland/uk/",
      },
    ],
  },
 
  {
    id: 17,
    name: "Latvia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/LV.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/latvia/information-for-people-fleeing-ukraine/",
        phone: "+36 80 984 583",
      },
      {
        id: 2,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-latvia-%d1%8f-%d0%b2-%d0%bb%d0%b0%d1%82%d0%b2%d1%96%d1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 18,
    name: "Lithuania",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/LT.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/lithuania/information-for-people-fleeing-ukraine/",
        phone: "+36 80 984 583",
      },
      {
        id: 2,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-lithuania-%d1%8f-%d0%b2-%d0%bb%d0%b8%d1%82%d0%b2%d1%96/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 19,
    name: "Luxembourg",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/LU.svg",
    entities: [
      {
        id: 1,
        entity: "Luxembourg government assitance",
        url: "https://maee.gouvernement.lu/en/services-aux-citoyens/accueil-de-personnes-ukraine.html",
      },
      {
        id: 2,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-luxembourg-%d1%8f-%d0%b2-%d0%bb%d1%8e%d0%ba%d1%81%d0%b5%d0%bc%d0%b1%d1%83%d1%80%d0%b7%d1%96/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 20,
    name: "Moldova",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/MD.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://dopomoga.gov.md/",
        phone: "+0 800 800 11",
      },
      {
        id: 2,
        entity: "CDA",
        url: "https://cda.md/2022/02/24/how-to-apply-for-asylum-in-moldova/",
        phone: "+373 60574848",
        services: "Information on asylum protection",
      },
      {
        id: 3,
        entity: "United Nations",
        url: "https://help.unhcr.org/moldova/",
        phone: "+373 22 780 071",
        email: "office@cnrr.ro",
      },
      {
        id: 4,
        entity: "MedPark Hospital",
        url: "https://www.instagram.com/medparkhospital/?utm_medium=copy_link",
        services: "Free medical advice",
      },
    ],
  },
  {
    id: 21,
    name: "Netherlands",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg",
    entities: [
      
      {
        id: 1,
        entity: "Netherlands government assitance",
        url: "https://www.government.nl/topics/reception-of-refugees-from-ukraine",
      },
      {
        id: 2,
        entity: "Asylum information",
        url: "https://www.refugeehelp.nl/en/ukrainian-refugee",
      },

      {
        id: 3,
        entity: "United Nations",
        url: "https://help.unhcr.org/netherlands/",
        phone: "+373 22 780 071",
        email: "office@cnrr.ro",
      },
    ],
  },
  {
    id: 22,
    name: "Norway",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/NO.svg",
    entities: [
      
      {
        id: 1,
        entity: "UDI association assistance",
        url: "https://www.udi.no/en/information-ukraine-and-russia/situation-in-ukraine/",
      },
      {
        id: 2,
        entity: "Norway government assistance",
        url: " https://www.imdi.no/en/english-pages/information-to-refugees-from-the-ukraine/",
      },
     
      {
        id: 3,
        entity: "United Nations",
        url: "https://help.unhcr.org/norway/",
        phone: "+373 22 780 071",
        email: "office@cnrr.ro",
      },
    ],
  },
  {
    id: 23,
    name: "Poland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://www.gov.pl/web/mswia-en/information-for-refugees-from-ukraine",
        phone: "+48 47 721 75 75",
        email: "kontakt@mswia.gov.pl",
      },
      {
        id: 2,
        entity: "Kancelaria Prezesa Rady Ministrow",
        url: "https://pomagamukrainie.gov.pl/",
        services: "general information",
      },
      {
        id: 3,
        entity: "Refugees Welcome Program",
        url: "https://refugeeswelcome.pl/refugee-registration",
        services: "accommodation, language courses, adaptation",
      },
      {
        id: 4,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-poland-%d1%8f-%d0%b2-%d0%bf%d0%be%d0%bb%d1%8c%d1%89%d1%96/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
      {
        id: 5,
        entity: "United Nations",
        url: "https://help.unhcr.org/poland/information-for-new-arrivals-from-ukraine/",
        phone: "",
      },
    ],
  },
  {
    id: 24,
    name: "Portugal",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg",
    entities: [
      
      {
        id: 1,
        entity: "Portuguese government assistance",
        url: "https://eportugal.gov.pt/en/migrantes-viver-e-trabalhar-em-portugal/ucrania-informacoes-e-apoios-disponiveis-em-portugal",
      },
      {
        id: 2,
        entity: "United Nations",
        url: "https://help.unhcr.org/portugal/information-for-people-fleeing-ukraine/",
      },
      {
        id: 3,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-portugal-%d1%8f-%d0%b2-%d0%bf%d0%be%d1%80%d1%82%d1%83%d0%b3%d0%b0%d0%bb%d1%96%d1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 25,
    name: "Romania",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/RO.svg",
    entities: [
      {
        id: 1,
        entity: "National Council for Refugees",
        url: "https://dopomoha.ro/uk",
        phone: "+40 730073170",
        email: "office@cnrr.ro",
        services: "Information, legal counselling",
      },
      {
        id: 2,
        entity: "United Nations",
        url: "https://help.unhcr.org/romania/",
        phone: "(004) 0213126210",
        email: "office@cnrr.ro",
      },
      {
        id: 3,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/uk/i-am-in-romania-%d1%8f-%d0%b2-%d1%80%d1%83%d0%bc%d1%83%d0%bd%d1%96%d1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 26,
    name: "Serbia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/RS.svg",
    entities: [
      
      {
        id: 1,
        entity: "Government assitance",
        url: "https://kirs.gov.rs/eng/aktuelno/contact-number-and-email-address-for-refugees-coming-from-ukraine-and-those-that-have-accommodated-them-in-serbia/3901",
      },
      {
        id: 2,
        entity: "United nations - Serbia",
        url: "https://help.unhcr.org/serbia/",
      },
    ],
  },
  {
    id: 27,
    name: "Slovakia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SK.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/slovakia/",
        phone: "",
        email: "",
      },
      {
        id: 2,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-slovakia-%d1%8f-%d0%b2-%d1%81%d0%bb%d0%be%d0%b2%d0%b0%d1%87%d1%87%d0%b8%d0%bd%d1%96/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },

  {
    id: 28,
    name: "Slovenia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SI.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://www.gov.si/en/topics/slovenias-assistance-to-the-citizens-of-ukraine/",
      },
      {
        id: 2,
        entity: "Study Institutions",
        url: "https://studyinslovenia.si/news/slovenias-assistance-to-the-citizens-of-ukraine/",
        phone: "+386 1478 7530",
      },
      {
        id: 3,
        entity: "United Nations",
        url: "https://www.unhcr.org/countries/slovenia",
      },
    ],
  },
  {
    id: 29,
    name: "Spain",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
    entities: [
      {
        id: 1,
        entity: "Madrid Government",
        url: "https://www.comunidad.madrid/servicios/ucrania",
        phone: "+34 900 822 833",
      },
     
      {
        id: 2,
        entity: "Information on temporary protection in Spain",
        url: " https://euaa.europa.eu/sites/default/files/2022-06/Booklet_Spain_EN.pdf",
      },
      {
        id: 3,
        entity: "BBVA guidance",
        url: "https://www.bbva.es/en/content/dam/public-web/bbvaes/documents/general/guia-ucrania-2.pdf",
      },
      {
        id: 4,
        entity: "United Nations",
        url: "https://help.unhcr.org/spain/ucrania-proteccion-en-espana/",
      },
    ],
  },
  {
    id: 30,
    name: "Sweden",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg",
    entities: [
      
      {
        id: 1,
        entity: "Swedish government assistance",
        url: "https://www.informationsverige.se/en/jag-har-fatt-uppehallstillstand/du-som-har-flytt-fran-kriget-i-ukraina.html/",
      },
      {
        id: 2,
        entity: "United Nations",
        url: "https://help.unhcr.org/sweden/",
        phone: "",
        email: "",
      },

      {
        id: 3,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/uk/i-am-in-sweden-%d1%8f-%d0%b2-%d1%88%d0%b2%d0%b5%d1%86%d1%96%d1%97/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
    ],
  },
  {
    id: 31,
    name: "Switzerland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CH.svg",
    entities: [
      
      {
        id: 1,
        entity: "Swiss government assistance",
        url: "https://www.sem.admin.ch/sem/en/home/asyl/ukraine.html",
      },
      {
        id: 2,
        entity: "Swiss refugee council",
        url: "https://www.refugeecouncil.ch/assistance-for-asylum-seekers/ukraine-useful-information-concerning-people-in-need-of-protection?_gl=1*17kf6z6*_gcl_au*MTU2MzMxODY1LjE2OTYzNTE0MTc.&_ga=2.14682294.102279694.1696351417-1010172242.1696351409",
      },
      
      {
        id: 3,
        entity: "United Nations",
        url: "https://help.unhcr.org/switzerland/ukraine",
        phone: "",
        email: "",
      },
    ],
  },
  {
    id: 32,
    name: "United Kingdom",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    entities: [
      {
        id: 1,
        entity: "Government Visas",
        url: "https://taplink.cc/bakhutiklaw",
      },
      {
        id: 2,
        entity: "World Jewish Relief",
        url: "https://www.worldjewishrelief.org/news/1269-urgent-update-ukraine-crisis",
        services:
          "Offers Ukrainians in the UK help and advice with language and employment.",
      },
      {
        id: 3,
        entity: "Sterling Law",
        url: "https://sterling-law.co.uk/services/",
        phone: "02078228535",
        services: "Offer registration for asylum on a simplified process.",
      },
      {
        id: 4,
        entity: "Ukrainian Institute London",
        url: "https://refugee-support.ukrainianinstitute.org.uk/",
        services:
          "Useful links, information and guidance for UK hosts looking to support Ukrainians and for Ukrainians arriving in the UK.",
        email: "info@ukrainianinstitute.org.uk",
      },
      {
        id: 5,
        entity: "United Nations",
        url: "https://help.unhcr.org/uk/unhcr-uk-information-and-links-regarding-ukraine/",
        phone: "",
        email: "",
      },
      {
        id: 6,
        entity: "International Diabetes Federation",
        url: "https://www.connectsolidarity.eu/i-am-in-the-united-kingdom-%d1%8f-%d1%83-%d1%81%d0%bf%d0%be%d0%bb%d1%83%d1%87%d0%b5%d0%bd%d0%be%d0%bc%d1%83-%d0%ba%d0%be%d1%80%d0%be%d0%bb%d1%96%d0%b2%d1%81%d1%82%d0%b2%d1%96/",
        services:
          "Rights as Ukrainian refugees, Support for people with diabetes, useful links",
      },
      {
        id: 7,
        entity: "National Funding Scheme",
        url: "https://www.nationalfundingscheme.org/ukraine",
        services: "Homestay in the UK for Ukrainian citizens.",
      },
    ],
  },
];
export default countries;
