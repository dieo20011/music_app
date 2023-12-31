"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Song } from "@/type";
import { useUser } from "@/hooks/useUser";
import LikeButton from "@/components/LikedButton";
import MediaItem from "@/components/MediaItem";

interface LikedContentProps {
  songs: Song[];
};

const LikedContent: React.FC<LikedContentProps> = ({
  songs
}) => {
  const router = useRouter();
  const { isLoading, user } = useUser();


  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div 
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full px-6 
          text-neutral-400
        "
      >
        No liked songs.
      </div>
    )
  }
  return ( 
    <div className="flex flex-col gap-y-2 w-full p-6">
        {songs.map((song)=>(
            <div key={song.id} className="flex items-center gap-x-4 w-full">
                    <div className="flex-1">
                        <MediaItem data={song}/>
                    </div>  
                    <LikeButton songId={song.id}/>
            </div>
        ))}
    </div>
  );
}
 
export default LikedContent;