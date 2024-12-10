import React, { useState, useEffect } from 'react';
import { MessageSquareText } from 'lucide-react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = [
    "I'm a developer.",
    "I'm a coder.",
    "I'm an engineer."
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      // const typingSpeed = isDeleting ? 50 : 100;
      // const deleteSpeed = 50;

      if (!isDeleting && typedText.length < currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentPhrase.slice(0, typedText.length - 1));
      } else if (!isDeleting && typedText.length === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping,
      isDeleting ? 50 : typedText.length === 0 ? 500 : 100
    );

    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting]);

  return (
    <div className='min-h-screen bg-black flex items-center justify-center p-6'>
      <div className='text-center'>
        <div className='mb-6'>
          <h1 className='text-5xl font-bold mb-4
            text-transparent bg-clip-text
            bg-gradient-to-r from-neon-cyan to-neon-magenta
            animate-pulse'>
            Hello
          </h1>
          <div className='flex items-center justify-center space-x-2'>
            <MessageSquareText
              className='text-neon-green animate-bounce'
              size={32}
            />
            <h2 className='text-3xl font-semibold
              text-neon-blue
              drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]'>
              My name is Abhay Raj,
              <span className='text-neon-green ml-2'>
                {typedText}
                <span className='animate-pulse text-neon-pink'>|</span>
              </span>
            </h2>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4 mt-12'>
          {[
            { icon: '💻', text: 'Web Development', color: 'neon-teal' },
            { icon: '🚀', text: 'Problem Solving', color: 'neon-fuchsia' },
            { icon: '🎨', text: 'Creative Coding', color: 'neon-green' }
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-${item.color}
                border-2 border-transparent
                hover:border-${item.color}
                transition-all duration-300
                bg-gray-900/50`}
            >
              <div className='text-6xl mb-4 text-center'>{item.icon}</div>
              <h3 className={`text-xl font-semibold text-white text-center`}>
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;