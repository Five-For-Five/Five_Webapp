const mockEngagementData = [
    {
      id: 1,
      title: "Hilfe bei der Essensausgabe für Obdachlose",
      description: "Unterstütze uns bei der Essensausgabe für Bedürftige.",
      startTime: "2024-11-05T08:00:00",
      endTime: "2024-11-05T12:00:00",
      organizer: "Sozialverein e.V.",
      location: { city: "Berlin", isOnline: false, latitude: 52.5200, longitude: 13.4050 },
      tags: ["Soziale Arbeit und Unterstützung", "Mitfühler"],
      requirements: ["18 Jahre alt", "Zuverlässig"],
      volunteers: { numberOfVolunteers: 5 },
    },
    {
      id: 2,
      title: "Sporttraining für Kinder",
      description: "Leite sportliche Aktivitäten für Kinder in der Nachbarschaft.",
      startTime: "2024-11-06T15:00:00",
      endTime: "2024-11-06T18:00:00",
      organizer: "Sportfreunde e.V.",
      location: { city: "München", isOnline: false, latitude: 48.1351, longitude: 11.5820 },
      tags: ["Sport und Freizeit", "Sportskanone"],
      requirements: ["Teamfähig", "Erfahrung im Umgang mit Kindern"],
      volunteers: { numberOfVolunteers: 10 },
    },
    {
      id: 3,
      title: "Umweltschutz in der Gemeinde",
      description: "Hilf uns beim Müllsammeln und dem Schutz der Natur.",
      startTime: "2024-11-07T09:00:00",
      endTime: "2024-11-07T13:00:00",
      organizer: "Naturschutzbund",
      location: { city: "Hamburg", isOnline: false, latitude: 53.5511, longitude: 9.9937 },
      tags: ["Umwelt- und Naturschutz", "Frischeluftschnapper"],
      requirements: ["Zuverlässig", "Kraftpaket"],
      volunteers: { numberOfVolunteers: 3 },
    },
    {
      id: 4,
      title: "Online-Nachhilfe für Jugendliche",
      description: "Biete Nachhilfe in Mathe und Deutsch für Schüler an.",
      startTime: "2024-11-08T14:00:00",
      endTime: "2024-11-08T16:00:00",
      organizer: "Bildungszentrum Online",
      location: { isOnline: true },
      tags: ["Bildung und Nachhilfe", "Notenfinger"],
      requirements: ["Gute Deutschkenntnisse", "Kreativ"],
      volunteers: { numberOfVolunteers: 1 },
    },
    {
      id: 5,
      title: "Kunstprojekt mit Senioren",
      description: "Gestalte kreative Stunden mit Senioren im Altenheim.",
      startTime: "2024-11-09T10:00:00",
      endTime: "2024-11-09T12:00:00",
      organizer: "Kunst für alle",
      location: { city: "Stuttgart", isOnline: false, latitude: 48.7758, longitude: 9.1829 },
      tags: ["Kunst und Kultur", "Labertasche"],
      requirements: ["Geduldig", "Kommunikationsstark"],
      volunteers: { numberOfVolunteers: 2 },
    },
    {
      id: 6,
      title: "Begleitung für ältere Menschen",
      description: "Begleite Senioren bei Spaziergängen und Besorgungen.",
      startTime: "2024-11-10T10:00:00",
      endTime: "2024-11-10T12:00:00",
      organizer: "Seniorenhilfe e.V.",
      location: { city: "Frankfurt", isOnline: false, latitude: 50.1109, longitude: 8.6821 },
      tags: ["Gesundheit und Pflege", "Granniesitter"],
      requirements: ["Geduldig", "Mitfühler"],
      volunteers: { numberOfVolunteers: 4 },
    },
    {
      id: 7,
      title: "Kochkurs für Jugendliche",
      description: "Leite einen Kochkurs für benachteiligte Jugendliche.",
      startTime: "2024-11-11T17:00:00",
      endTime: "2024-11-11T19:00:00",
      organizer: "Jugend hilft",
      location: { city: "Dortmund", isOnline: false, latitude: 51.5136, longitude: 7.4653 },
      tags: ["Gemeinde- und Stadtentwicklung", "Kochlöffelschwinger"],
      requirements: ["Geduldig", "Erfahrung im Umgang mit Jugendlichen"],
      volunteers: { numberOfVolunteers: 6 },
    },
    {
      id: 8,
      title: "Erste Hilfe Kurs für alle",
      description: "Gib Einblicke in die Grundlagen der Ersten Hilfe.",
      startTime: "2024-11-12T09:00:00",
      endTime: "2024-11-12T12:00:00",
      organizer: "Rotes Kreuz",
      location: { city: "Köln", isOnline: false, latitude: 50.9375, longitude: 6.9603 },
      tags: ["Gesundheit und Pflege", "Mundaufmacher"],
      requirements: ["Grundkenntnisse in Erster Hilfe", "Geduldig"],
      volunteers: { numberOfVolunteers: 7 },
    },
    {
      id: 9,
      title: "Technischer Support für Online-Projekte",
      description: "Hilf uns beim technischen Support für unsere Online-Workshops.",
      startTime: "2024-11-13T18:00:00",
      endTime: "2024-11-13T20:00:00",
      organizer: "Technik hilft",
      location: { isOnline: true },
      tags: ["Computerfuzzi"],
      requirements: ["Technische Kenntnisse", "Flexibel"],
      volunteers: { numberOfVolunteers: 2 },
    },
    {
      id: 10,
      title: "Ehrenamtliche Feuerwehrhilfe",
      description: "Sei Teil der Feuerwehr und hilf im Notfall.",
      startTime: "2024-11-14T12:00:00",
      endTime: "2024-11-14T16:00:00",
      organizer: "Feuerwehrverein",
      location: { city: "Leipzig", isOnline: false, latitude: 51.3397, longitude: 12.3731 },
      tags: ["Katastrophen und Notfalldienste", "Kraftpaket"],
      requirements: ["18 Jahre alt", "Flexibel"],
      volunteers: { numberOfVolunteers: 8 },
    },
  ];
  
  export default mockEngagementData;
  