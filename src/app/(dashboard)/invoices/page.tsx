"use client";
import { Col, PaginationProps, Row } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FileTextFilled, CaretDownOutlined } from "@ant-design/icons";

import PageHeader from "@/app/(dashboard)/_component/pageHeader/pageHeader";
import Select from "@/component/select/page";
import Button from "@/component/button/page";
import Table from "@/component/table/page";

import "./invoices.scss";
import Pagination from "@/component/pagination/page";

interface DataType {
  key: string;
  number: string;
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
    title: <span className="paragraph2 medium">Number</span>,
    dataIndex: "number",
    key: "number",
    render: (text) => <h5>{text}</h5>,
  },
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    number: "INV-0012",
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
    label: "All",
  },
  {
    value: "2",
    label: "Today",
  },
  {
    value: "3",
    label: "Weekly",
  },
  {
    value: "4",
    label: "Monthly",
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

export default function Invoices() {
  return (
    <div className="invoices-page">
      {/* Invoices header */}
      <Row className="pb-32">
        <Col span={24}>
          <PageHeader
            title="Invoices"
            pageHeaderRight={
              <div className="bills-to-pay-header ">
                <Select
                  className="h-40 ml-8 mr-8  "
                  placeholder="Search to Select"
                  suffixIcon={<CaretDownOutlined className="icon-properties" />}
                  options={typesOptions}
                  defaultValue="1"
                  style={{ width: 140 }}
                />
                <Button className="mr-14" type="default">
                  Send Statements
                </Button>
                <Button className="mr-14" type="default">
                  Export
                </Button>
                <Button className="mr-14" type="default">
                  New Import
                </Button>
                <Button className="semibold ml-8" type="primary">
                  New Import
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
            pageClassName="pl-16 pr-16"
            total={500}
            itemRender={itemRender}
          />
        </Col>
      </Row>
    </div>
  );
}
