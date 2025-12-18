'use client'
import { useEffect } from "react";
import { useMissionStore } from "./store";
import ImageCarousel from "./components/imageCarousel";
import MissionDetailsCard from "./components/missionDetailsCard";
import VideoDisplay from "./components/videoDisplay";
import TechnicalDetails from "./components/technicalDetails";
import MissionPatch from "./components/MissionPatch";

export default function Main() {

    const { mission, setResult } = useMissionStore();

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

            <div>
                {
                    mission.flight_number && (
                        <><MissionPatch /><MissionDetailsCard /></>

                    )
                }
            </div>
            <div className="grid grid-rows-2 gap-2">
                {
                    mission.flight_number && (
                        <><ImageCarousel /><TechnicalDetails /><VideoDisplay /></>
                    )
                }

            </div>

        </div>
    )
}