'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  date: string;
  description: string[];
  imagePath: string;
  githubUrl: string;
  languages: string[];
}

export default function ProjectCard({ 
  title, 
  date, 
  description, 
  imagePath,
  githubUrl,
  languages 
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card - keep existing code */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black/50 p-4">
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="text-white/80">{date}</p>
            </div>
          </div>
        </div>

        {/* Back of card - updated */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="h-full flex flex-col">
            {/* GitHub Link */}
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 
                       transition-colors px-4 py-2 rounded-lg text-white w-fit mb-4"
            >
              <FaGithub className="text-xl" />
              <span>View Repository</span>
            </a>

            {/* Languages */}
            <div className="mb-4">
              <h4 className="text-white/90 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span 
                    key={lang}
                    className="bg-white/20 px-3 py-1 rounded-full text-sm text-white"
                  >
                    {lang}: {lang}%
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <ul className="list-disc list-inside text-white/80 space-y-2 flex-grow">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-white/60 mt-4">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}