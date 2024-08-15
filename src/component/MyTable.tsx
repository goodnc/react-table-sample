import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
    num: number;
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: "No.",
        width: 100,
        dataIndex: "num",
        key: "num",
        fixed: "left",
        sorter: (a, b) => a.num - b.num,
    },
    {
        title: "Full Name",
        width: 100,
        dataIndex: "name",
        key: "name",
        fixed: "left",
        showSorterTooltip: {
            target: "full-header",
        },
    },
    {
        title: "Age",
        width: 100,
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: "Column 1",
        dataIndex: "address",
        key: "1",
        width: 150,
    },
    {
        title: "Column 2",
        dataIndex: "address",
        key: "2",
        width: 150,
    },
    {
        title: "Column 3",
        dataIndex: "address",
        key: "3",
        width: 150,
    },
    {
        title: "Column 4",
        dataIndex: "address",
        key: "4",
        width: 150,
    },
    {
        title: "Column 5",
        dataIndex: "address",
        key: "5",
        width: 150,
    },
    {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
    },
    {
        title: "Column 7",
        dataIndex: "address",
        key: "7",
        width: 150,
    },
    {
        title: "Column 8",
        dataIndex: "address",
        key: "8",
    },
    {
        title: "Action",
        key: "operation",
        fixed: "right",
        width: 100,
        render: () => <a>Action</a>,
    },
];

// Add mock data
const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        num: i + 1,
        name: `Edward ${i + 1}`,
        age: Math.floor(Math.random() * (40 - 18 + 1)) + 18,
        address: `London Park no. ${i}`,
    });
}

function MyTable() {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                pageSize: 20,
            }}
            scroll={{ x: 1600, y: 550 }}
        />
    );
}

export default MyTable;
