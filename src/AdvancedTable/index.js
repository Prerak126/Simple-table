import React, { Component } from "react";
import { makeData } from "../Utils";
import ClickableDiv from "../ClickableDiv";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class AdvancedTable extends Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    columns={[
                        {
                            Header: "Id",
                            columns: [
                                {
                                    Header: "Id",
                                    accessor: "id",
                                }
                            ]
                        },
                        {
                            Header: "Name",
                            columns: [
                                {
                                    Header: "First Name",
                                    id: "firstName",

                                    accessor: d => <ClickableDiv html={d.firstName} />,
                                    filterMethod: (filter, row) =>
                                        row[filter.id].startsWith(filter.value) ||
                                        row[filter.id].endsWith(filter.value)
                                },
                                {
                                    Header: "Last Name",
                                    id: "lastName",
                                    accessor: d => d.lastName,
                                    filterMethod: (filter, row) =>
                                        row[filter.id].startsWith(filter.value) ||
                                        row[filter.id].endsWith(filter.value)
                                }
                            ]
                        },
                        {
                            Header: "Info",
                            columns: [
                                {
                                    Header: "Age",
                                    accessor: "age"
                                },
                                {
                                    Header: "Over 21",
                                    accessor: "age",
                                    id: "over",
                                    Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),
                                    filterMethod: (filter, row) => {
                                        if (filter.value === "all") {
                                            return true;
                                        }
                                        if (filter.value === "true") {
                                            return row[filter.id] >= 21;
                                        }
                                        return row[filter.id] < 21;
                                    },
                                    Filter: ({ filter, onChange }) =>
                                        <select
                                            onChange={event => onChange(event.target.value)}
                                            style={{ width: "100%" }}
                                            value={filter ? filter.value : "all"}
                                        >
                                            <option value="all">Show All</option>
                                            <option value="true">Can Drink</option>
                                            <option value="false">Can't Drink</option>
                                        </select>
                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    pageSizeOptions= {[5, 10, 20, 25, 40, 50]}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}

export default AdvancedTable;