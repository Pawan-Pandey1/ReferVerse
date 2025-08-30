import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const searchFields = [
  { 
    title: "Job Title", 
    icon: IconSearch, 
    options: [
      'Designer', 
      'Developer', 
      'Product Manager', 
      'Marketing Specialist', 
      'Data Analyst', 
      'Sales Executive', 
      'Content Writer', 
      'Customer Support'
    ] 
  },
  { 
    title: "Location", 
    icon: IconMapPin, 
    options: [
      'Delhi', 
      'New York', 
      'San Francisco', 
      'London', 
      'Berlin', 
      'Tokyo', 
      'Sydney', 
      'Toronto'
    ] 
  },
  { 
    title: "Skills", 
    icon: IconRecharging, 
    options: [
      'HTML', 
      'CSS', 
      'JavaScript', 
      'React', 
      'Angular', 
      'Node.js', 
      'Python', 
      'Java', 
      'Ruby', 
      'PHP', 
      'SQL', 
      'MongoDB', 
      'PostgreSQL', 
      'Git', 
      'API Development', 
      'Testing and Debugging', 
      'Agile Methodologies', 
      'DevOps', 
      'AWS', 
      'Azure', 
      'Google Cloud'
    ] 
  },
];

const talents = [
  {
    name: "Aarav Mehta",
    role: "Backend Developer",
    company: "Flipkart",
    topSkills: ["Java", "Spring Boot", "MySQL"],
    about:
      "At Flipkart, I work as a Backend Developer focusing on building reliable and efficient microservices. My expertise lies in designing APIs, optimizing database performance, and ensuring scalability to support millions of users.",
    expectedCtc: "₹18 – 22 LPA",
    location: "Bengaluru, India",
    image: "Avatars/Male1.png",
  },
  {
    name: "Priya Sharma",
    role: "Frontend Engineer",
    company: "zomato",
    topSkills: ["React", "Next.js", "TypeScript"],
    about:
      "As a Frontend Engineer at Zomato, I focus on crafting seamless user interfaces and enhancing performance for high-traffic applications. My passion lies in building accessible, modern, and responsive UIs.",
    expectedCtc: "₹15 – 20 LPA",
    location: "Gurugram, India",
    image: "Avatars/Female1.png",
  },
  {
    name: "Rohit Verma",
    role: "Data Scientist",
    company: "TCS",
    topSkills: ["Python", "TensorFlow", "Pandas"],
    about:
      "I am a Data Scientist at TCS, where I analyze complex datasets to build predictive models and provide actionable insights. With expertise in Python and TensorFlow, I specialize in machine learning and AI-driven solutions.",
    expectedCtc: "₹20 – 25 LPA",
    location: "Mumbai, India",
    image: "Avatars/Male2.png",
  },
  {
    name: "Sneha Iyer",
    role: "Cloud Engineer",
    company: "Microsoft",
    topSkills: ["Azure", "Kubernetes", "Docker"],
    about:
      "At Microsoft, I work as a Cloud Engineer managing scalable and secure cloud infrastructure. I focus on container orchestration, deployment automation, and ensuring system reliability through Azure services.",
    expectedCtc: "₹25 – 30 LPA",
    location: "Hyderabad, India",
    image: "Avatars/Female2.png",
  },
  {
    name: "Vikram Patel",
    role: "Full Stack Developer",
    company: "Infosys",
    topSkills: ["Angular", "Node.js", "PostgreSQL"],
    about:
      "As a Full Stack Developer at Infosys, I specialize in developing enterprise-scale applications. I enjoy building user-friendly frontends with Angular and robust backends with Node.js.",
    expectedCtc: "₹14 – 18 LPA",
    location: "Pune, India",
    image: "Avatars/Male3.png",
  },
  {
    name: "Ananya Gupta",
    role: "Mobile App Developer",
    company: "Paytm",
    topSkills: ["Flutter", "Dart", "Firebase"],
    about:
      "At Paytm, I work as a Mobile App Developer creating cross-platform mobile applications using Flutter. My focus is on building scalable and performant apps with real-time features.",
    expectedCtc: "₹16 – 20 LPA",
    location: "Noida, India",
    image: "Avatars/Female3.png",
  },
  {
    name: "Kunal Singh",
    role: "DevOps Engineer",
    company: "Amazon",
    topSkills: ["AWS", "Terraform", "CI/CD"],
    about:
      "I am a DevOps Engineer at Amazon, responsible for maintaining highly available cloud systems. My expertise lies in automating deployments, infrastructure provisioning, and optimizing CI/CD pipelines.",
    expectedCtc: "₹22 – 28 LPA",
    location: "Bengaluru, India",
    image: "Avatars/Male4.png",
  },
  {
    name: "Neha Reddy",
    role: "UI/UX Designer",
    company: "Swiggy",
    topSkills: ["Figma", "Adobe XD", "User Research"],
    about:
      "As a UI/UX Designer at Swiggy, I focus on crafting intuitive and visually appealing designs. My expertise lies in user research, prototyping, and creating engaging digital experiences.",
    expectedCtc: "₹12 – 16 LPA",
    location: "Hyderabad, India",
    image: "Avatars/Female1.png",
  },
];
const profile = [
  {
    name: "Aarav Mehta",
    role: "Backend Developer",
    company: "Flipkart",
    location: "Bengaluru, India",
    about:
      "As a Backend Developer at Flipkart, I specialize in building reliable and efficient microservices. My expertise lies in designing APIs, optimizing database performance, and ensuring scalability to support millions of users.",
    expectedCtc: "₹18 – 22 LPA",
    image: "Avatars/Male1.png",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "Microservices", "Docker"],
    experience: [
      {
        title: "Backend Developer",
        company: "flipkart",
        location: "Bengaluru, India",
        startDate: "Jan 2021",
        endDate: "Present",
        description:
          "As a Backend Developer at Flipkart, I am responsible for designing, developing, and maintaining backend services. I specialize in building scalable APIs, optimizing MySQL queries, and developing high-performance microservices. I actively collaborate with frontend teams, participate in code reviews, and ensure smooth deployment processes."
      },
    ],
    certifications: [
      {
        name: "Oracle Certified Professional: Java SE",
        issuer: "Oracle",
        issueDate: "May 2022",
        certificateId: "OCPJSE11234"
      }
    ]
  },
  {
    name: "Priya Sharma",
    role: "Frontend Engineer",
    company: "Zomato",
    location: "Gurugram, India",
    about:
      "As a Frontend Engineer at Zomato, I focus on crafting seamless user interfaces and enhancing performance for high-traffic applications. My passion lies in building accessible, modern, and responsive UIs.",
    expectedCtc: "₹15 – 20 LPA",
    image: "Avatars/Female1.png",
    skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    experience: [
      {
        title: "Frontend Engineer",
        company: "Zomato",
        location: "Gurugram, India",
        startDate: "Jul 2020",
        endDate: "Present",
        description:
          "At Zomato, I develop and maintain high-traffic user interfaces using React and Next.js. My work involves optimizing rendering performance, improving accessibility, and implementing responsive design for mobile-first experiences."
      },
    ],
    certifications: [
      {
        name: "Meta Front-End Developer",
        issuer: "Meta",
        issueDate: "Mar 2023",
        certificateId: "MFE2023XYZ"
      }
    ]
  },
  {
    name: "Rohit Verma",
    role: "Data Scientist",
    company: "TCS",
    location: "Mumbai, India",
    about:
      "I am a Data Scientist at TCS, where I analyze complex datasets to build predictive models and provide actionable insights. With expertise in Python and TensorFlow, I specialize in machine learning and AI-driven solutions.",
    expectedCtc: "₹20 – 25 LPA",
    image: "Avatars/Male2.png",
    skills: ["Python", "TensorFlow", "Pandas", "NumPy", "Machine Learning", "AI"],
    experience: [
      {
        title: "Data Scientist",
        company: "TCS",
        location: "Mumbai, India",
        startDate: "Mar 2019",
        endDate: "Present",
        description:
          "As a Data Scientist at TCS, I design and deploy predictive models using machine learning algorithms. My responsibilities include analyzing large-scale datasets, developing ML pipelines, and providing insights to support business decisions."
      },
    ],
    certifications: [
      {
        name: "TensorFlow Developer Certificate",
        issuer: "Google",
        issueDate: "Aug 2022",
        certificateId: "TFD56789"
      }
    ]
  },
  {
    name: "Sneha Iyer",
    role: "Cloud Engineer",
    company: "Microsoft",
    location: "Hyderabad, India",
    about:
      "At Microsoft, I work as a Cloud Engineer managing scalable and secure cloud infrastructure. I focus on container orchestration, deployment automation, and ensuring system reliability through Azure services.",
    expectedCtc: "₹25 – 30 LPA",
    image: "Avatars/Female2.png",
    skills: ["Azure", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    experience: [
      {
        title: "Cloud Engineer",
        company: "Microsoft",
        location: "Hyderabad, India",
        startDate: "May 2020",
        endDate: "Present",
        description:
          "As a Cloud Engineer, I design and manage secure cloud environments using Azure. My work includes automating deployments, managing Kubernetes clusters, and ensuring high availability of cloud-based applications."
      },
    ],
    certifications: [
      {
        name: "Microsoft Certified: Azure Solutions Architect Expert",
        issuer: "Microsoft",
        issueDate: "Jan 2023",
        certificateId: "AZ204ARCH123"
      }
    ]
  },
  {
    name: "Vikram Patel",
    role: "Full Stack Developer",
    company: "Infosys",
    location: "Pune, India",
    about:
      "As a Full Stack Developer at Infosys, I specialize in developing enterprise-scale applications. I enjoy building user-friendly frontends with Angular and robust backends with Node.js.",
    expectedCtc: "₹14 – 18 LPA",
    image: "Avatars/Male3.png",
    skills: ["Angular", "Node.js", "PostgreSQL", "REST APIs", "JavaScript"],
    experience: [
      {
        title: "Full Stack Developer",
        company: "Infosys",
        location: "Pune, India",
        startDate: "Feb 2018",
        endDate: "Present",
        description:
          "At Infosys, I contribute to enterprise application development by building scalable frontends with Angular and backend services with Node.js. My role includes API development, database integration, and ensuring seamless end-to-end performance."
      },
    ],
    certifications: [
      {
        name: "Certified Node.js Developer",
        issuer: "OpenJS Foundation",
        issueDate: "Jun 2021",
        certificateId: "NODE12345"
      }
    ]
  },
  {
    name: "Ananya Gupta",
    role: "Mobile App Developer",
    company: "Paytm",
    location: "Noida, India",
    about:
      "At Paytm, I work as a Mobile App Developer creating cross-platform mobile applications using Flutter. My focus is on building scalable and performant apps with real-time features.",
    expectedCtc: "₹16 – 20 LPA",
    image: "Avatars/Female3.png",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    experience: [
      {
        title: "Mobile App Developer",
        company: "Paytm",
        location: "Noida, India",
        startDate: "Nov 2019",
        endDate: "Present",
        description:
          "As a Mobile App Developer, I design and develop cross-platform applications using Flutter and Firebase. My work involves implementing real-time features, optimizing app performance, and ensuring a smooth user experience."
      },
    ],
    certifications: [
      {
        name: "Google Associate Android Developer",
        issuer: "Google",
        issueDate: "Oct 2022",
        certificateId: "AAD98765"
      }
    ]
  },
  {
    name: "Kunal Singh",
    role: "DevOps Engineer",
    company: "Amazon",
    location: "Bengaluru, India",
    about:
      "I am a DevOps Engineer at Amazon, responsible for maintaining highly available cloud systems. My expertise lies in automating deployments, infrastructure provisioning, and optimizing CI/CD pipelines.",
    expectedCtc: "₹22 – 28 LPA",
    image: "Avatars/Male4.png",
    skills: ["AWS", "Terraform", "CI/CD", "Docker", "Jenkins"],
    experience: [
      {
        title: "DevOps Engineer",
        company: "Amazon",
        location: "Bengaluru, India",
        startDate: "Aug 2018",
        endDate: "Present",
        description:
          "At Amazon, I manage infrastructure automation, CI/CD pipelines, and system reliability. My role includes working on AWS services, optimizing Terraform templates, and ensuring smooth production deployments."
      },
    ],
    certifications: [
      {
        name: "AWS Certified DevOps Engineer – Professional",
        issuer: "Amazon Web Services",
        issueDate: "Feb 2023",
        certificateId: "AWSDEVOPS456"
      }
    ]
  },
  {
    name: "Neha Reddy",
    role: "UI/UX Designer",
    company: "Swiggy",
    location: "Hyderabad, India",
    about:
      "As a UI/UX Designer at Swiggy, I focus on crafting intuitive and visually appealing designs. My expertise lies in user research, prototyping, and creating engaging digital experiences.",
    expectedCtc: "₹12 – 16 LPA",
    image: "Avatars/Female1.png",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    experience: [
      {
        title: "UI/UX Designer",
        company: "Swiggy",
        location: "Hyderabad, India",
        startDate: "Sep 2020",
        endDate: "Present",
        description:
          "As a UI/UX Designer at Swiggy, I am responsible for conducting user research, creating wireframes, and designing user-friendly digital experiences. I collaborate with developers to ensure design consistency and usability."
      },
    ],
    certifications: [
      {
        name: "Google UX Design Professional Certificate",
        issuer: "Google",
        issueDate: "Dec 2022",
        certificateId: "UXCERT6789"
      }
    ]
  },
];

export { searchFields, talents, profile };
