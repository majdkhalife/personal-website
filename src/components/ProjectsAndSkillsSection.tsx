export const ProjectsAndSkillsSection = () => {
  const projects = [
    {
      title: "Hotspot Detection for Drones",
      description:
        "Engineered a real-time hotspot detection system for UAVs by integrating thermal and RGB imagery with deep learning. Designed for wildfire monitoring, it combines robust preprocessing with a YOLO11-based vision pipeline to detect heat anomalies in-flight.",
      tools: [
        "Python",
        "OpenCV",
        "YOLO11",
        "PyTorch",
        "Image Preprocessing",
        "Dataset Annotation",
      ],
    },
    {
      title: "Feature Extractor for Multi-Drone and Multi-View Matching",
      description:
        "Built a scalable feature matching pipeline leveraging SuperPoint and SuperGlue for robust keypoint detection across multiple drones and viewpoints. Enabled object re-identification in dynamic aerial environments.",
      tools: [
        "Python",
        "OpenCV",
        "SuperPoint",
        "SuperGlue",
        "Multi-Drone Vision",
        "Feature Matching",
      ],
    },
    {
      title: "LLM-Guided Occupant Inference in ALFWorld",
      description:
        "Created an intelligent agent using DSPy and large language models to explore virtual homes and infer occupant roles based on object presence. Employed chain-of-thought reasoning and memory buffers to generalize across novel environments.",
      tools: [
        "Python",
        "DSPy",
        "LLMs",
        "Prompt Engineering",
        "ALFWorld",
        "Zero-shot Reasoning",
      ],
    },
    {
      title: "AI vs Real: Detecting Synthetic Imagery",
      description:
        "Led a comparative analysis of AI-generated and real images using structural, frequency, and contour-based techniques. Designed interpretable pipelines for distinguishing subtle generative artifacts in synthetic imagery.",
      tools: [
        "Python",
        "OpenCV",
        "Fourier Transform",
        "Contour Analysis",
        "Statistical Modeling",
      ],
    },
    {
      title: "Real-Time Lane Detection using Classical Vision",
      description:
        "Developed a real-time lane detection system using classical vision techniques like Canny edge detection and Hough transform. Built for autonomous driving simulations with a focus on performance and low-latency detection.",
      tools: [
        "C++",
        "OpenCV",
        "Edge Detection",
        "Hough Transform",
        "Real-Time Systems",
      ],
    },
    {
      title: "Kiwi - Allergy Friendly Chrome Extension",
      description:
        "Built a personalized Chrome extension that identifies and highlights allergens in grocery product pages using live scraping and user-specific filters. Enhanced accessibility for users with dietary restrictions.",
      tools: [
        "JavaScript",
        "Chrome APIs",
        "React",
        "Web Scraping",
        "User Profiling",
      ],
    },
    {
      title: "Stock Price Predictor",
      description:
        "Trained an ML model to forecast stock movements using time-series analysis and technical indicators. Combined historical price data with engineered features in an attempt to predict the stock market.",
      tools: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects & <span className="text-primary">Skills</span>
        </h2>

        <div className="space-y-12">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-background/80 rounded-lg border border-border p-6 shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                {proj.title}
              </h3>
              <p className="text-muted-foreground mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
