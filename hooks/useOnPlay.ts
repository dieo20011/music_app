import { Song } from "@/type";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";


const useOnPlay = (song: Song[]) =>{
    const player = usePlayer();
    const authModal = useAuthModal();
    const {user} = useUser();

    const OnPlay = (id:string) =>{
        if(!user){
            return authModal.onOpen();
        }
        player.setId(id);
        player.setIds(song.map((song)=> song.id));
    }
    return OnPlay;
}
export default useOnPlay;