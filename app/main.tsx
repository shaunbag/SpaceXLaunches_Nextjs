'use client'
import { useEffect, useState } from "react";
import { Mission } from "./types";
import { useMissionStore } from "./store";
import ImageCarousel from "./components/imageCarousel";
import MissionDetailsCard from "./components/missionDetailsCard";
import VideoDisplay from "./components/videoDisplay";

export default function Main() {

    const [result, setResult] = useState<Mission[]>([]);
    const { setMission, mission } = useMissionStore();

    useEffect(() => {
        const callAPi = async () => {
            try {
                const data = await fetch("/api/spacex")
                const json = await data.json()
                console.log("the data from node: ", json)
                setResult(json)
            } catch (e) {
                console.log(e)
            }
        }
        callAPi();
    }, [])

    return (
        <div className="fixed top-0 left-0 ">
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
            <div>
                {
                    mission.flight_number && (
                        <><h2>Mission Patch:</h2><div>
                            {mission.links.mission_patch && (
                                <img src={mission.links.mission_patch_small!} style={{ float: 'inline-start', marginRight: '100px' }}></img>
                            )}
                            <div>
                                <MissionDetailsCard />
                            </div>
                        </div></>
                    )
                }


            </div>
            <div className="grid grid-rows-2 gap-2">
                <ImageCarousel />
                <VideoDisplay />
            </div>

        </div>
    )
}