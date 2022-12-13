import React, { useEffect, useRef } from "react"
import { Chart } from "react-chartjs-2"
import { useTranslation } from "react-i18next"
import { ETableType, IConfigTable, ITBodyData } from ".."



export function DataTable({ type, title, thead, tbody, dataChart, onPageChange }: IConfigTable) {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <h5 className="card-title ">
                        {title ?? ""}
                    </h5>
                    <div>
                        {
                            type === "chart" && dataChart ? (
                                <Chart
                                    width={100}
                                    height={150}
                                    type="bar"
                                    data={{
                                        labels: ["LEADS CREATED", "TRIAL AGREEMENT"],
                                        datasets: [
                                            {
                                                label: "Total",
                                                data: [
                                                    dataChart?.conversionRate?.total?.countLeads,
                                                    dataChart?.conversionRate?.total
                                                        ?.countLeadConvertedCustomer,
                                                ],
                                                backgroundColor: ["#005378", "#005378"],
                                            },
                                        ],
                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                        scales: {
                                            y: {
                                                beginAtZero: true,
                                            },
                                        },
                                    }}
                                />
                            ) : undefined
                        }
                    </div>
                    <div className="table-wrapper">
                        <div className="table-responsive">
                            <table id="table" className="custom-table table table-striped table-md table-bordered" cellSpacing="0" width="100%"
                                style={type === ETableType.chart ? { height: 200 } : undefined}>
                                <thead className="thead-light " >
                                    <tr >
                                        {
                                            thead.map((e, i) => {
                                                return (
                                                    <th className={i == 0 && type !== ETableType.chart ? "w-10 text-center" : ""} key={i} style={{ whiteSpace: "nowrap" }}>{e}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody onScroll={(e) => {
                                    const { scrollTop, scrollHeight, clientHeight } =
                                        e.target as HTMLTableSectionElement;
                                    console.log(scrollTop, clientHeight, scrollHeight)
                                    if (scrollTop + clientHeight >= scrollHeight) {
                                        onPageChange(type)
                                    }
                                }}>
                                    {
                                        !tbody ? "" : tbody.map((e, i) => {
                                            return (
                                                <tr>
                                                    <td className={type !== ETableType.chart ? "w-10 text-center align-middle" : "align-middle"} >{e.index ?? e.leadSourceName ?? ""}</td>
                                                    <td className="txt-oflo align-middle text-truncate">{e.nameLead ?? e.countLeads ?? ""}</td>
                                                    <td className="align-middle">
                                                        <p className="badge badge-success badge-pill text-truncate d-block">
                                                            {e.email ?? e.countLeadConvertedCustomer ?? ""}
                                                        </p>
                                                    </td>
                                                    <td className="txt-oflo align-middle">{e.date ?? e.conversionRate ?? ""}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(DataTable)