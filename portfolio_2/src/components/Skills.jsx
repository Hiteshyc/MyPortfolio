import React from "react";

const skills = [
  {
    title: "Languages",
    icon: "💻",
    skills:["C", "C++", "Java", "Python", "JavaScript", "Kotlin", "HTML", "CSS"]

  },
  {
    title: "Technologies",
    icon: "🛠️",
    skills: ["MySQL", "VS Code", "Android Studio", "Arduino IDE", "Xcode", "PyCharm", "GitHub"]

  },
  {
    title: "Frameworks Libraries: ",
    icon: "⚙️",
    skills: ["React", "Pandas", "NumPy"]

  }
];

const SkillsSection = () => {
  return (
    <section className="skills-wrapper p-10">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card bg-white p-6 rounded-lg shadow-lg border border-gray-300 transition-transform hover:-translate-y-2 hover:shadow-xl hover:border-purple-500"
          >
            <div className="skill-icon text-4xl text-purple-600 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-purple-600 mb-4">{skill.title}</h3>
            <ul className="skill-list list-none">
              {skill.skills.map((item, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <span className="skill-bullet w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
