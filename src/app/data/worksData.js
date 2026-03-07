// src/app/data/worksData.js
import conex from "../../../public/works/conex.png"
import waq3y from "../../../public/works/waq3y.png"
import ideafil from "../../../public/works/ideafil.png"
import maqas from "../../../public/works/maqas.png"


export const worksData = [
  {
    id: 1,
    title: "CONEX ™",
    slug: "conex",
    img: conex,
    Url: "https://sa-conex.com/",
description:
"تصميم وتطوير موقع تعريفي لشركة CONEX المتخصصة في الأرضيات الصناعية والطلاءات الواقية في السعودية، مع إبراز خبرة الشركة ومشاريعها عبر واجهة حديثة وتجربة مستخدم احترافية.",
    duration: "10 أيام",
    technologies: ["React.js", "Tailwind CSS"],
    category: "موقع تعريفي",
  },
  {
    id: 2,
    title: "Waq3y",
    slug: "waq3y",
    img: waq3y,
    Url: "https://waq3y.sa/",
description:
"تصميم وتطوير صفحة هبوط لشركة Waq3y المتخصصة في خدمات تقنية المعلومات وتجارب الواقع الافتراضي، مع واجهة حديثة تبرز رؤية الشركة في دمج العالم الواقعي بالعوالم الرقمية.",
    duration: "أسبوع",
    technologies: ["React.js", "Tailwind CSS"],
    category: "صفحة هبوط",
  },
  {
    id: 3,
    title: "Ideafil",
    slug: "ideafil",
    img: ideafil,
    Url: "https://ideafil.sa/",
    description: "الموقع الرسمي لمجموعة أيدفل، يعكس هوية العلامة التجارية بتصميم عصري وتجربة تفاعلية مميزة تبرز خدمات المجموعة المتنوعة.",
    duration: "أسبوع",
    technologies: ["Next.js", "Tailwind CSS", "GSAP"],
    category: "موقع تعريفي",
  },
  {
    id: 4,
    title: "Maqas",
    slug: "maqas",
    img: maqas,
    Url: "https://maqas.net/",
    description:"تصميم وتطوير صفحة هبوط احترافية لعلامة «مقاس» المتخصصة في الأثواب السعودية الفاخرة، مع التركيز على إبراز الهوية السعودية الأصيلة بأسلوب عصري. تم بناء الموقع بواجهة أنيقة وتجربة مستخدم سلسة تعكس جودة المنتجات وتبرز تفاصيل الأقمشة والتفصيل بدقة.",
    duration: "5 أيام",
    technologies: ["React.js", "Tailwind CSS"],
    category: "صفحة هبوط",
  },
]
