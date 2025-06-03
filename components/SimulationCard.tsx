"use client";

import { useState } from 'react';
import Image from 'next/image';

interface SimulationCardProps {
  id: number;
  title: string;
  imageUrl: string;
}

export default function SimulationCard({ id, title, imageUrl }: SimulationCardProps) {
  const [score, setScore] = useState<number | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setScore(Math.floor(Math.random() * 100));
  };

  const handleRetry = () => {
    setScore(null);
    setIsStarted(false);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center p-4 border-b last:border-b-0 animate-slide-up">
      <div className="w-full sm:w-[500px] h-80 relative overflow-hidden rounded-lg">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 space-y-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        
        <div className="flex flex-col space-y-2">
          <button 
            onClick={handleStart}
            className="simulation-button border border-gray-300 rounded"
          >
            START
          </button>
          
          <button 
            onClick={handleRetry}
            className="simulation-button border border-gray-300 rounded"
            disabled={!isStarted}
          >
            RETRY
          </button>
          
          <div className="mt-2">
            <p className="font-medium">SCORE: {score !== null ? score : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}