"use client";
import { Col, PaginationProps, Row } from "antd";
import PageHeader from "@/app/(dashboard)/_component/pageHeader/pageHeader";
import Select from "@/component/select/page";
import Button from "@/component/button/page";
import SearchInput from "@/component/searchInput/Page";
import Table from "@/component/table/page";
import Pagination from "@/component/pagination/page";

import { FileTextFilled, CaretDownOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

import "./billsToPay.scss";

interface DataType {
  key: string;
  ref?: string;
  to?: string;
  date?: Date | string;
  dueDate?: Date | string;
  paid?: number | string;
  due?: number | string;
  status: "Awaiting Payment" | "Draft" | "Paid";
}

const columns: ColumnsType<DataType> = [
  {
    title: <span className="paragraph2 medium">Ref</span>,
    dataIndex: "ref",
    key: "ref",
    render: (text) => <h5>{text}</h5>,
  },
  {
    title: <span className="paragraph2 medium">To</span>,
    dataIndex: "to",
    key: "to",
    render: (text) => (
      <h5 className="medium">
        <FileTextFilled className="icon-properties mr-4" />
        {text}
      </h5>
    ),
  },
  {
    title: <span className="paragraph2 medium">Date</span>,
    dataIndex: "date",
    key: "date",
    render: (text) => <h5>{text}</h5>,
  },
  {
    title: <span className="paragraph2 medium">Due Date</span>,
    dataIndex: "dueDate",
    key: "dueDate",
    render: (text) => <h5>{text}</h5>,
  },
  {
    title: <span className="paragraph2 medium">Paid</span>,
    dataIndex: "paid",
    key: "paid",
    render: (text) => <h5>{text}</h5>,
  },
  {
    title: <span className="paragraph2 medium">Due</span>,
    dataIndex: "due",
    key: "due",
    render: (text) => <h5>{text}</h5>,
  },
  {
    title: <span className="paragraph2 medium">Status</span>,
    dataIndex: "status",
    key: "status",
    render: (text) => <h5>{text}</h5>,
    align: "end",
  },
];

const data: DataType[] = [
  {
    key: "1",
    ref: "P/O CRM08-12",
    to: "PowerDirect",
    date: "25 Oct 2021",
    dueDate: "03 Nov 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
  {
    key: "2",
    ref: "",
    to: "Net Connect",
    date: "16 March 2021",
    dueDate: "03 Sep 2021",
    paid: "0.00",
    due: "234.00",
    status: "Draft",
  },
  {
    key: "3",
    ref: "P/O 9711",
    to: "Kreakita Furniture",
    date: "04 Aug 2021",
    dueDate: "06 Jul 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
  {
    key: "4",
    ref: "P/O 9711",
    to: "Kreakita Furniture",
    date: "04 Aug 2021",
    dueDate: "06 Jul 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
  {
    key: "5",
    ref: "P/O 9711",
    to: "Kreakita Furniture",
    date: "04 Aug 2021",
    dueDate: "06 Jul 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
  {
    key: "6",
    ref: "P/O 9711",
    to: "Kreakita Furniture",
    date: "04 Aug 2021",
    dueDate: "06 Jul 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
  {
    key: "7",
    ref: "P/O 9711",
    to: "Kreakita Furniture",
    date: "04 Aug 2021",
    dueDate: "06 Jul 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
  {
    key: "8",
    ref: "P/O 9711",
    to: "Kreakita Furniture",
    date: "04 Aug 2021",
    dueDate: "06 Jul 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
  {
    key: "9",
    ref: "P/O 9711",
    to: "Kreakita Furniture",
    date: "04 Aug 2021",
    dueDate: "06 Jul 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
  {
    key: "10",
    ref: "P/O 9711",
    to: "Kreakita Furniture",
    date: "04 Aug 2021",
    dueDate: "06 Jul 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
  {
    key: "11",
    ref: "P/O 9711",
    to: "Kreakita Furniture",
    date: "04 Aug 2021",
    dueDate: "06 Jul 2021",
    paid: "0.00",
    due: "234.00",
    status: "Awaiting Payment",
  },
];

export const typesOptions = [
  {
    value: "1",
    label: "By type",
  },
  {
    value: "2",
    label: "2 Period",
  },
];

const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};

export default function billsToPay() {
  return (
    <div className="bills-to-pay-page">
      {/* Bills to pay header */}
      <Row className="pb-32">
        <Col span={24}>
          <PageHeader
            title="Bills to pay"
            pageHeaderRight={
              <div className="bills-to-pay-header ">
                <SearchInput className="page-header-search-input w-240" />
                <Select
                  className="h-40 ml-8 mr-8  "
                  placeholder="Search to Select"
                  suffixIcon={<CaretDownOutlined className="icon-properties" />}
                  options={typesOptions}
                  defaultValue="1"
                  style={{ width: 140 }}
                />

                <Button className="semibold update-button ml-8" type="primary">
                  New Bill
                </Button>
              </div>
            }
          />
        </Col>
      </Row>

      {/* Page Content */}
      <Row>
        <Col span={24} className="balance-sheet-card ">
          <Table
            columns={columns}
            dataSource={data}
            className="mb-23"
            rowClassName={(_record: any, index: number) =>
              index % 2 == 0 ? "bg-dark-5-dark" : "dark-1-dark"
            }
            pagination={false}
          />
          <Pagination
            pageClassName="pl-16 mt-16 pr-16"
            total={500}
            itemRender={itemRender}
          />
        </Col>
      </Row>
    </div>
  );
}
