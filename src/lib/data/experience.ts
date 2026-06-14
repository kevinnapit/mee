export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "INDOWEBHOST KREASI",
    role: "Backend Developer",
    period: "Sep 2025 — Present",
    description: "Leading the development of ERP backend systems using Go and Clean Architecture. Implementing core modules like RFQ and Stock Control while ensuring real-time data reliability through Kafka.",
  },
  {
    company: "DINAS KOMINFO KABUPATEN TOBA",
    role: "Web Developer",
    period: "Jan 2024 — Sep 2025",
    description: "Developed public service web applications and RESTful APIs using PHP (Laravel/CodeIgniter) and JavaScript. Managed MySQL/PostgreSQL databases for regional digital solutions.",
  },
  {
    company: "PT TOBA AGRO MANDIRI",
    role: "Quality Control",
    period: "Dec 2022 — Jan 2024",
    description: "Optimized operational workflows through digital data analysis, significantly improving the efficiency of quality control processes.",
  },
];
