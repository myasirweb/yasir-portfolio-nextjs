import { experienceItem } from "@/data/static-data";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div id="experience" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>My Experience</h1>

        <div className={styles.expContainer}>
          {experienceItem &&
            experienceItem.map((exp, index) => (
              <div key={exp.id || index} className={styles.experience}>
                <div className={styles.period}>
                  {exp.from.toString().slice(0, 15)} -{" "}
                  {exp.to.toString() === ""
                    ? "Present"
                    : exp.to.toString().slice(0, 15)}
                </div>
                <div className={styles.expContent}>
                  <h2 className={styles.company}>{exp.company}</h2>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.desc}>{exp.description}</p>

                  <div className={styles.stacks}>
                    {exp.stack.map((tech, idx) => (
                      <div key={tech.id || idx} className={styles.stack}>
                        {tech.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
