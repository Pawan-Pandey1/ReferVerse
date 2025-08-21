 const companies = [
  "Google", "Amazon", "Meta",
  "Microsoft", "Pinterest", "Slack", "Oracle", "Walmart", "Apple"
];


 const jobCategory = [

  {
    name: "Software Engineer",
    desc: "Design, develop, and maintain software solutions to solve business and technical problems.",
    jobs: 200
  },

  {
    name: "DevOps Engineer",
    desc: "Automate infrastructure, set up CI/CD pipelines, and ensure system reliability and scaling.",
    jobs: 170
  },

  {
    name: "Data Analyst",
    desc: "Interpret complex datasets to uncover trends and support decision-making through insights.",
    jobs: 195
  },

   {
    name: "Backend Developer",
    desc: "Build and maintain server-side logic, APIs, and database structures for application support.",
    jobs: 180
  },

  {
    name: "Frontend Developer",
    desc: "Develop responsive web interfaces using HTML, CSS, JavaScript, and modern UI frameworks.",
    jobs: 160
  },
  {
    name: "UI-UX Designer",
    desc: "Design user-centered interfaces and ensure seamless interaction experiences across platforms.",
    jobs: 190
  },

  {
    name: "Content Writer",
    desc: "Create compelling content for blogs, websites, and marketing while aligning with brand tone.",
    jobs: 150
  },

  {
    name: "Data Entry Operator",
    desc: "Input, verify, and manage large volumes of data with accuracy using various digital systems.",
    jobs: 175
  },

  {
    name: "Customer Support",
    desc: "Assist users by resolving queries, providing product guidance, and ensuring satisfaction.",
    jobs: 185
  }
];

 const work = [
  {
    name: "Build Your Resume",
    desc: "Create a standout resume with your skills."
  },
  {
    name: "Apply for Job",
    desc: "Find and apply for jobs that match your skills."
  },
  {
    name: "Get Hired",
    desc: "Connect with employers and start your new job."
  }
];

 const testimonials = [
  {
    "name": "Udit Dagar",
    "testimonial": "This job portal made job search easy and quick. Recommended to all job seekers!",
    "rating": 5
  },
  {
    "name": "Arjun Deshta",
    "testimonial": "Found my dream job within a week! The application process was smooth.",
    "rating": 5
  },
  {
    "name": "Ashutosh Dwiwedi",
    "testimonial": "I secured a job offer within days of applying. Exceptional user experience and support.",
    "rating": 4
  },
  {
    "name": "Pratik Kumar",
    "testimonial": "The platform is user-friendly and has plenty of job opportunities. Very happy with my experience.",
    "rating": 5
  },
  {
    "name": "Abhinav Prakash Verma",
    "testimonial": "Great resource for both freshers and experienced professionals. Helped me land a role quickly.",
    "rating": 4
  },
  {
    "name": "Khushi Dhoble",
    "testimonial": "Amazing experience! The portal guided me step by step and made the job search stress-free.",
    "rating": 5
  }
];

const footerLinks = [
  { title: "Product", links: ["Find Job", "Find Company", "Find Employee"] },
  { title: "Company", links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"] },
  { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] }
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
    jobTitle: "Backend Engineer",
    company: "Spotify",
    applicants: 35,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Stockholm",
    package: "38 LPA",
    postedDaysAgo: 10,
    description: "Spotify is hiring a Backend Engineer to design and implement scalable APIs and streaming services, ensuring a smooth music experience for millions of users daily."
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


export { companies, jobCategory, work, testimonials, footerLinks, jobList };


