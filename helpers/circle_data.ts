interface CircleTypes {
  section: string;
  child: {
    circle_name: string;
    circle_id: string;
  }[];
}
const circle_data: CircleTypes[] = [
  {
    section: "WALL CIRCLE",
    child: [
      {
        circle_id: "W01",
        circle_name: "Clownery Studio",
      },
      {
        circle_id: "W02",
        circle_name: "Bukan Travel Agent",
      },
      {
        circle_id: "W03",
        circle_name: "Sunny Day Circle",
      },
      {
        circle_id: "W04",
        circle_name: "Federasi Biji",
      },
      {
        circle_id: "W05",
        circle_name: "Naderu",
      },
      {
        circle_id: "W06",
        circle_name: "Ashiong Lee",
      },
      {
        circle_id: "W07",
        circle_name: "Sekte Kobro",
      },
      {
        circle_id: "W08",
        circle_name: "Koneko",
      },
      {
        circle_id: "W09",
        circle_name: "Estavia",
      },
    ],
  },
  {
    section: "Blok A",
    child: [
      {
        circle_id: "A01",
        circle_name: "Yuri Nakama",
      },
      {
        circle_id: "A02",
        circle_name: "Yuri Nakama",
      },
      {
        circle_id: "A03",
        circle_name: "HandBand Studios",
      },
      {
        circle_id: "A04",
        circle_name: "SAIVENUE",
      },
      {
        circle_id: "A05",
        circle_name: "MaruMaru",
      },
      {
        circle_id: "A06",
        circle_name: "Pink Zombie",
      },
      {
        circle_id: "A07",
        circle_name: "Kue bawangnya Saskara",
      },
      {
        circle_id: "A08",
        circle_name: "Kue bawangnya Saskara",
      },
      {
        circle_id: "A09",
        circle_name: "Pink Zombie",
      },
    ],
  },
];

export type { CircleTypes };

export default circle_data;
