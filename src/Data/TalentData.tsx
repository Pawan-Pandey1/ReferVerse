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
    company: "Zomato",
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

export {searchFields, talents};