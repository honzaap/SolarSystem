export const PLANETS = [
    {
        name: "sun",
		displayName: "The Sun",
        description: "Yellow dwarf star",
		year: "230 milion years",
        day: null,
        distanceFromSun: -1,
        radius: 695508,
		TimesLarger: 109.2,
		orbitalVelocity: 0,
        orbitObject: null,
        orbitalRadius: 0,
        betterOrbitalRadius: 0,
        betterScale: 0.15,
        rotationVelocity: 2,
        orbitalInclination: 0,
    },
    {
        name: "earth",
		displayName: "Earth",
        description: "Blue Planet",
		year: "365.25 days",
        day: "23.9 hours",
        distanceFromSun: 1,
        radius: 6371,
		TimesLarger: -1,
		orbitalVelocity: 29.8, //15662880
        orbitObject: "sun",
        orbitalRadius: 149600000, 
        betterOrbitalRadius: 40, //149.6, //149600000 // Scale: 1m : 1 000 000km
        betterScale: 1,
        rotationVelocity: 0.46,
        orbitalInclination: 3,
    }
]