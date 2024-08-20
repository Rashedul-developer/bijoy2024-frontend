"use client"

import fetchData from "@/lib/fetchData"
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    id: string;
    name: string;
    phone: string;
    email: number;
    address: any;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'City',
        dataIndex: 'address',
        key: 'address',
        render: (_, { address }) => <Tag color="blue">{address.city}</Tag>,
    }
];

export default async function Home() {

    const fetchedData = await fetchData('https://jsonplaceholder.typicode.com/users');
    const data: DataType[] = fetchedData;

    return (
        <div className="w-8/12 mx-auto">
            <Table columns={columns} dataSource={data} />
        </div>
    )
}