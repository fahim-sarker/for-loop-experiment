const developer = {
  name: "Fahim Sarker",
  profession: "Frontend Developer",
  experience: "2 years",
  skills: ["JavaScript", "React", "Next.js", "TypeScript"],
  isLearning: true,

  introduce() {
    return `Hi, I'm ${this.name}, a ${this.profession}.`;
  },
};

console.log(developer.name);
console.log(developer.skills);
console.log(developer.introduce());

// Add a new property
developer.location = "Dhaka, Bangladesh";

// Update a property
developer.experience = "2+ years";

// Delete a property
delete developer.isLearning;
