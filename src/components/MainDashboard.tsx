'use client'

import React from 'react';
import { contentList } from '@/lib/data';
import PlayerFooter from '@/components/PlayerFooter'; // Lo crearemos en el siguiente paso
import AudioCard from '@/components/AudioCard'; // Lo crearemos en el siguiente paso

export default function MainDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <header className="p-6 text-2xl font-bold border-b border-gray-700">
            Mi Streaming Híbrido (AWS + OCI)
        </header>

        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <h2 className="col-span-full text-xl font-semibold mb-4">Contenido para ti:</h2>
            
            {contentList.map(song => (
                <AudioCard key={song.id} song={song} />
            ))}
        </main>

        <PlayerFooter />
    </div>
  );
}