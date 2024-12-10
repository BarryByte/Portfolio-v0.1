import React, { useState } from 'react';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with real-time inventory management',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      githubLink: 'https://github.com/username/ecommerce-project',
      liveLink: 'https://example-ecommerce.vercel.app',
      category: 'fullstack'
    },
    {
      title: 'AI Chatbot',
      description: 'Machine learning powered chatbot with natural language processing',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      githubLink: 'https://github.com/username/ai-chatbot',
      liveLink: 'https://ai-chatbot-demo.vercel.app',
      category: 'ai'
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather tracking with predictive analytics',
      technologies: ['React', 'OpenWeatherAPI', 'Tailwind CSS'],
      githubLink: 'https://github.com/username/weather-app',
      liveLink: 'https://weather-forecast-app.vercel.app',
      category: 'frontend'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform ensuring transparency and security',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      githubLink: 'https://github.com/username/voting-blockchain',
      liveLink: 'https://blockchain-voting.vercel.app',
      category: 'blockchain'
    }
  ];

  const categories = [
    { name: 'all', label: 'All Projects', icon: <Layers className="mr-2" /> },
    { name: 'fullstack', label: 'Full Stack', icon: <Code className="mr-2" /> },
    { name: 'frontend', label: 'Frontend', icon: <ExternalLink className="mr-2" /> },
    { name: 'ai', label: 'AI Projects', icon: <Code className="mr-2" /> },
    { name: 'blockchain', label: 'Blockchain', icon: <Layers className="mr-2" /> }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className='min-h-screen bg-black flex flex-col items-center justify-center p-6'>
      <h1 className='text-5xl font-bold mb-12 text-center
        text-transparent bg-clip-text
        bg-gradient-to-r from-neon-cyan to-neon-magenta
        animate-pulse'>
        My Projects
      </h1>

      <div className='flex justify-center mb-8 space-x-4 flex-wrap'>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 mb-2
              ${selectedCategory === category.name
                ? 'bg-neon-cyan text-black shadow-neon-cyan'
                : 'bg-gray-900 text-neon-blue hover:bg-gray-800'}`}
          >
            {category.icon}
            {category.label}
          </button>
        ))}
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className='bg-gray-900/50 rounded-xl p-6
            border-2 border-transparent
            hover:border-neon-magenta
            transition-all duration-300
            transform hover:-translate-y-2
            shadow-lg'
          >
            <h3 className='text-2xl font-bold text-neon-cyan mb-3'>
              {project.title}
            </h3>
            <p className='text-white mb-4'>
              {project.description}
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='bg-neon-blue/20 text-neon-blue
                  px-2 py-1 rounded-md text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className='text-neon-green hover:text-neon-cyan
                flex items-center transition-colors'
              >
                <Github className="mr-2" />
                GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className='text-neon-pink hover:text-neon-cyan
                flex items-center transition-colors'
              >
                <ExternalLink className="mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;