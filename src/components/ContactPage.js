import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Linkedin,
  Github,
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // not working right now.
    console.log('Form Submitted:', formData);

    // rest after asubmit
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const socialLinks = [
    {
      icon: <Linkedin className="text-neon-blue" />,
      link: 'https://www.linkedin.com/in/abhay-raj-ab0445287/',
      label: 'LinkedIn'
    },
    {
      icon: <Github className="text-neon-green" />,
      link: 'https://github.com/barrybyte',
      label: 'GitHub'
    },
  ];

  return (
    <div className='min-h-screen bg-black flex items-center justify-center p-6'>
      <div className='w-full max-w-5xl grid md:grid-cols-2 gap-8'>
        {/* contact form section */}
        <div className='bg-gray-900/50 p-8 rounded-xl
          border-2 border-transparent
          hover:border-neon-cyan
          transition-all duration-300'>
          <h1 className='text-4xl font-bold mb-6
            text-transparent bg-clip-text
            bg-gradient-to-r from-neon-cyan to-neon-magenta'>
            Get in Touch
          </h1>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid md:grid-cols-2 gap-4'>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className='w-full p-3 bg-gray-800
                  text-white rounded-lg
                  focus:outline-none
                  focus:ring-2 focus:ring-neon-blue'
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className='w-full p-3 bg-gray-800
                  text-white rounded-lg
                  focus:outline-none
                  focus:ring-2 focus:ring-neon-green'
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className='w-full p-3 bg-gray-800
                text-white rounded-lg
                focus:outline-none
                focus:ring-2 focus:ring-neon-magenta'
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className='w-full p-3 bg-gray-800
                text-white rounded-lg
                focus:outline-none
                focus:ring-2 focus:ring-neon-pink'
            />
            <button
              type="submit"
              className='w-full p-3 bg-neon-cyan
                text-black font-bold rounded-lg
                hover:bg-neon-green
                transition-colors
                flex items-center justify-center'
            >
              <Send className="mr-2" /> Send Message
            </button>
          </form>
        </div>

        {/* contact information section */}
        <div className='bg-gray-900/50 p-8 rounded-xl
          border-2 border-transparent
          hover:border-neon-magenta
          transition-all duration-300
          flex flex-col justify-between'>
          <div>
            <h2 className='text-3xl font-bold mb-6
              text-transparent bg-clip-text
              bg-gradient-to-r from-neon-pink to-neon-blue'>
              Contact Information
            </h2>

            <div className='space-y-4'>
              <div className='flex items-center text-neon-green'>
                <Mail className="mr-3" />
                <span>abhayraj.12667@gmail.com</span>
              </div>
              <div className='flex items-center text-neon-blue'>
                <Phone className="mr-3" />
                <span>+91 6200731408</span>
              </div>
              <div className='flex items-center text-neon-cyan'>
                <MapPin className="mr-3" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='text-xl mb-4 text-white'>Connect with Me</h3>
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:scale-110 transition-transform'
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;