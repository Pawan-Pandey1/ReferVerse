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

export {searchFields};