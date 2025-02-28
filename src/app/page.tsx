'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import SkillsRadar from '@/components/SkillsRadar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <h1 className="text-6xl md:text-8xl font-light text-white mb-6">
          Shihao Wang
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">
          Passionate about changing the world with AI.
        </p>
        
        <Link 
          href="#about"
          className="text-white border border-white/30 rounded-full px-8 py-3 
                     hover:bg-white/10 transition-all duration-300 mb-12"
        >
          More about me
        </Link>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <a href="https://github.com/scottie1013" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-2 text-white/80 hover:text-white 
                      transition-all duration-300 hover:scale-110">
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
          
          <a href="tel:+13528710803"
             className="flex items-center gap-2 text-white/80 hover:text-white 
                      transition-all duration-300 hover:scale-110">
            <FaPhone className="text-2xl" />
            <span>(352) 871-0803</span>
          </a>
          
          <a href="mailto:shihaow@usc.edu"
             className="flex items-center gap-2 text-white/80 hover:text-white 
                      transition-all duration-300 hover:scale-110">
            <FaEnvelope className="text-2xl" />
            <span>shihaow@usc.edu</span>
          </a>
          
          <a href="https://www.linkedin.com/in/shihao-wang-77592b1a6/"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 text-white/80 hover:text-white 
                      transition-all duration-300 hover:scale-110">
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-[2rem] p-16 w-full shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="flex justify-center relative">
              <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
                <Image
                  src="/WechatIMG213.jpeg"
                  alt="Shihao Wang"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="space-y-10 md:pl-0">
              <h2 className="text-6xl font-semibold text-[#2d2d2d]">
                About Me
              </h2>
              
              <div className="space-y-6">
                <p className="text-[#4a4a4a] text-lg leading-relaxed">
                  Hey there! I&apos;m Shihao Wang, a Data Science graduate student at USC with a unique journey from economics to data science. 
                  Currently seeking opportunities to apply my data expertise in meaningful ways.
                </p>

                <p className="text-[#4a4a4a] text-lg leading-relaxed">
                  When I&apos;m not diving into datasets or fine-tuning ML models, you&apos;ll find me experimenting with new Chinese recipes, capturing life&apos;s moments through my camera lens, or working out in the gym.
                </p>
                <p className="text-[#4a4a4a] text-lg leading-relaxed">
                  I&apos;m particularly excited about the AI revolution and have fully embraced AI-driven workflows in all my projects. Looking forward to connect with you all!
                </p>
              </div>

              <a 
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#2d2d2d] 
                          rounded-lg px-8 py-3 text-[#2d2d2d] hover:bg-[#2d2d2d] 
                          hover:text-white transition-all duration-300"
              >
                <span className="text-lg font-medium">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center px-4">
        <h2 className="text-7xl font-semibold text-white/90 mb-20 tracking-wide">
          SKILLS
        </h2>
        
        <SkillsRadar />
        
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Python', 'R', 'SQL', 'JavaScript',
              'TypeScript', 'React.js', 'Node.js', 'Git',
              'MongoDB', 'MySQL', 'Docker', 'AWS',
              'Tableau', 'Power BI', 'TensorFlow', 'PyTorch'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl 
                           text-center transform transition-all duration-300 
                           hover:scale-110 hover:shadow-lg hover:shadow-white/20 
                           cursor-default hover:-translate-y-1 border border-white/20"
              >
                <span className="text-lg font-medium text-white/90 tracking-wider">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen py-20 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center px-4">
        <h2 className="text-7xl font-semibold text-white/90 mb-6 tracking-wide">
          EXPERIENCE
        </h2>
        
        <h3 className="text-2xl text-white/80 mb-20 tracking-wide">
          Professional Experience
        </h3>
        
        <div className="max-w-4xl w-full space-y-12">
          {/* Navy Federal Credit Union */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-white tracking-wide">
                Navy Federal Credit Union
              </h3>
              <span className="text-white/80 tracking-wide">
                May 2024 - August 2024
              </span>
            </div>
            <h4 className="text-xl text-white/90 mb-4">Data Scientist Intern</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Analyzed 2MM+ loan records with MySQL, improving efficiency by 20%</li>
              <li>Developed ML models achieving 90% accuracy in satisfaction prediction</li>
              <li>Created Power BI dashboards leading to 10% QoS improvement</li>
            </ul>
          </div>

          {/* National Laboratory */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-white tracking-wide">
                National Laboratory of Pattern Recognition
              </h3>
              <span className="text-white/80 tracking-wide">
                May 2023 - August 2023
              </span>
            </div>
            <h4 className="text-xl text-white/90 mb-4">Research Data Analyst</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Built ETL pipelines for streamlined data ingestion</li>
              <li>Achieved 88% prediction accuracy with ML models</li>
              <li>Created Tableau dashboards for business metrics</li>
            </ul>
          </div>

          {/* University of Florida */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-white tracking-wide">
                University of Florida
              </h3>
              <span className="text-white/80 tracking-wide">
                January 2023 - May 2023
              </span>
            </div>
            <h4 className="text-xl text-white/90 mb-4">Data Analyst Research Assistant</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Analyzed spatial patterns using R Studio and Geospatial packages</li>
              <li>Developed regression models explaining 67-69% of housing price variations</li>
              <li>Presented findings showing 15% higher housing values near wetlands</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-semibold text-white mb-20 tracking-wide text-center">
            PROJECTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="IOT Real-Time Crowd Density Tracker"
              date="Aug 2024 - Dec 2024"
              description={[
                "Conducted 20+ campus interviews for market research",
                "Achieved 95% accuracy in crowd density predictions",
                "Built full-stack application with React.js, Node.js, and MySQL"
              ]}
              imagePath="/Concert Crowd 4K.jpg"
              languages={["Python: 40", "JavaScript: 35", "HTML/CSS: 25"]}
              githubUrl="https://github.com/scottie1013/Crowd-Monitoring-IOT-Project.git"
            />
            
            <ProjectCard
              title="Yelp Restaurant Recommender"
              date="Dec 2024 - Present"
              description={[
                "The Yelp Rating Predictor is an interactive web application that predicts how a specific user would rate a restaurant based on their past rating behavior and the characteristics of the restaurant.",
                "The application also provides personalized restaurant recommendations for users based on predicted ratings."
              ]}
              imagePath="/Vegan.jpg"
              languages={["Python: 55", "Scikit-learn: 30", "Flask: 15"]}
              githubUrl="https://github.com/scottie1013/Yelp-Restaurant-Recommender-.git"
            />

            <ProjectCard
              title="LA Dispensary Distribution Analysis"
              date="Aug 2023 - Dec 2023"
              description={[
                "Leveraged Twitter API and geocoding for spatial analysis",
                "Found 25% higher dispensary approval in positive sentiment regions",
                "Implemented BERT model achieving 85% accuracy"
              ]}
              imagePath="/Dispensary.jpg"
              languages={["Python: 60", "R: 25", "SQL: 15"]}
              githubUrl="https://github.com/scottie1013/Weed-Sentiment-Analysis-NLP.git"
            />

            <ProjectCard
              title="E-commerce Full Stack Application"
              date="Jul 2023 - Sep 2023"
              description={[
                "Developed complete e-commerce platform with user authentication",
                "Implemented payment gateway integration",
                "Built responsive design with 99% mobile compatibility"
              ]}
              imagePath="/Ecommerce.jpg"
              languages={["React: 40", "Node.js: 35", "MongoDB: 25"]}
              githubUrl="https://github.com/scottie1013/EcommerceProject.git"
            />
            
            <ProjectCard
              title="RAG-Langflow Multi-Agent Chat Bot"
              date="Jan 2024 - Present"
              description={[
                "Implemented RAG architecture for enhanced context understanding",
                "Developed multi-agent system for complex query handling",
                "Integrated with LangFlow for streamlined workflow management"
              ]}
              imagePath="/AI Agent.png"
              languages={["Python: 50", "LangChain: 30", "Vector DB: 20"]}
              githubUrl="https://github.com/scottie1013/RAG-Langflow-Multi-Agent-Chat-Bot.git"
            />

            <ProjectCard
              title="Instagram Posts Likes Prediction"
              date="Oct 2023 - Dec 2023"
              description={[
                "Built ML model to predict Instagram post engagement",
                "Analyzed 100K+ posts for feature extraction",
                "Achieved 85% prediction accuracy using XGBoost"
              ]}
              imagePath="/Instagram.png"
              languages={["Python: 45", "TensorFlow: 35", "SQL: 20"]}
              githubUrl="https://github.com/scottie1013/Instagram-Posts-Likes-Prediction.git"
            />



            <ProjectCard
              title="Spotify Recommendation System"
              date="May 2023 - Jul 2023"
              description={[
                "Created personalized music recommendation engine",
                "Processed 1M+ song features for similarity matching",
                "Implemented collaborative filtering algorithm"
              ]}
              imagePath="/Spotify.png"
              languages={["Python: 45", "Scikit-learn: 35", "PostgreSQL: 20"]}
              githubUrl="https://github.com/scottie1013/spotify_recommender_system-.git"
            />
          </div>
        </div>
      </section>

      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 bg-white/10 backdrop-blur-sm p-4 rounded-full 
                   border border-white/20 text-white hover:bg-white/20 transition-all 
                   duration-300 z-50 ${showScroll ? 'opacity-100 translate-y-0' : 
                   'opacity-0 translate-y-16 pointer-events-none'}`}
      >
        <FaArrowUp size={24} />
      </button>
    </main>
  );
}

