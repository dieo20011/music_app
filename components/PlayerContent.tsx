"use client"

import { Song } from '@/type';
import React from 'react'
import MediaItem from './MediaItem';
import LikeButton from './LikedButton';
import {BsPauseFill, BsPlayFill} from 'react-icons/bs';

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({song, songUrl}) => {
    const Icon = true ? BsPauseFill : BsPlayFill;
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 h-full'>
        <div className='flex w-full justify-start'>
            <div className='flex items-center gap-x-4'>
                <MediaItem data={song}/>
                <LikeButton songId={song.id}/>
            </div>
        </div>
        <div className='flex md:hidden col-auto w-full justify-end items-center'>
            <div className='h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer'>
                <Icon size={30} className='text-black'/>
            </div>
        </div>
        <div className='hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6'>

        </div>
    </div>
  )
}

export default PlayerContent