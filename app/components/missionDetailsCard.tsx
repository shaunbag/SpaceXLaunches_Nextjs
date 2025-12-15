import { useMissionStore } from "../store";

export default function MissionDetailsCard(){

    const { mission } = useMissionStore();
    return (
        <div>
            <h2>Mission Details:</h2>
            <p>Mission Name:<span style={{ color: "green" }}>{mission.mission_name}</span> </p>
            <p>Launch Year: <span style={{ color: "green" }}>{mission.launch_year}</span></p>
            <p>Launch Date: <span style={{ color: "green" }}>{mission.launch_date_utc}</span></p>
            <p>Details: <span style={{ color: "green" }}>{mission.details}</span></p>
            <p>Launch Site: <span style={{ color: "green" }}>{mission.launch_site.site_name_long}</span></p>
        </div>
    )
}