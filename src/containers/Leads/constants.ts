export const LEAD_STATUSES_EN = [
  {
    value: "00NEW",
    label: "New lead",
  },
  {
    value: "10CONTACTED",
    label: "Contacted",
  },
  {
    value: "20APPOINTED",
    label: "Appointed",
  },
  {
    value: "30CONSULTING",
    label: "Consulting",
  },
  {
    value: "31ONEONONE",
    label: "OneOnOne",
  },
  {
    value: '32GOTOPJLOCATION',
    label: "Go To Project Location",
  },
  {
    value: "40TRANSACTED",
    label: "Transacted",
  },
  {
    value: "41BOOKED",
    label: "Booked",
  },
  {
    value: "42DEPOSITED",
    label: "Deposited",
  },
  {
    value: "50CONVERTED",
    label: "Converted",
  },
  {
    value: "60CLOSEDLOST",
    label: "Closed - Lost",
  },
];

export const LEAD_STATUSES_VN = [
  {
    value: "00NEW",
    label: "Lead mới",
  },
  {
    value: "10CONTACTED",
    label: "Đã liên hệ",
  },
  {
    value: "20APPOINTED",
    label: "Chốt cuộc hẹn",
  },
  {
    value: "30CONSULTING",
    label: "Tư vấn",
  },
  {
    value: "31ONEONONE",
    label: "Tư vấn 1-1",
  },
  {
    value: "32GOTOPJLOCATION",
    label: "Đến dự án",
  },
  {
    value: "40TRANSACTED",
    label: "Giao dịch thành công",
  },
  {
    value: "41BOOKED",
    label: "Đặt chỗ",
  },
  {
    value: "42DEPOSITED",
    label: "Đặt cọc",
  },
  {
    value: "50CONVERTED",
    label: "Lead thành công",
  },
  {
    value: "60CLOSEDLOST",
    label: "Thất bại",
  },
];

export const LEAD_SOURCES_EN = [
  {
    value: 0,
    label: "Project site",
  },
  {
    value: 1,
    label: "Social media",
  },
  {
    value: 2,
    label: "Call",
  },
  {
    value: 3,
    label: "Partner reference",
  },
  {
    value: 4,
    label: "Email",
  },
  {
    value: 5,
    label: "Seminar",
  },
];

export const LEAD_SOURCES_VN = [
  {
    value: 0,
    label: "Địa điểm dự án",
  },
  {
    value: 1,
    label: "Mạng xã hội",
  },
  {
    value: 2,
    label: "Cuộc gọi",
  },
  {
    value: 3,
    label: "Đối tác tham chiếu",
  },
  {
    value: 4,
    label: "Email",
  },
  {
    value: 5,
    label: "Hội thảo",
  },
];

export const RATING = [
  {
    value: 0,
    label: "Cold",
  },
  {
    value: 1,
    label: "Warm",
  },
  {
    value: 2,
    label: "Hot",
  },
];

export const RATING_EN = [
  {
    value: 0,
    label: "Cold",
  },
  {
    value: 1,
    label: "Warm",
  },
  {
    value: 2,
    label: "Hot",
  },
];

export const RATING_VN = [
  {
    value: 0,
    label: "Lạnh",
  },
  {
    value: 1,
    label: "Ấm",
  },
  {
    value: 2,
    label: "Nóng",
  },
];

export const GENDERS = [
  {
    value: 0,
    label: "Male",
  },
  {
    value: 1,
    label: "Female",
  },
  {
    value: 2,
    label: "Other",
  },
];

export const GENDERS_EN = [
  {
    value: 0,
    label: "Male",
  },
  {
    value: 1,
    label: "Female",
  },
  {
    value: 2,
    label: "Other",
  },
];

export const GENDERS_VN = [
  {
    value: 0,
    label: "Nam",
  },
  {
    value: 1,
    label: "Nữ",
  },
  {
    value: 2,
    label: "Khác",
  },
];
export enum ELeadsQuickFilter {
  ALL = "ALL",
  MY_LIST = "MY_LIST",
  NEW_LAST_WEEK = "NEW_LAST_WEEK",
  NEW_THIS_WEEK = "NEW_THIS_WEEK",
  RECENTLY_CREATED = "RECENTLY_CREATED",
  RECENTLY_MODIFIED = "RECENTLY_MODIFIED",
  UNREAD = "UNREAD",
}
export interface ILeadsQuickFilterOptions {
  label: string;
  value: ELeadsQuickFilter
}
export interface IColumnsBody {
  name?: string;
  sq?: number;
  hide?: boolean | null;
  html?: any;
  [key: string]: any;
}
export type TItemsKaban = {
  name?: string | null;
  items: {
    email?: string | null,
    id?: string | null,
    name?: string | null,
    phone?: string | null,
  }[];
  statusId?: string | null;
}
export interface Kanban<T> {
  [x: string]: T
}