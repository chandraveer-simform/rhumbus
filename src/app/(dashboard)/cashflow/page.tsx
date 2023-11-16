"use client";
import PageHeader from "../_component/pageHeader/pageHeader";
import { Col, List, Row } from "antd";
import InvoicesBillsWidget from "@/organisms/widgets/invoicesBillsWidget/page";
import DataCollapseWidget from "@/organisms/widgets/dataCollapseWidget/page";
import Button from "@/component/button/page";
import ListDataWidget from "@/organisms/widgets/listDataWidget/page";
import Link from "next/link";

const data = [
  {
    id: 1,
    value: "2,190.99",
    text: "4 invoices for Marin BC and 2 other contacts.",
    buttonName: "Add expected dates",
  },
  {
    id: 2,
    value: "3,190.99",
    text: "4 invoices for Marin BC and 2 other contacts.",
    buttonName: "Add expected dates",
  },
];

export default function CashFlow() {
  return (
    <>
      <Row className="pb-32">
        <Col>
          <PageHeader title="Cash Flow " />
        </Col>
        <Col>
          <span></span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <InvoicesBillsWidget />
        </Col>
      </Row>
      <Row className="pt-6">
        <Col span={8} className="pr-6">
          <DataCollapseWidget />
        </Col>
        <Col span={8} className="pr-6">
          <DataCollapseWidget />
        </Col>
        <Col span={8}>
          <ListDataWidget
            size="large"
            widgetClassName="list-action"
            header={<h4 className="medium">Suggested Action</h4>}
            footer={null}
            bordered
            dataSource={data}
            renderItem={({ id, value, text, buttonName }) => (
              <List.Item className="list-item">
                <div className="item-content pb-8">
                  <p className="paragraph2">{text}</p>
                </div>
                <div className="item-footer">
                  <h5 className="semibold">{value}</h5>
                  <Link href="" className="medium">
                    {buttonName}
                  </Link>
                </div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}
