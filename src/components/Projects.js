import React, { useState } from 'react';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'Portfolio',
      description: 'Responsive and interactive portfolio website showcasing projects, skills, and achievements. Integrated APIs to display real-time stats from GitHub, LeetCode, and Codeforces profiles.',
      technologies: ['React', 'Tailwind CSS'],
      githubLink: 'https://github.com/BarryByte/Portfolio-v0.1', 
      liveLink: 'https://portfolio-v0-1-tus8.vercel.app/',
      category: 'frontend',
    },
    {
      title: 'Youtube Clone',
      description: 'YouTube Clone built using React with features like video browsing, trending content exploration, and a comment section. Integrated video embedding for seamless playback and designed an intuitive interface replicating YouTube’s core functionalities.',
      technologies: ['React', 'CSS'],
      githubLink: 'https://github.com/BarryByte/youtube-clone',
      liveLink: 'https://youtube-clone-plum-beta.vercel.app/',
      category: 'frontend',
    },
    {
      title: 'Simplified Hotel Booking Chatbot',
      description: 'RESTful API implemented using Express.js to create a chatbot for handling hotel booking queries. Integrated Gemini API for NLP, and SQLite with Sequelize for conversation history storage. Included functions for fetching room data and simulating room bookings.',
      technologies: ['Express.js', 'SQLite', 'Sequelize', 'Gemini API'],
      githubLink: 'https://github.com/BarryByte/Bot9---Ben10',
      liveLink: 'https://main.d2kvnf7sqmud7t.amplifyapp.com/',
      category: 'backend',
    },
    {
      title: 'Music Store Management System',
      description: 'Comprehensive system for managing a music store, including handling product inventory, customer profiles, sales transactions, and employee management. Features CRUD operations for musical products, customers, sales, and staff.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/BarryByte/MusicStoreManagement',
      liveLink: '',
      category: '',
    },
    {
      title: 'Quick-Quiz',
      description: 'Interactive web application for testing knowledge on various topics. Features dynamic question loading, responsive design, real-time feedback, and score tracking. Built to enhance front-end development and UX skills.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/BarryByte/Quick-Quiz',
      liveLink: '',
      category: 'frontend',
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'Classic Tic-Tac-Toe game implemented using Java and Object-Oriented Programming (OOP) principles. Allows two players to play on a 3x3 grid with standard rules to win by forming a horizontal, vertical, or diagonal line.',
      technologies: ['Java', 'OOP'],
      githubLink: 'https://github.com/BarryByte/Tic-Tac-Toe',
      liveLink: '',
      category: 'game',
    },
    {
      title: 'Pokedox-Clock',
      description: 'Dynamic analog clock developed using HTML, CSS, and JavaScript. Features real-time updates, visually appealing design, and user controls to pause and resume the clock hands.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/BarryByte/Pokedex/tree/main/clock_example',
      liveLink: '',
      category: 'frontend',
    },
    {
      title: 'REST APIs for Video Files',
      description: 'Video processing platform using Node.js, Express, SQLite, and Cloudinary. Features include video uploading, trimming, merging, and generating time-limited download links. Utilized FFmpeg for video processing and Cloudinary for efficient storage.',
      technologies: ['Node.js', 'Express', 'SQLite', 'Cloudinary', 'FFmpeg'],
      githubLink: 'https://github.com/BarryByte/REST-APIs-for-Video-Files',
      liveLink: '',
      category: 'backend',
    },
  ];



  const categories = [
    { name: 'all', label: 'All Projects', icon: <Layers className="mr-2" /> },
    // { name: 'fullstack', label: 'Full Stack', icon: <Code className="mr-2" /> },
    // { name: 'frontend', label: 'Frontend', icon: <ExternalLink className="mr-2" /> },
    // { name: 'ai', label: 'AI Projects', icon: <Code className="mr-2" /> },

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