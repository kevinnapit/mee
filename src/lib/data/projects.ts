export interface Project {
  title: string;
  description: string;
  href: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "ERP Core Modules",
    description: "Architected and built critical ERP systems including Request For Quotation (RFQ), Local Purchase Order (LPO), and Stock Control using Go.",
    href: "https://github.com/kevinnapit",
    tags: ["Go", "Clean Architecture", "SQL Server"],
  },
  {
    title: "Real-time Kafka Integration",
    description: "Implemented a reliable messaging system using Kafka for distributed microservices, ensuring asynchronous data integrity.",
    href: "https://github.com/kevinnapit",
    tags: ["Kafka", "Redis", "Distributed Systems"],
  },
  {
    title: "Public Service API Gateway",
    description: "Designed and implemented RESTful APIs for regional government services, handling high-volume public data securely.",
    href: "https://github.com/kevinnapit",
    tags: ["Laravel", "PostgreSQL", "REST API"],
  },
];
