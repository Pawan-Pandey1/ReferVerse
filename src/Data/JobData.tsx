import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
  { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
  { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
  { title: "Experience", icon: IconBriefcase, options: ['Entry Level', 'Intermediate', 'Expert'] },
  { title: "Job Type", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] }
];

const jobList = [
  {
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
    postedDaysAgo: 12,
    description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
  },
  {
    jobTitle: "Software Engineer",
    company: "Google",
    applicants: 120,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Mountain View",
    package: "45 LPA",
    postedDaysAgo: 7,
    description: "Google is hiring a Software Engineer to work on scalable cloud solutions. You will be building and optimizing backend systems to power billions of users worldwide."
  },
  {
    jobTitle: "Data Scientist",
    company: "Amazon",
    applicants: 60,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Seattle",
    package: "50 LPA",
    postedDaysAgo: 15,
    description: "Amazon is looking for a Data Scientist to improve recommendation systems and optimize supply chain processes using machine learning and data-driven insights."
  },
  {
    jobTitle: "iOS Developer",
    company: "Apple",
    applicants: 40,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Cupertino",
    package: "42 LPA",
    postedDaysAgo: 5,
    description: "Apple is seeking an iOS Developer to help build next-generation mobile applications for iPhone and iPad. You’ll work closely with designers and engineers to deliver a world-class experience."
  },
  {
    jobTitle: "UI/UX Designer",
    company: "Netflix",
    applicants: 28,
    experience: "Entry Level",
    jobType: "Contract",
    location: "Los Angeles",
    package: "30 LPA",
    postedDaysAgo: 3,
    description: "Netflix is looking for a creative UI/UX Designer to craft intuitive user interfaces for our video streaming platform. Work with cross-functional teams to deliver engaging entertainment experiences."
  },
  {
    jobTitle: "Database Administrator",
    company: "Oracle",
    applicants: 50,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Austin",
    package: "40 LPA",
    postedDaysAgo: 20,
    description: "Oracle is seeking a Database Administrator to manage large-scale enterprise databases, ensuring reliability, security, and high performance for global clients."
  },
  {
    jobTitle: "Frontend Engineer",
    company: "Pinterest",
    applicants: 18,
    experience: "Entry Level",
    jobType: "Internship",
    location: "San Francisco",
    package: "10 LPA",
    postedDaysAgo: 2,
    description: "Pinterest is hiring a Frontend Engineer Intern to develop interactive and visually appealing UI components. A great opportunity to grow in a design-first engineering culture."
  },
  {
    jobTitle: "Business Analyst",
    company: "Walmart",
    applicants: 70,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Bentonville",
    package: "28 LPA",
    postedDaysAgo: 8,
    description: "Walmart is seeking a Business Analyst to work on data-driven solutions for retail operations. Collaborate with product teams to enhance customer shopping experiences worldwide."
  }
];
export { dropdownData, jobList};