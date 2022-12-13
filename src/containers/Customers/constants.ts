export const LEAD_STATUSES_EN = [
  {
    value: 1,
    label: "New lead",
  },
  {
    value: 2,
    label: "Contacted",
  },
  {
    value: 3,
    label: "Appointed",
  },
  {
    value: 4,
    label: "Consulting",
  },
  {
    value: 5,
    label: "Transacted",
  },
  {
    value: 6,
    label: "Nuturing",
  },
  {
    value: 7,
    label: "Converted",
  },
  {
    value: 8,
    label: "Closed - Lost",
  },
];

export const LEAD_STATUSES_VN = [
  {
    value: 1,
    label: "Lead mới",
  },
  {
    value: 2,
    label: "Đã liên hệ",
  },
  {
    value: 3,
    label: "Chốt cuộc hẹn",
  },
  {
    value: 4,
    label: "Tư vấn",
  },
  {
    value: 5,
    label: "Giao dịch thành công",
  },
  {
    value: 6,
    label: "Đang duy trì",
  },
  {
    value: 7,
    label: "Lead thành công",
  },
  {
    value: 8,
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

export const OPTION_GENDER_EN = [
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

export const OPTION_GENDER_VN = [
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

export const OPTION_ID_TYPE_EN = [
  {
    value: 0,
    label: "Citizen ID",
  },
  {
    value: 1,
    label: "Passport",
  },
];

export const OPTION_ID_TYPE_VN = [
  {
    value: 0,
    label: "Căn cước công dân",
  },
  {
    value: 1,
    label: "Hộ chiếu",
  },
];

export interface IColumnsBody {
  name?: string;
  sq?: number;
  hide?: boolean | null;
  html?: any;
  [key: string]: any;
}

export enum ECustomerQuickFilter {
  ALL = "ALL",
  MY_LIST = "MY_LIST",
  NEW_LAST_WEEK = "NEW_LAST_WEEK",
  NEW_THIS_WEEK = "NEW_THIS_WEEK",
  RECENTLY_CREATED = "RECENTLY_CREATED",
  RECENTLY_MODIFIED = "RECENTLY_MODIFIED",
  UNREAD = "UNREAD",
}
export interface ICustomerQuickFilterOptions {
  label: string;
  value: ECustomerQuickFilter
}