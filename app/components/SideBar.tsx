'use client';
import { useMissionStore } from "../store";

export default function SideBar() {

    const { setMission, result } = useMissionStore();

    return(
         <aside className="grid grid-cols-5 ">
                <h3>Select A Mission: </h3>
                <select onChange={(selectdMission => setMission(result.find(mission => mission.mission_name === selectdMission.target.value)!))} className="col-span-4">
                    {
                        result.map(mission => {
                            return <option key={mission.mission_name} value={mission.mission_name}>{mission.mission_name}</option>
                        })
                    }
                </select>
            </aside>
    )
}