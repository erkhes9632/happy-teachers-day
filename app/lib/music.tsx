export const MUSIC_START_EVENT = "teachers-day:start-music";

export function startMusic() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(MUSIC_START_EVENT));
  }
}
