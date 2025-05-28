import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  practitioner,
  foundation,
  azure,
  deloitte,
  kubernetes,
  aws,
  jenkins,
  reactjs,
  sonarqube,
  terraform,
  prometheus,
  gitlab,
  mongodb,
  ansible,
  argocd
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "Automation",
    icon: frontend,
  },
  {
    title: "CI/CD",
    icon: backend,
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: ux,
  },
  {
    title: "Monitoring and Logging",
    icon: prototyping,
  },
];

const technologies = [
  // {
  //   name: 'HTML 5',
  //   icon: html,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Terraform',
    icon: terraform,
  },
  {
    name: 'Jenkins',
    icon: jenkins,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Kubernetes',
    icon: kubernetes,
  },
    {
    name: 'ArgoCD',
    icon: argocd,
  },
  {
    name: 'sonarqube',
    icon: sonarqube,
  },
  {
    name: 'Ansible',
    icon: ansible,
  },
  {
    name: 'prometheus',
    icon: prometheus,
  },
  {
    name: 'Mongodb',
    icon: mongodb,
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Azure',
  //   icon: azure,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  {
    name: 'Gitlab',
    icon: gitlab,
  },

];

const experiences = [
  {
    title: 'DevOps Engineer',
    company_name: 'Global Software Solution',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2024 - Present',
  },
  {
    title: 'Aws DevOps Engineer',
    company_name: 'Ideaux Tech Pvt Ltd',
    icon: microverse,
    iconBg: '#333333',
    date: 'July 2023 - July 2024',
  },
  {
    title: 'DevOps Engineer Intern',
    company_name: 'Gove.co',
    icon: kelhel,
    iconBg: '#333333',
    date: 'March 2023 - June 2023',
  },
  // {
  //   title: 'Secure File Upload Project',
  //   company_name: 'Personal Project',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   TechStack: 'React, NestJS, MongoDB, AWS S3, HashiCorp Vault',
  //   date: 'Jan 2024 - Feb 2024',
  //   description: `Built a web application that allows users to upload images, 
  //     which are stored in MongoDB and AWS S3 using a React frontend and NestJS backend. 
  //     Integrated HashiCorp Vault to securely manage and encrypt sensitive credentials and file metadata.`,
  //   link: 'https://your-project-url.com', // Optional: if you want to link to it
  // },
  {
    title: 'BE Civil',
    company_name: 'Scad College of Engineering & Technology',
    icon: dcc,
    iconBg: '#333333',
    date: 'July 2017 - June 2021',
  },
];

const projects = [
  // {
  //   id: "project-1",
  //   name: "AWS Academy Foundation Graduate ",
  //   description: "View my verified achievement from Amazon Web Services (AWS).",
  //   image: foundation,
  //   repo: "#",
  //   demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230804-28-luyiiy.pdf",
  // },
  // {
  //   id: "project-2",
  //   name: "AWS Certified Cloud Practitioner",
  //   description:
  //     "AWS Academy Graduate issued by  Amazon Web Services Training and Certification.",
  //   image: practitioner,
  //   repo: "#",
  //   demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS+Certified+Cloud+Practitioner+certificate.pdf",
  // },
  // {
  //   id: "project-3",
  //   name: "Azure",
  //   description: "Create a virtual machine and deploy a Web Server",
  //   image: azure,
  //   repo: "#",
  //   demo: "https://manp1209.s3.ap-south-1.amazonaws.com/Azure.pdf",
  // },
  // {
  //   id: "project-4",
  //   name: "Deloitte",
  //   description:
  //     "Technology Consulting Virtual Internship",
  //   image: deloitte,
  //   repo: "#",
  //   demo: "https://manp1209.s3.ap-south-1.amazonaws.com/FqFtWwQzNxJ8Qsh5H_Deloitte_P9vz2x4Mcp37hehcd_completion_certificate.pdf",
  // },
  // {
  //   id: "project-5",
  //   name: "AWS Academy Foundation Graduate ",
  //   description: "View my verified achievement from Amazon Web Services (AWS).",
  //   image: foundation,
  //   repo: "#",
  //   demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230804-28-luyiiy.pdf",
  // },
];

export { services, technologies, experiences, projects };
