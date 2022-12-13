import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import moment from "moment";
import toastr from "toastr";
import { useTranslation } from "react-i18next";
import {
  DragDropContext,
  DropResult,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import { styled } from "@stitches/react";
import Paginate from "../../components/Paginate";
import {
  LEAD_STATUSES_EN,
  LEAD_STATUSES_VN,
  LEAD_SOURCES_EN,
  LEAD_SOURCES_VN,
  GENDERS_VN,
  GENDERS_EN,
  RATING_VN,
  RATING_EN,
  IColumnsBody,
  Kanban,
  TItemsKaban,
  ILeadsQuickFilterOptions,
  ELeadsQuickFilter,
} from "./constants";
import Modal from "../../components/ModalCreate";
import { TRootState } from "src/state-management/reducers";
import { fetchLeadsAction, uiActions } from "src/state-management/actions";
import { EPaginate } from "utils/types";
import { ELeadsActions } from "src/state-management/actions/leads/constants";
import Column from "../../components/Column";
import FilterContainer from "./filter";
import CreateContainer from "./create";
import Cookies from "js-cookie";
import { v4 as uuid } from "uuid";
import { CSVLink } from "react-csv";

import { LeadAPI } from "../../services/identity/lead-api";
import { companyAPI } from "../../services/identity/company";

import Select from "react-select";
import LeadsInstance from "services/identity/leads";
import { TLead } from "services/identity/leads/types";

const servicesLeadApi = new LeadAPI();

const servicesCompanyAPI = new companyAPI();
const LeadsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const langCookies = Cookies.get("lang");
  const companyID = String(Cookies.get("companyID"));
  const companyName = String(Cookies.get("companyName"));
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const leads = useSelector((state: TRootState) => state.leads.data);
  const { t: translator } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showColumn, setshowColumn] = useState(false);
  const [columnsKanban, setColumnsKanban] = useState<Kanban<TItemsKaban>>();
  const [listUsers, setListUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(EPaginate.DEFAULT_PAGE_INDEX);
  const [selectSubSteps, setSelectSubSteps] = useState<
    {
      label: string;
      value: string;
      parent: string;
    }[]
  >([]);

  const StyledColumns = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    margin: "0px auto",
    width: "80%",
    gap: "8px",
  });
  const handleQuickFilter = (value: ELeadsQuickFilter) => {
    const optionalParams = {
      sort: JSON.stringify({ createdAt: "DESC" }),
      quickFilter: value,
    };
    dispatch(
      fetchLeadsAction.request(
        1,
        EPaginate.COMMON_PAGE_SIZE,
        companyID,
        optionalParams
      )
    );
  };
  const handlePaginate = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    const optionalParams = { sort: JSON.stringify({ createdAt: "DESC" }) };
    dispatch(
      fetchLeadsAction.request(
        selected,
        EPaginate.COMMON_PAGE_SIZE,
        companyID,
        optionalParams
      )
    );
  };

  const fetchLeads = (
    pageIndex: number,
    pageSize: number,
    companyId: string,
    optionalParams?: any
  ) => {
    dispatch(
      fetchLeadsAction.request(pageIndex, pageSize, companyId, optionalParams)
    );
  };

  useEffect(() => {
    LeadsInstance.fetchLeads(1, 1000, companyID).then((leads) => {
      let getListLeads = leads?.items;
      setTotalLeads(leads?.items);
      const itemsNewLead = getListLeads
        ?.filter(
          (item) => item?.leadStatus === "00NEW" || item.leadStatus === ""
        )
        .map((item: any) => ({
          id: item.id,
          name: `${item.personalInfo.firstName} ${item.personalInfo.lastName}`,
          email: `${item.personalInfo.email}`,
          phone: `${item.personalInfo.phoneNumber}`,
        }));

      const itemsContacted = getListLeads
        ?.filter((item) => item.leadStatus === "10CONTACTED")
        .map((item: any) => ({
          id: item.id,
          name: `${item.personalInfo.firstName} ${item.personalInfo.lastName}`,
          email: `${item.personalInfo.email}`,
          phone: `${item.personalInfo.phoneNumber}`,
        }));

      const itemsAppointed = getListLeads
        ?.filter((item) => item.leadStatus === "20APPOINTED")
        .map((item: any) => ({
          id: item.id,
          name: `${item.personalInfo.firstName} ${item.personalInfo.lastName}`,
          email: `${item.personalInfo.email}`,
          phone: `${item.personalInfo.phoneNumber}`,
        }));

      const itemsConsulting = getListLeads
        ?.filter(
          (item) =>
            item.leadStatus === "30CONSULTING" ||
            item.leadStatus === "31ONEONONE" ||
            item.leadStatus === "32GOTOPJLOCATION"
        )
        .map((item: any) => ({
          id: item.id,
          name: `${item.personalInfo.firstName} ${item.personalInfo.lastName}`,
          email: `${item.personalInfo.email}`,
          phone: `${item.personalInfo.phoneNumber}`,
        }));

      const itemsTransacted = getListLeads
        ?.filter(
          (item) =>
            item.leadStatus === "40TRANSACTED" ||
            item.leadStatus === "41BOOKED" ||
            item.leadStatus === "42DEPOSITED"
        )
        .map((item: any) => ({
          id: item.id,
          name: `${item.personalInfo.firstName} ${item.personalInfo.lastName}`,
          email: `${item.personalInfo.email}`,
          phone: `${item.personalInfo.phoneNumber}`,
        }));

      const columnsFromBackend = {
        [uuid()]: {
          name: "New lead",
          items: itemsNewLead,
          statusId: "00NEW",
        },
        [uuid()]: {
          name: "Contacted",
          items: itemsContacted,
          statusId: "10CONTACTED",
        },
        [uuid()]: {
          name: "Appointed",
          items: itemsAppointed,
          statusId: "20APPOINTED",
        },
        [uuid()]: {
          name: "Consulting",
          items: itemsConsulting,
          statusId: "30CONSULTING",
        },
        [uuid()]: {
          name: "Transacted",
          items: itemsTransacted,
          statusId: "40TRANSACTED",
        },
      };
      setColumnsKanban(columnsFromBackend);
    });

    servicesCompanyAPI.getDetailCompany(companyID).then((items) => {
      setListUsers(items?.data?.items);
    });
  }, []);

  useEffect(() => {
    const optionalParams = { sort: JSON.stringify({ createdAt: "DESC" }) };
    fetchLeads(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      companyID,
      optionalParams
    );
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(uiActions.resetActionStatus(ELeadsActions.FETCH_LEADS));
      dispatch(uiActions.resetActionStatus(ELeadsActions.CREATE_LEAD));
    };
  }, [dispatch]);

  let initialColumns: {
    [key: string]: {
      id: string;
      list: string[];
    };
  } = {
    hide: {
      id: "hide",
      list: [],
    },
    show: {
      id: "show",
      list: [
        "Phone",
        "Email",
        "Lead Status",
        "Rating",
        "Products Interest",
        "Lead Source",
        "Created by",
        "Street",
        "City",
        "Social Media",
        "Gender",
        "Last modified by",
      ],
    },
  };

  const subStepStatus_30CONSULTING = [
    {
      label: "One On One",
      value: "31ONEONONE",
      parent: "30CONSULTING",
    },
    {
      label: "Go To Project Location",
      value: "32GOTOPJLOCATION",
      parent: "30CONSULTING",
    },
  ];

  const subStepStatus_40TRANSACTED = [
    {
      label: "Booked",
      value: "41BOOKED",
      parent: "40TRANSACTED",
    },
    {
      label: "Deposited",
      value: "42DEPOSITED",
      parent: "40TRANSACTED",
    },
  ];

  const [columns, setColumns] = useState(initialColumns);
  const [hideEmail, setHideEmail] = useState(false);
  const [hidePhone, setHidePhone] = useState(false);
  const [hideLeadStt, setHideLeadStt] = useState(false);
  const [hideRating, setHideRating] = useState(false);
  const [hideProductInt, setHideProductInt] = useState(false);
  const [hideLeadSource, setHideLeadSource] = useState(false);
  const [hideCreatedby, setHideCreatedby] = useState(false);
  const [hideStreet, setHideStreet] = useState(false);
  const [hideCity, setHideCity] = useState(false);
  const [hideSocial, setHideSocial] = useState(false);
  const [hideGender, setHideGender] = useState(false);
  const [hideLastModifyBy, setHideLastModifyBy] = useState(false);

  const [seqEmail, setSeqEmail] = useState(0);
  const [seqPhone, setSeqPhone] = useState(0);
  const [seqLeadStt, setSeqLeadStt] = useState(0);
  const [seqRating, setSeqRating] = useState(0);
  const [seqProductInt, setSeqProductInt] = useState(0);
  const [seqLeadSource, setSeqLeadSource] = useState(0);
  const [seqCreatedby, setSeqCreatedby] = useState(0);
  const [seqStreet, setSeqStreet] = useState(0);
  const [seqCity, setSeqCity] = useState(0);
  const [seqSocial, setSeqSocial] = useState(0);
  const [seqGender, setSeqGender] = useState(0);
  const [seqLastModifyBy, setSeqLastModifyBy] = useState(0);
  const [activeFilter, setActiveFilter] = useState(false);

  const [kanbanView, setKanbanView] = useState(false);

  const [selectedLeadList, setSelectedLeadList] = useState<string[]>([]);
  const [totalLeads, setTotalLeads] = useState<TLead[]>([]);
  const [showDeleteMassLeads, setShowDeleteMassLeads] = useState<boolean>(
    false
  );

  const [showUpdateSubStatus, setShowUpdateSubStatus] = useState<boolean>(
    false
  );

  const [leadIDUpdate, setLeadIDUpdate] = useState("");

  const checkNameAndAge = async (strArray: any) => {
    console.log(strArray);
    for (let i = 0; i <= strArray.length; i++) {
      for (let j = 1; j <= strArray.length; j++) {
        if (
          strArray[i].name === strArray[j].name &&
          strArray[i].age === strArray[j].age
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  useEffect(() => {
    const hideList = JSON.parse(localStorage.getItem("hide") ?? "{}");
    const showList = JSON.parse(localStorage.getItem("show") ?? "{}");
    let listInHide = hideList?.list ? hideList?.list : initialColumns.hide.list;
    let listInShow = showList?.list ? showList?.list : initialColumns.show.list;
    initialColumns.hide.list = listInHide;
    initialColumns.show.list = listInShow;
    // Set Show hide columm
    initialColumns.hide?.list?.includes("Email")
      ? setHideEmail(true)
      : setHideEmail(false);
    initialColumns.hide?.list?.includes("Phone")
      ? setHidePhone(true)
      : setHidePhone(false);
    initialColumns.hide?.list?.includes("Lead Status")
      ? setHideLeadStt(true)
      : setHideLeadStt(false);
    initialColumns.hide?.list?.includes("Rating")
      ? setHideRating(true)
      : setHideRating(false);
    initialColumns.hide?.list?.includes("Products Interest")
      ? setHideProductInt(true)
      : setHideProductInt(false);
    initialColumns.hide?.list?.includes("Lead Source")
      ? setHideLeadSource(true)
      : setHideLeadSource(false);
    initialColumns.hide?.list?.includes("Created by")
      ? setHideCreatedby(true)
      : setHideCreatedby(false);
    initialColumns.hide?.list?.includes("Street")
      ? setHideStreet(true)
      : setHideStreet(false);
    initialColumns.hide?.list?.includes("City")
      ? setHideCity(true)
      : setHideCity(false);
    initialColumns.hide?.list?.includes("Social Media")
      ? setHideSocial(true)
      : setHideSocial(false);
    initialColumns.hide?.list?.includes("Gender")
      ? setHideGender(true)
      : setHideGender(false);
    initialColumns.hide?.list?.includes("Last modified by")
      ? setHideLastModifyBy(true)
      : setHideLastModifyBy(false);
    // Set SQ column
    setSeqPhone(initialColumns.show?.list?.indexOf("Phone"));
    setSeqEmail(initialColumns.show?.list?.indexOf("Email"));
    setSeqLeadStt(initialColumns.show?.list?.indexOf("Lead Status"));
    setSeqRating(initialColumns.show?.list?.indexOf("Rating"));
    setSeqProductInt(initialColumns.show?.list?.indexOf("Products Interest"));
    setSeqLeadSource(initialColumns.show?.list?.indexOf("Lead Source"));
    setSeqCreatedby(initialColumns.show?.list?.indexOf("Created by"));
    setSeqStreet(initialColumns.show?.list?.indexOf("Street"));
    setSeqCity(initialColumns.show?.list?.indexOf("City"));
    setSeqSocial(initialColumns.show?.list?.indexOf("Social Media"));
    setSeqGender(initialColumns.show?.list?.indexOf("Gender"));
    setSeqLastModifyBy(initialColumns.show?.list?.indexOf("Last modified by"));
  }, []);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination === undefined || destination === null) return null;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];
    if (start === end) {
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      newList.splice(destination.index, 0, start.list[source.index]);

      const newCol = {
        id: start.id,
        list: newList,
      };
      if (newCol.id === "show") {
        localStorage.setItem("show", JSON.stringify(newCol));
        initialColumns.show = newCol;
      }
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));

      return null;
    } else {
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      const newEndList = end.list;

      newEndList.splice(destination.index, 0, start.list[source.index]);

      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      localStorage.setItem(newStartCol.id, JSON.stringify(newStartCol));
      localStorage.setItem(newEndCol.id, JSON.stringify(newEndCol));
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  let setShowColumnHead = [
    {
      name: `${translator("lead_page.col_email")}`,
      sq: seqEmail,
      hide: hideEmail,
    },
    {
      name: `${translator("lead_page.col_phone")}`,
      sq: seqPhone,
      hide: hidePhone,
    },
    {
      name: `${translator("lead_page.col_lead_status")}`,
      sq: seqLeadStt,
      hide: hideLeadStt,
    },
    {
      name: `${translator("lead_page.col_rating")}`,
      sq: seqRating,
      hide: hideRating,
    },
    {
      name: `${translator("lead_page.col_product_interest")}`,
      sq: seqProductInt,
      hide: hideProductInt,
    },
    {
      name: `${translator("lead_page.col_lead_source")}`,
      sq: seqLeadSource,
      hide: hideLeadSource,
    },
    {
      name: `${translator("lead_page.col_created_by")}`,
      sq: seqCreatedby,
      hide: hideCreatedby,
    },
    {
      name: `${translator("lead_page.col_street")}`,
      sq: seqStreet,
      hide: hideStreet,
    },
    {
      name: `${translator("lead_page.col_city")}`,
      sq: seqCity,
      hide: hideCity,
    },
    {
      name: `${translator("lead_page.col_social")}`,
      sq: seqSocial,
      hide: hideSocial,
    },
    {
      name: `${translator("lead_page.col_gender")}`,
      sq: seqGender,
      hide: hideGender,
    },
    {
      name: `${translator("lead_page.col_last_modified")}`,
      sq: seqLastModifyBy,
      hide: hideLastModifyBy,
    },
  ];
  setShowColumnHead.sort(function (a, b) {
    return a.sq - b.sq;
  });

  let setShowColumnBody: IColumnsBody[][] = [];
  let item: IColumnsBody[];

  leads?.items?.forEach((lead, index) => {
    item = [
      {
        sq: 0,
        hide: null,
        html: (
          <input
            type="checkbox"
            checked={selectedLeadList.includes(lead.id)}
            onChange={(e) => {
              if (e.target.checked) {
                if (
                  selectedLeadList.length > 0 &&
                  selectedLeadList.find((i) => i === lead.id)
                ) {
                  const arr = [...selectedLeadList].filter(
                    (i) => i !== lead.id
                  );
                  const arrDataExportFile = [...dataExportFile].filter(
                    (i) => i.leadId !== lead.id
                  );
                  setSelectedLeadList([...arr]);
                  setDataExportFile(arrDataExportFile);
                } else {
                  const arr = [...selectedLeadList, lead.id];
                  setSelectedLeadList([...arr]);
                  handleLeadExport(lead.id);
                }
              } else {
                const arr = [...selectedLeadList].filter((i) => i !== lead.id);
                const arrDataExportFile = [...dataExportFile].filter(
                  (i) => i.leadId !== lead.id
                );
                setSelectedLeadList([...arr]);
                setDataExportFile(arrDataExportFile);
              }
            }}
          />
        ),
      },
      {
        name: "Name",
        sq: 0,
        hide: null,
        html: index + 1,
      },
      {
        name: `${translator("lead_page.col_lead_name")}`,
        sq: 0,
        hide: null,
        html: (
          <a href={`/${companyName}/leads/${lead.id}`}>
            {lead.personalInfo.firstName} {lead.personalInfo.lastName}
          </a>
        ),
      },
      {
        name: `${translator("lead_page.col_phone")}`,
        sq: seqPhone,
        hide: hidePhone,
        html: lead.personalInfo.phoneNumber,
      },
      {
        name: `${translator("lead_page.col_email")}`,
        sq: seqEmail,
        hide: hideEmail,
        html: lead.personalInfo.email,
      },
      {
        name: `${translator("lead_page.col_lead_status")}`,
        sq: seqLeadStt,
        hide: hideLeadStt,
        html: (langCookies === "vi" ? LEAD_STATUSES_VN : LEAD_STATUSES_EN)[
          (langCookies === "vi"
            ? LEAD_STATUSES_VN
            : LEAD_STATUSES_EN
          ).findIndex((step) => String(step.value) === String(lead.leadStatus))
        ]?.label,
      },
      {
        name: `${translator("lead_page.col_rating")}`,
        sq: seqRating,
        hide: hideRating,
        html: (langCookies === "vi" ? RATING_VN : RATING_EN)[lead.rating]
          ?.label,
      },
      {
        name: `${translator("lead_page.col_product_interest")}`,
        sq: seqProductInt,
        hide: hideProductInt,
        html: lead.productInterest?.productName,
      },
      {
        name: `${translator("lead_page.col_lead_source")}`,
        sq: seqLeadSource,
        hide: hideLeadSource,
        html:
          langCookies === "vi"
            ? LEAD_SOURCES_VN[lead.leadSource]?.label
            : LEAD_SOURCES_EN[lead.leadSource]?.label,
      },
      {
        name: "Created by",
        sq: seqCreatedby,
        hide: hideCreatedby,
        html: `${
          lead.createdByUser.firstName !== null
            ? lead.createdByUser.firstName
            : ""
        } ${
          lead.createdByUser.lastName !== null
            ? lead.createdByUser.lastName
            : ""
        }`,
      },
      {
        name: `${translator("lead_page.col_street")}`,
        sq: seqStreet,
        hide: hideStreet,
        html: lead.address?.street,
      },
      {
        name: `${translator("lead_page.col_city")}`,
        sq: seqCity,
        hide: hideCity,
        html: lead.address?.city,
      },
      {
        name: `${translator("lead_page.col_social")}`,
        sq: seqSocial,
        hide: hideSocial,
        html: lead.personalInfo.socialMediaUrl,
      },
      {
        name: `${translator("lead_page.col_gender")}`,
        sq: seqGender,
        hide: hideGender,
        html: (langCookies === "vi" ? GENDERS_VN : GENDERS_EN)[
          lead.personalInfo.gender
        ]?.label,
      },
      {
        name: `${translator("lead_page.col_last_modified")}`,
        sq: seqLastModifyBy,
        hide: hideLastModifyBy,
        html: moment(new Date(lead.updatedAt).getTime()).format(
          "YYYY-MM-DD HH:mm:ss"
        ),
      },
    ];
    setShowColumnBody.push(item);
  });

  setShowColumnBody.map((lead) =>
    lead.sort(function (a, b) {
      if (a?.sq && b?.sq) {
        return a.sq - b.sq;
      }
      return 0;
    })
  );

  const handleUpdateSubStatus = (statusId: string, leadID: string) => {
    const payload = {
      leadStatus: statusId,
    };

    servicesLeadApi.updateLeadStatus(leadID, payload).then((res) => {
      console.log(res);
    });
  };

  const onDragEndKanban = (
    result: DropResult,
    columnsKanban: Kanban<TItemsKaban>,
    setColumnsKanban: React.Dispatch<
      React.SetStateAction<Kanban<TItemsKaban> | undefined>
    >
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columnsKanban[source.droppableId];
      const destColumn = columnsKanban[destination.droppableId];

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      if (
        destColumn.statusId !== "30CONSULTING" &&
        destColumn.statusId !== "40TRANSACTED"
      ) {
        const payload = {
          leadStatus: destColumn.statusId,
        };

        servicesLeadApi.updateLeadStatus(removed.id, payload).then((res) => {
          console.log(res);
        });
      } else {
        if (destColumn.statusId === "30CONSULTING") {
          setSelectSubSteps(subStepStatus_30CONSULTING);
        } else if (destColumn.statusId === "40TRANSACTED") {
          setSelectSubSteps(subStepStatus_40TRANSACTED);
        }
        setLeadIDUpdate(removed?.id ?? "");
        setShowUpdateSubStatus(true);
      }

      setColumnsKanban({
        ...columnsKanban,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columnsKanban[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumnsKanban({
        ...columnsKanban,
        [source.droppableId]: {
          ...columnsKanban,
          items: copiedItems,
        },
      });
    }
  };

  const handleDeleteMassLead = () => {
    const leadIdList = selectedLeadList.map((id: string) => ({ id }));
    servicesLeadApi.deleteMassLeads({ leadIdList }).then(() => {
      setShowDeleteMassLeads(false);
      toastr.success(
        `${translator("lead_page.text_delete_lead_successfully")}`
      );
      setSelectedLeadList([]);
      const optionalParams = { sort: JSON.stringify({ createdAt: "DESC" }) };
      fetchLeads(
        leads?.pageIndex ?? 1,
        EPaginate.COMMON_PAGE_SIZE,
        companyID,
        optionalParams
      );
    });
  };

  const [dataExportFile, setDataExportFile] = useState<any>([]);

  const headersExportFile = [
    { label: "Lead ID", key: "leadId" },
    { label: "Lead Name", key: "leadName" },
    { label: "Lead Owner", key: "leadOwner" },
    { label: "Lead Owner ID", key: "leadOwnerId" },
    { label: "Phone", key: "phoneNumber" },
    { label: "Email", key: "email" },
    { label: "First name", key: "firstName" },
    { label: "Last name", key: "lastName" },
    { label: "Gender", key: "gender" },
    { label: "Street", key: "street" },
    { label: "Ward", key: "ward" },
    { label: "District", key: "district" },
    { label: "City", key: "city" },
    { label: "Date of birth", key: "dateOfBirth" },
    { label: "Lead source", key: "leadSource" },
    { label: "Project interested name", key: "projectInterestedName" },
    { label: "Project interested ID", key: "projectInterestedId" },
    { label: "Note", key: "note" },
    { label: "Modified time", key: "updatedAt" },
    { label: "Modified by", key: "updatedBy" },
    { label: "Modified by ID", key: "updatedById" },
    { label: "Created date", key: "createdAt" },
    { label: "Created by", key: "createdBy" },
    { label: "Created by ID", key: "createdById" },
  ];

  const handleLeadExport = async (leadID: string) => {
    const arrDataExportFile = [...dataExportFile];
    await servicesLeadApi.exportLead(leadID).then((res) => {
      if (res) {
        arrDataExportFile.push(res);
      }
    });
    setDataExportFile(arrDataExportFile);
  };

  // console.log(listUsers);
  const quickFilterOptions: ILeadsQuickFilterOptions[] = [
    {
      label: translator("lead_page.ALL"),
      value: ELeadsQuickFilter.ALL,
    },
    {
      label: translator("lead_page.MY_LIST"),
      value: ELeadsQuickFilter.MY_LIST,
    },
    {
      label: translator("lead_page.NEW_LAST_WEEK"),
      value: ELeadsQuickFilter.NEW_LAST_WEEK,
    },
    {
      label: translator("lead_page.NEW_THIS_WEEK"),
      value: ELeadsQuickFilter.NEW_THIS_WEEK,
    },
    {
      label: translator("lead_page.RECENTLY_CREATED"),
      value: ELeadsQuickFilter.RECENTLY_CREATED,
    },
    {
      label: translator("lead_page.RECENTLY_MODIFIED"),
      value: ELeadsQuickFilter.RECENTLY_MODIFIED,
    },
    // {
    //   label: translator("lead_page.UNREAD"),
    //   value: ELeadsQuickFilter.UNREAD,
    // },
  ];

  console.log(selectedLeadList);
  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-6 d-flex align-items-center">
              <h3 className="text-themecolor">Leads</h3>
              <div className="col-md-10 d-flex">
                <div>
                  <select
                    className="form-control custom-select"
                    onChange={(e) => {
                      if (e?.target?.value) {
                        handleQuickFilter(e.target.value as ELeadsQuickFilter);
                      }
                    }}
                  >
                    {quickFilterOptions.map((option) => {
                      return (
                        <option value={option.value ?? ""}>
                          {option.label ?? ""}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="d-flex align-items-center ml-4">
                  <label htmlFor="kanbanView ">List View</label>
                  <div className="toggle-btn">
                    <input
                      type="checkbox"
                      id="kanbanView"
                      className="cb-value"
                      onChange={(e) => {
                        setKanbanView(e.target.checked);
                        localStorage.setItem(
                          "view_list",
                          `${!e.target.checked}`
                        );
                      }}
                    />
                    <span className="round-btn"></span>
                  </div>
                  <label htmlFor="kanbanView">Kanban</label>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-self-center text-right">
              <div className="d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  data-toggle="modal"
                  data-target="#responsive-modal"
                  onClick={() => setShowModal(true)}
                >
                  <i className="fa fa-plus-circle"></i>{" "}
                  {translator("lead_page.btn_create_new")}
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  onClick={() => {
                    if (selectedLeadList.length === 0) {
                      toastr.error(`Please select lead to export`);
                    }
                  }}
                >
                  {selectedLeadList.length > 0 &&
                  dataExportFile.length === selectedLeadList.length ? (
                    <CSVLink data={dataExportFile} headers={headersExportFile}>
                      <i className="fa fa-download" aria-hidden="true"></i>{" "}
                      {translator("lead_page.btn_export")}
                    </CSVLink>
                  ) : (
                    <>
                      <i className="fa fa-download" aria-hidden="true"></i>{" "}
                      {translator("lead_page.btn_export")}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  onClick={() => setshowColumn(true)}
                >
                  <i className="fa fa-list-ol" aria-hidden="true"></i>{" "}
                  {translator("lead_page.btn_column")}
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  onClick={() => setActiveFilter(!activeFilter)}
                >
                  <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                  {translator("lead_page.btn_filter")}
                </button>
              </div>
              <Modal
                isOpen={showColumn}
                onRequestClose={() => setshowColumn(false)}
                modal_name={`${translator("lead_page.btn_column")}`}
                label={`${translator("lead_page.btn_column")}`}
              >
                <DragDropContext onDragEnd={onDragEnd}>
                  <StyledColumns>
                    {Object.values(columns).map((col) => (
                      <Column col={col} key={col.id} />
                    ))}
                  </StyledColumns>
                </DragDropContext>
              </Modal>
              <CreateContainer
                currentPage={currentPage}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {kanbanView === true ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "100%",
                    alignItems: "stretch",
                  }}
                >
                  <DragDropContext
                    onDragEnd={(result) => {
                      if (columnsKanban) {
                        onDragEndKanban(
                          result,
                          columnsKanban,
                          setColumnsKanban
                        );
                      }
                    }}
                  >
                    {!columnsKanban
                      ? undefined
                      : Object.entries(columnsKanban).map(
                          ([columnId, column]) => {
                            return (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                                key={columnId}
                              >
                                <h4>{column?.name}</h4>
                                <div style={{ margin: 8, height: "100%" }}>
                                  <Droppable
                                    droppableId={columnId}
                                    key={columnId}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          {...provided.droppableProps}
                                          ref={provided.innerRef}
                                          style={{
                                            background: snapshot.isDraggingOver
                                              ? "lightblue"
                                              : "lightgrey",
                                            padding: 4,
                                            width: 250,
                                            minHeight: 500,
                                            height: "100%",
                                          }}
                                        >
                                          {!column || column?.items?.length < 1
                                            ? undefined
                                            : column.items?.map(
                                                (item, index) => {
                                                  return (
                                                    <Draggable
                                                      key={item.id}
                                                      draggableId={
                                                        item?.id ?? ""
                                                      }
                                                      index={index}
                                                    >
                                                      {(provided, snapshot) => {
                                                        return (
                                                          <div
                                                            ref={
                                                              provided.innerRef
                                                            }
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                              userSelect:
                                                                "none",
                                                              padding: 16,
                                                              margin:
                                                                "0 0 8px 0",
                                                              minHeight:
                                                                "100px",
                                                              backgroundColor: snapshot.isDragging
                                                                ? "#263B4A"
                                                                : "#456C86",
                                                              color: "white",
                                                              ...provided
                                                                .draggableProps
                                                                .style,
                                                            }}
                                                          >
                                                            <p className="font-weight-bold">
                                                              <Link
                                                                href={`leads/${item.id}`}
                                                              >
                                                                {item.name}
                                                              </Link>
                                                            </p>
                                                            <p>{item.email}</p>
                                                            <p>{item.phone}</p>
                                                          </div>
                                                        );
                                                      }}
                                                    </Draggable>
                                                  );
                                                }
                                              )}
                                          {provided.placeholder}
                                        </div>
                                      );
                                    }}
                                  </Droppable>
                                </div>
                              </div>
                            );
                          }
                        )}
                  </DragDropContext>
                </div>
              ) : (
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-subtitle">
                      {leads?.totalItems} {translator("lead_page.btn_items")}
                    </h6>

                    {selectedLeadList.length > 0 && (
                      <div
                        className="font-weight-bold font-16"
                        style={{
                          borderTop: "1px solid #e9ecef",
                          padding: "10px 0 10px 0",
                        }}
                      >
                        {selectedLeadList.length} records is selected
                        <button
                          className="btn btn-dark ml-3"
                          style={{ padding: "2px 10px" }}
                          onClick={() => {
                            setShowDeleteMassLeads(true);
                          }}
                        >
                          {translator("lead_page.btn_delete")}
                        </button>
                      </div>
                    )}

                    <div className="table-wrapper">
                      <div className="table-responsive">
                        <table className="table width-table-full  table-striped table-md">
                          <thead>
                            <tr className="text-center">
                              <th className="wd-50">
                                <input
                                  type="checkbox"
                                  checked={
                                    selectedLeadList.length ===
                                    totalLeads?.length
                                  }
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      const arr = totalLeads?.map(
                                        (lead) => lead.id
                                      );
                                      Promise.all(
                                        arr?.map((leadID) =>
                                          servicesLeadApi.exportLead(leadID)
                                        )
                                      ).then((values) => {
                                        setDataExportFile(values);
                                      });
                                      setSelectedLeadList([...arr]);
                                    } else {
                                      setSelectedLeadList([]);
                                      setDataExportFile([]);
                                    }
                                  }}
                                />
                              </th>
                              <th>#</th>
                              <th className="">
                                {translator("lead_page.col_lead_name")}
                              </th>
                              {setShowColumnHead.map((cols, index) =>
                                !cols.hide ? (
                                  <th key={index}>{cols.name}</th>
                                ) : null
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {setShowColumnBody.map((lead, index) => (
                              <tr key={index} className="text-center">
                                {lead.map((cols, i) =>
                                  cols.sq !== -1 ? (
                                    <td key={`col_${i}`}>{cols.html}</td>
                                  ) : null
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <FilterContainer
                        activeFilter={activeFilter}
                        setCurrentPage={setCurrentPage}
                      />
                    </div>
                    <Paginate
                      total={leads?.totalItems ?? 0}
                      pageSize={leads?.pageSize ?? EPaginate.DEFAULT_PAGE_INDEX}
                      pageIndex={leads?.pageIndex ?? 1}
                      onChange={handlePaginate}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showDeleteMassLeads}
        onRequestClose={() => setShowDeleteMassLeads(false)}
        modal_name={`Please select the sub status`}
        label={`Please select the sub status`}
      >
        <div>
          Are you sure to delete {selectedLeadList.length} lead
          {selectedLeadList.length > 1 && "s"} ?
        </div>
        <div className="text-center mt-3">
          <button
            className="btn btn-dark"
            type="reset"
            onClick={() => {
              setShowDeleteMassLeads(false);
            }}
          >
            {`${translator("lead_page.btn_no")}`}
          </button>
          <button
            className="btn btn-danger ml-3"
            type="submit"
            onClick={handleDeleteMassLead}
          >
            {`${translator("lead_page.btn_delete")}`}
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={showUpdateSubStatus}
        onRequestClose={() => setShowUpdateSubStatus(false)}
        modal_name={`Please select the sub status`}
        label={`Please select the sub status`}
      >
        <div>
          <Select
            options={selectSubSteps}
            className="mt-2"
            name={"status"}
            onChange={(e) => {
              handleUpdateSubStatus(e?.value ?? "", leadIDUpdate);
              setShowUpdateSubStatus(false);
              toastr.success("Update successfully");
            }}
          />
        </div>
        <div className="text-center mt-3">
          <button
            className="btn btn-dark"
            type="reset"
            onClick={() => {
              setShowUpdateSubStatus(false);
            }}
          >
            {`${translator("lead_page.btn_no")}`}
          </button>
          <button
            className="btn btn-danger ml-3"
            type="submit"
            onClick={handleDeleteMassLead}
          >
            {`${translator("lead_page.btn_delete")}`}
          </button>
        </div>
      </Modal>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default LeadsContainer;
