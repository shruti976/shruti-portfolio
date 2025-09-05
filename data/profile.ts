export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type Project = {
  name: string;
  description: string;
  bullets: string[];
};

export const profile = {
  name: "Shruti Singh",
  tagline: "PhD Candidate • Machine Learning & RL",
  location: "Dayton, Ohio",
  email: "shruti.singh97.phd@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/shruti-singh97/",
    github: "https://github.com/shruti976",
  },
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "University of Dayton",
      period: "Aug 2023 – Present",
      bullets: [
        "Entropy-driven adversarial defense for RL (LunarLander, BipedalWalker) ~95% accuracy; beat KL divergence & joint entropy baselines.",
        "Simulated adversarial attacks in RL pipelines to evaluate robustness and improve policy behavior.",
        "Facial-recognition attendance system in Python/OpenCV/dlib (~99.39% accuracy) for online sessions.",
      ],
    },
    {
      role: "Data/Software Engineering Intern",
      company: "Walmart",
      period: "Jun 2022 – Aug 2022",
      bullets: [
        "Researched GS1 barcode standards to handle edge cases (oversized, perishable, hazardous).",
        "Reproduced legacy barcode logic in Python with a 3-phase validator (structure, checksums, symbology).",
        "Queried & validated 100+ test cases in SQL, achieving parity with legacy accuracy.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      name: "Adversarial Resilience in RL Systems",
      description: "Entropy-driven feature selection for adversarial robustness.",
      bullets: [
        "94–95% accuracy across Gym (LunarLander/BipedalWalker).",
        "Outperformed KL Divergence and Joint Entropy at detecting adversarial noise.",
      ],
    },
    {
      name: "Temporal Forecasting with LSTM",
      description: "Deep learning for time-series prediction.",
      bullets: [
        "Advanced preprocessing, tuning, and regularization (LR scheduling, early stopping).",
        "Benchmarked vs MLP/CNN/CNN-LSTM; LSTM captured long-range temporal patterns.",
      ],
    },
    {
      name: "Personalized Movie Recommender",
      description: "Full-stack recommender (MovieLens 1M).",
      bullets: [
        "KNN & SVD with Surprise; Streamlit UI with real-time recs.",
        "RMSE ~0.87, Precision@10 ~0.81; persistent pipelines & evaluation dashboards.",
      ],
    },
    {
      name: "Gridworld Search Strategies",
      description: "Classical search & RL policies in a custom environment.",
      bullets: [
        "DFS, BFS, UCS, and A* (Manhattan).",
        "Value iteration, policy iteration, and Q-learning (ε-greedy) with trajectory visualizations.",
      ],
    },
  ] as Project[],
  skills: [
    "Python", "R", "SQL", "NoSQL",
    "TensorFlow", "PyTorch", "scikit-learn", "Keras",
    "Pandas", "NumPy", "Matplotlib", "OpenCV",
  ],
} as const;
