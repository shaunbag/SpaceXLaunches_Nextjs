import { useMissionStore } from "../store";

export default function MissionPatch(){

    const { mission } = useMissionStore();

    return(
        <div>
            <h2>Mission Patch:</h2>
            {mission.links.mission_patch && (
                <img src={mission.links.mission_patch_small!} style={{ float: 'inline-start', marginRight: '100px' }}></img>
            )}
        </div>
    )    
}