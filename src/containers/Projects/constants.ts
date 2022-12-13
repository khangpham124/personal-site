export const LEAD_STATUSES = [
  "Chưa liên hệ",
  "Đã thử liên hệ",
  "Đã liên hệ",
  "Liên hệ sau",
  "Bán thất bại",
  "Không phù hợp",
];

// export const LEAD_SOURCES = [
//   "Website",
//   "Social",
//   "Phone",
//   "Partner",
//   "Email",
//   "Conference",
// ];

export const LEAD_SOURCES = [
  {
    value: 1,
    label: "Website",
  },
  {
    value: 2,
    label: "Social",
  },
  {
    value: 3,
    label: "Phone",
  }, {
    value: 4,
    label: "Partner",
  }, {
    value: 5,
    label: "Email",
  }, {
    value: 6,
    label: "Conference",
  },
];

export const RATING = ["HOT", "WARM", "COLD"];

export const STATUS_PROJECT = [
  {
    value: 'NEW',
    label: "New",
  },
  {
    value: 'IN_PROGRESS',
    label: "In progress",
  },
  {
    value: 'UNDER_CONSTRUCTION',
    label: "Under construction",
  },
  {
    value: 'HANDED_OVER',
    label: "Handed over",
  },
  {
    value: 'STOPPED',
    label: "Stopped",
  },
];


export const QUARTER =  [
  {
    value: 1,
    label: "Quarter 1",
  },
  {
    value: 2,
    label: "Quarter 2",
  },
  {
    value: 3,
    label: "Quarter 3",
  }, {
    value: 4,
    label: "Quarter 4",
  }
];

const YEAR = [];
for (let i = 1990; i <= 2100; i++) {
  const item =
  {
    value: i,
    label: i,
  }
  YEAR.push(item)
}

export const YEAR_OPTIONS = YEAR;

