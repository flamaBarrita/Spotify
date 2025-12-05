'use client'

import React from 'react';
import Image from 'next/image';
import { SongData } from '@/lib/data';
import { usePlayer } from '@/context/PlayerContext';

interface AudioCardProps {
    song: SongData;
}

export default function AudioCard({ song }: AudioCardProps) {
    const { playSong } = usePlayer();

    return (
        <button 
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 text-left"
            onClick={() => playSong(song)} // <-- ENVÍA EL ENLACE DE CLOUDFRONT AL REPRODUCTOR
        >
            <div className="relative w-full h-32 mb-4">
                <Image 
                    src={song.urlImage} 
                    alt={song.title} 
                    fill 
                    style={{objectFit: 'cover'}}
                    className="rounded"
                />
            </div>
            <h3 className="text-lg font-bold">{song.title}</h3>
            <p className="text-sm text-gray-400">{song.description}</p>
        </button>
    );
}