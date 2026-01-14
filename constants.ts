import { PortfolioData } from './types';

export const PORTFOLIO_CONTENT: PortfolioData = {
  name: "Goutam Hegde",
  title: "Software Engineer",
  contact: {
    email: "hegdegautam24@gmail.com",
    phone: "8971549080",
    location: "Bangalore, India",
    github: "https://github.com/justdodcode24"
  },
  about: [
    "I am always energetic and eager to learn new skills. I am highly enthused about my work and tasks ahead. I am an organised and efficient person with an enquiring mind.",
    "I am a flexible person seeking employment which will allow development, growth and make use of my existing skills."
  ],
  experience: [
    {
      id: "exp-1",
      role: "Data Engineer",
      company: "Mphasis Ltd",
      duration: "02/2024 – Present",
      location: "Bangalore, India",
      description: [
        "Designed, implemented, and maintained scalable on-prem and cloud-based infrastructure supporting business-critical applications.",
        "Designed and deployed scalable data infrastructure on Oracle Cloud Infrastructure (ODI) using Resource Manager (Terraform) for automated provisioning of compute, storage, and networking resources.",
        "Automated daily and monthly data processing tasks using Python, reducing manual intervention by 50%."
      ]
    }
  ],
  internship: [
    {
      id: "int-1",
      role: "Intern",
      company: "Emertxe",
      duration: "02/2022 – 04/2022",
      location: "Bengaluru, India",
      description: [
        "Project Name: Foundational Programming Skills And Microcontroller",
        "Focused on Embedded Projects using Arduino and Mp lab.",
        "Gained knowledge on Embedded C programming language."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Electronics And Telecommunication",
      institution: "BMS Institute Of Technology",
      duration: "07/2020 – 06/2022",
      location: "Bangalore, India",
      details: [
        "University: VTU",
        "Passing Year: 2022",
        "CGPA: 6.75"
      ]
    },
    {
      id: "edu-2",
      degree: "Diploma in Electronics And Communication",
      institution: "RN Shetty Polytechnic",
      duration: "07/2016 – 05/2019",
      location: "Sirsi, India",
      details: [
        "University: KUD",
        "Passing Year: 2019",
        "Percentage: 67%"
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "A Fractal Antenna For Wireless Communication",
      duration: "05/2021 – 06/2022",
      description: "Fractal patch antenna is introduced in order to reduce the antenna size. By the space-filling property of fractal geometry, this antenna reveals lower resonant frequency than that of a normal square patch antenna. We designed an L-shape fractal antenna using HFSS13.0 Software."
    },
    {
      id: "proj-2",
      title: "Smart Light And Smart City Using Internet Of Things",
      duration: "12/2017 – 03/2018",
      description: "Implemented a Smart City concept using IoT devices such as connected sensors, lights, and meters to collect and analyze data for efficient urban management."
    }
  ],
  skills: [
    {
      category: "Programming & Scripting",
      items: [
        { name: "Python", description: "Automation, Data Processing" },
        { name: "SQL", description: "MySQL, MongoDB" },
        { name: "HTML & CSS", description: "Responsive Design" },
        { name: "Embedded C", description: "Microcontrollers" }
      ]
    },
    {
      category: "Data & Tools",
      items: [
        { name: "Splunk", description: "SPL, Data Parsing, Field Extraction" },
        { name: "PowerBI", description: "Data Analysis, Visualization" },
        { name: "App Dynamics", description: "Application Performance Management" },
        { name: "MS Office", description: "Word, PowerPoint" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "Oracle Cloud (ODI)", description: "Infrastructure as Code" },
        { name: "AWS", description: "Basic Knowledge" },
        { name: "Terraform", description: "Resource Manager" }
      ]
    },
    {
      category: "Engineering Tools",
      items: [
        { name: "MATLAB", description: "Simulink" },
        { name: "HFSS Tool", description: "Antenna Design" },
        { name: "VLSI", description: "Circuit Design" }
      ]
    }
  ],
  certificates: [
    { name: "ICSI CNSS Certified Networks" },
    { name: "Python Web Dev" },
    { name: "Secure Coding in Java by LinkedIn" },
    { name: "Splunk Certification" },
    { name: "Embedded Systems by Emertxe" },
    { name: "PowerBI Certification" }
  ],
  interests: [
    "Photography",
    "Learning Languages",
    "Travel",
    "Reading Books"
  ]
};