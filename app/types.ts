
export interface Mission {
  flight_number: number | null
  mission_name: string
  mission_id: string[]

  launch_year: string
  launch_date_unix: number
  launch_date_utc: string
  launch_date_local: string

  is_tentative: boolean
  tentative_max_precision: string

  tbd: boolean
  upcoming: boolean

  static_fire_date_unix: number | null
  static_fire_date_utc: string | null

  launch_window: number
  launch_success: boolean | null

  details: string | null
  crew: unknown | null

  launch_failure_details?: LaunchFailureDetails | null

  launch_site: LaunchSite

  links: Links

  telemetry: Telemetry

  reuse: Reuse

  rocket: Rocket

  ships: string[]

  timeline?: Record<string, number>
}

export interface LaunchFailureDetails {
  time: number
  altitude: number | null
  reason: string
}

export interface LaunchSite {
  site_id: string
  site_name: string
  site_name_long: string
}

export interface Links {
  mission_patch: string | null
  mission_patch_small: string | null

  reddit_campaign: string | null
  reddit_launch: string | null
  reddit_recovery: string | null
  reddit_media?: string | null

  presskit?: string | null
  article_link?: string | null
  wikipedia?: string | null

  video_link?: string | null
  youtube_id?: string | null

  flickr_images?: string[]
}

export interface Telemetry {
  flight_club: string | null
}

export interface Reuse {
  core: boolean
  side_core1: boolean
  side_core2: boolean
  fairings: boolean
  capsule: boolean
}

export interface Rocket {
  rocket_id: string
  rocket_name: string
  rocket_type: string

  first_stage: Stage
  second_stage: Stage

  fairings?: Fairings | null
}

export interface Stage {
  cores?: Core[]
  payloads?: Payload[]
}

export interface Core {
  core_serial: string | null
  flight: number | null
  block: number | null

  gridfins: boolean
  legs: boolean
  reused: boolean

  land_success: boolean | null
  landing_intent: boolean
  landing_type: string | null
  landing_vehicle: string | null
}

export interface Payload {
  payload_id: string
  reused: boolean
  customers: string[]

  payload_type: string

  payload_mass_kg: number | null
  payload_mass_lbs: number | null

  orbit: string
}

export interface Fairings {
  reused: boolean
  recovery_attempt: boolean
  recovered: boolean
  ship: string | null
}

export type SpaceXLaunchMinimal = Pick<
  Mission,
  "flight_number" | "mission_name" | "launch_year" | "launch_success" | "details"
>
