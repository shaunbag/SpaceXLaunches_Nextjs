'use-client'
import { useMissionStore } from "../store";

export default function VideoDisplay(){

    const { mission } = useMissionStore();

    return (
        <div>
            {mission.links.video_link && (
                <iframe
                    width="100%"
                    height="615"
                    src={mission.links.youtube_id ? `https://www.youtube.com/embed/` + mission.links.youtube_id : ""}
                    allowFullScreen
                    title="embedded video" />
            )}
        </div>
    )
}