import { useMissionStore } from '../store';

export default function TechnicalDetails() {

    const { mission } = useMissionStore();

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <div>
                <h2>Technical Details:</h2>
                <p>Rocket Name: <span style={{ color: "green" }}>{mission.rocket.rocket_name}</span></p>
                <p>Rocket Type: <span style={{ color: "green" }}>{mission.rocket.rocket_type}</span></p>
            </div>
            <div>
                {
                    mission.rocket.second_stage.payloads && (

                        mission.rocket.second_stage.payloads.map((payload, index) => (
                            <div key={index}>
                                <h3>Payload {index + 1}:</h3>
                                <p>Payload Type: <span style={{ color: "green" }}>{payload.payload_type}</span></p>
                            </div>
                        ))

                    )
                }
                <p>Launch Success: <span style={{ color: "green" }}>{mission.launch_success ? "Yes" : "No"}</span></p>
            </div>
            <div>
                <h3>Rocket Details:</h3>
                <p>Side Core 1 Reused: <span style={{ color: "green" }}>{mission.reuse.side_core1 ? "Yes" : "No"}</span></p>
                <p>Side Core 2 Reused: <span style={{ color: "green" }}>{mission.reuse.side_core2 ? "Yes" : "No"}</span></p>
                <p>Fairings Reused: <span style={{ color: "green" }}>{mission.reuse.fairings ? "Yes" : "No"}</span></p>
                <p>Capsule Reused: <span style={{ color: "green" }}>{mission.reuse.capsule ? "Yes" : "No"}</span></p>

            </div>
        </div>
    )
}