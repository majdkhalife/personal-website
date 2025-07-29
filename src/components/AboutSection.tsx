import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Text content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate about Robotics, Vision, and AI
            </h3>
            <p className="text-muted-foreground leading-relaxed">
            I'm currently working at ARA Robotics as a Computer Vision Intern, developing a hotspot detection system for drones using infrared cameras and machine learning. I'm also building feature detection models for multi-drone, multi-viewpoint scenarios.
              <br /><br />
              I've also served as Software Lead for the McGill Robotics AUV team, where I worked on state estimation, Docker containerization, visual perception, propulsion and control systems.
              <br /><br />
              My academic background in Computer Science and Mathematics fuels my interest in perception and autonomy. I'm especially focused on enhancing scene understanding through statistical modeling and addressing challenges like occlusions in autonomous navigation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Majd_Khalife_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Card 1: Software Stack */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Stack</h4>
                  <p className="text-muted-foreground">
                    Python, C++, ROS2, OpenCV, YOLO, Docker, Git, Linux, TensorFlow, PyTorch, NumPy, pandas, scikit-learn, MATLAB, Bash, TypeScript, React, Tailwind CSS, PostgreSQL, URDF, RViz, CycloneDDS
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-muted-foreground">
                    ARA Robotics (Computer Vision Intern), TII(Computer Vision Intern), McGill Robotics (AUV Software Lead)
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Soft Skills</h4>
                  <p className="text-muted-foreground">
                    Strong communicator, leadership experience (team lead, project coordination), mentorship of junior members, multilingual (English, Arabic, French, Spanish), collaborative, proactive, fast learner, detail-oriented, thrives in high-pressure environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
