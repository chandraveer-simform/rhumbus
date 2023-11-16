"use client";
import Image from "next/image";
import { Col, Row } from "antd";
import PageHeader from "@/app/(dashboard)/_component/pageHeader/pageHeader";
import WidgetLayout from "@/organisms/widgets/layout";
import WidgetHeader from "@/organisms/widgets/_component/widgetHeader/page";
import Statistic from "@/component/statistic/page";
import LineSeries from "@/component/_charts/lineSeries/lineSeries";
import Select from "@/component/select/page";
import Button from "@/component/button/page";
import Checkbox from "@/component/checkbox/page";

import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { IconsColor, accountType } from "@/utilities/constants";
import ChaseLogo from "../../../assets/img/chase-logo.png";

export const comparisonOptions = [
  {
    value: "1",
    label: "1 Period",
  },
  {
    value: "2",
    label: "2 Period",
  },
];

export default function BankAccount() {
  return (
    <div className="bankaccount-page">
      {/* Bank Accounts header */}
      <Row className="pb-32">
        <Col span={24}>
          <PageHeader
            title="Bank Accounts"
            pageHeaderRight={
              <div className="balancesheet-header">
                <Button className="semibold update-button ml-8" type="primary">
                  + Add Bank Account
                </Button>
              </div>
            }
          />
        </Col>
      </Row>

      {/* Page Content */}
      <Row>
        {/* Business Bank Account */}
        <Col span={24}>
          <WidgetLayout>
            <WidgetHeader
              title="Business Bank Account"
              className="mb-32 a-disabled"
              rightSide={
                <>
                  <Image
                    src={ChaseLogo}
                    alt="ChaseLogo"
                    height={14}
                    width={71}
                  />
                  <h5 className="dark-3-dark regular ml-12 mr-12">
                    090-8007-009845
                  </h5>
                  <div className="widget-top-left ml-12">
                    <Select
                      placeholder="Search to Select"
                      options={accountType}
                      defaultValue="1"
                      style={{ width: 212 }}
                    />
                  </div>
                </>
              }
            />
            <Row className="widget-content">
              <Col span={3}>
                <div>
                  <Statistic
                    titleBottom="Balance in Rhombus"
                    className="mb-24"
                    amount="3,980.00"
                  />
                  <Statistic
                    titleBottom="Statement Balance"
                    amount="4,808.00"
                  />
                </div>
                <span className="primary-color bottom">Reconcile 23 items</span>
              </Col>
              <Col span={21} className="align-items-end mt-27 h-160 ">
                <LineSeries
                  chartdiv="chartdiv"
                  seriesStrokeColor={IconsColor.primaryColor}
                  seriesFillColor={IconsColor.primaryColorLight}
                  yGridProperty={{
                    forceHidden: false,
                  }}
                />
              </Col>
            </Row>
            <Row className="h-70">
              <Col
                span={24}
                className="widget-footer border-top row pl-30 pt-24 mt-24"
              >
                <Checkbox className="ant-checkbox-24">
                  <h5>Show account on Dashboard</h5>
                </Checkbox>
                <div className="row right pr-24">
                  <span className="paragraph2 medium mr-16">Change order</span>
                  <UpOutlined className="icon-properties mr-8" />
                  <DownOutlined className="icon-properties" />
                </div>
              </Col>
            </Row>
          </WidgetLayout>
        </Col>
      </Row>
      <Row className="pt-6">
        {/* Business Savings Account */}
        <Col span={24}>
          <WidgetLayout>
            <WidgetHeader
              title="Business Savings Account"
              className="mb-32 a-disabled"
              rightSide={
                <>
                  <h5 className="dark-3-dark regular ml-12 mr-12">
                    011-8007-009845
                  </h5>
                  <div className="widget-top-left ml-12">
                    <Select
                      placeholder="Search to Select"
                      options={accountType}
                      defaultValue="1"
                      style={{ width: 212 }}
                    />
                  </div>
                </>
              }
            />
            <Row className="widget-content">
              <Col span={3}>
                <div>
                  <Statistic
                    titleBottom="Statement Balance"
                    className="mb-24"
                    amount="0.00"
                  />
                </div>
                <span className="paragraph2 medium">
                  No transactions imported
                </span>
              </Col>
              <Col span={21} className="mt-27 h-160 col align-items-center">
                <h4 className="medium">No Transactions imported</h4>
                <h5 className="primary-color mt-8">
                  Import a bank statement to get started
                </h5>
              </Col>
            </Row>
            <Row className="h-70">
              <Col
                span={24}
                className="widget-footer border-top row pl-30 pt-24 mt-24"
              >
                <Checkbox className="ant-checkbox-24">
                  <h5>Show account on Dashboard</h5>
                </Checkbox>
                <div className="row right pr-24">
                  <span className="paragraph2 medium mr-16">Change order</span>
                  <UpOutlined className="icon-properties mr-8" />
                  <DownOutlined className="icon-properties" />
                </div>
              </Col>
            </Row>
          </WidgetLayout>
        </Col>
      </Row>
    </div>
  );
}
