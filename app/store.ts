import { create } from 'zustand';
import { Mission } from './types';

type MissionStore = {
    mission: Mission;
    setMission: (mission: Mission) => void;
}

export const useMissionStore = create<MissionStore>((set) => ({
    mission: {
        flight_number: null,
        mission_name: "",
        mission_id: [],        
        launch_year: "",
        launch_date_unix: 0,
        launch_date_utc: "",
        launch_date_local: "",        
        is_tentative: true,
        tentative_max_precision: "",        
        tbd: true,
        upcoming: true,        
        static_fire_date_unix: null,
        static_fire_date_utc: null,
        launch_window: 0,
        launch_success:  null,
        details: null,
        crew:  null,
        launch_failure_details: null,        
        launch_site: {
            site_id: "",
            site_name: "",
            site_name_long: "",    
        },
        links: {
            mission_patch: null,
            mission_patch_small: null,
            reddit_campaign: null,
            reddit_launch: null,
            reddit_recovery: null,
            reddit_media: null,
            presskit: null,
            article_link: null,
            wikipedia: null,
            video_link: null,
            youtube_id: null,
            flickr_images: []
        },
        telemetry: {
            flight_club: null
        },
        reuse: {
            core: false,
            side_core1: false,
            side_core2: false,
            fairings: false,
            capsule: false
        },
        rocket: {
            rocket_id: "",
            rocket_name: "",
            rocket_type: "",
            first_stage: {
                cores: []
            },
            second_stage: {
                payloads: []
            },
            fairings: null
        },
        ships: [],
        timeline: {}
    },
    setMission: (mission: Mission) => set({ mission })
}))