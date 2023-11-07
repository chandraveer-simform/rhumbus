"use client";
import PageHeader from "../_component/pageHeader/pageHeader";
import { Col, Row } from "antd";
import { MoreOutlined, CheckCircleFilled } from "@ant-design/icons";
import WidgetLayout from "@/organisms/widgets/layout";
import WidgetHeader from "@/organisms/widgets/_component/widgetHeader/page";
import Statistic from "@/component/statistic/page";
import LineSeries from "@/component/_charts/lineSeries/lineSeries";
import Image from "next/image";
import ChaseLogo from "../../../assets/img/chase-logo.png";
import AmericanBankLogo from "../../../assets/img/american-bank-logo.png";
import ColumnSeries from "@/component/_charts/columnSeries/columnSeries";
import { IconsColor } from "@/utilities/constants";
import "./overview.scss";
import Table from "@/component/table/page";
import { ColumnsType } from "antd/es/table";
import Switch from "@/component/switch/page";

interface DataType {
  key: string;
  account: string;
  thisMonth: number | string;
  ytd: number | string;
}

export default function CashFlow() {
  const businessPerformanceDataA = [
    {
      country: "USA",
      value: 2025,
    },
    {
      country: "China",
      value: 1882,
    },
    {
      country: "Japan",
      value: 1809,
    },
    {
      country: "Germany",
      value: 1322,
    },
    {
      country: "UK",
      value: 3000,
    },
    {
      country: "France",
      value: 1114,
    },
    {
      country: "India",
      value: 1984,
    },
    {
      country: "Spain",
      value: 3000,
    },
    {
      country: "Netherlands",
      value: 1665,
    },
    {
      country: "South Korea",
      value: 1443,
    },
    {
      country: "Canada",
      value: 1441,
    },
  ];

  const businessPerformanceDataB = [
    {
      country: "USA",
      value: 2025,
    },
    {
      country: "China",
      value: 1882,
    },
    {
      country: "Japan",
      value: 1809,
    },
    {
      country: "Germany",
      value: 1322,
    },
    {
      country: "UK",
      value: 1122,
    },
    {
      country: "France",
      value: 1114,
    },
    {
      country: "India",
      value: 984,
    },
    {
      country: "Spain",
      value: 711,
    },
    {
      country: "Netherlands",
      value: 665,
    },
    {
      country: "South Korea",
      value: 443,
    },
    {
      country: "Canada",
      value: 441,
    },
  ];

  // Total cast in and out
  const totalCastInAndOut = [
    {
      month: "JAN",
      in: 2025,
      out: 2025,
    },
    {
      month: "MAR",
      in: 2025,
      out: 2025,
    },
    {
      month: "Apr",
      in: 2025,
      out: 2025,
    },
    {
      month: "May",
      in: 2025,
      out: 2025,
    },
    {
      month: "Jun",
      in: 2025,
      out: 2025,
    },
  ];

  // Invoice owned to you
  const invoiceOwnData = [
    {
      month: "Older",
      value: 500,
    },
    {
      month: "Sep 18-24",
      value: 2000,
    },
    {
      month: "This Week",
      value: 2500,
    },
    {
      month: "Otc 2-8",
      value: 1000,
    },
    {
      month: "Otc 9-15",
      value: 1500,
    },
    {
      month: "Future",
      value: 1800,
    },
  ];

  // Account Watch list
  const AccountWatchlistData = [
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

  const columns: ColumnsType<DataType> = [
    {
      title: <span className="paragraph2 medium">Account</span>,
      dataIndex: "account",
      key: "account",
      render: (text) => <h5>{text}</h5>,
      align: "left",
    },
    {
      title: <span className="paragraph2 medium">This Month</span>,
      dataIndex: "thisMonth",
      key: "this",
      render: (text) => <h5 className="semibold">{text}</h5>,
      align: "right",
    },
    {
      title: <span className="paragraph2 medium">YTD</span>,
      dataIndex: "ytd",
      key: "ytd",
      render: (text) => <h5 className="semibold">{text}</h5>,
      align: "right",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      account: "Entertainment (600)",
      thisMonth: "2,500,00",
      ytd: "10,453.75",
    },
    {
      key: "2",
      account: "Advertising (620)",
      thisMonth: "0.00",
      ytd: "53.60",
    },
    {
      key: "3",
      account: "Inventory (140)",
      thisMonth: "0.00",
      ytd: "0.00",
    },
    {
      key: "3",
      account: "Sales (400)",
      thisMonth: "7,654.10",
      ytd: "29,250.85",
    },
  ];

  return (
    <>
      <Row className="pb-32" justify={"space-between"}>
        <Col span={12}>
          <PageHeader
            title="Hi, Katie"
            text="Here’s what’s going on with Lajou Cafe finance"
            className=""
            textClass="dark-6-dark"
          />
        </Col>
        <Col span={2}>
          <Switch
            className="bottom"
            switchClassName="ml-12"
            beforeText="Private"
            defaultChecked
            onChange={() => {}}
          />
        </Col>
      </Row>

      <Row className="pt-6" gutter={[12, 12]}>
        {/* Business Bank Account */}
        <Col span={12}>
          <WidgetLayout>
            <WidgetHeader
              title="Business Bank Account"
              className="mb-32"
              rightSide={
                <>
                  <Image
                    src={ChaseLogo}
                    alt="ChaseLogo"
                    height={14}
                    width={71}
                  />
                  <MoreOutlined className="ml-12" />
                </>
              }
            />
            <Row className="widget-content">
              <Col span={8}>
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
              <Col span={16} className="align-items-end mt-27  h-160 ">
                <LineSeries chartdiv="chartdiv" />
              </Col>
            </Row>
          </WidgetLayout>
        </Col>

        {/* Business Performance */}
        <Col span={12}>
          <WidgetLayout>
            <WidgetHeader title="Business Performance" className="mb-32" />
            <Row className="widget-content h-80 mb-28">
              <Col span={8} className="align-items-end">
                <Statistic titleBottom="Current Ratio" amount="1.72" />
              </Col>
              <Col span={16}>
                <ColumnSeries
                  chartdiv="business-performance-a"
                  categoryField="country"
                  data={businessPerformanceDataA}
                  xAxisVisible={false}
                  yAxesVisible={false}
                  seriesProperties={[
                    {
                      columnName: "value",
                      columnNameLabel: "value",
                      seriesFillColor: IconsColor.primaryColor,
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row className="widget-content h-80">
              <Col span={8} className="align-items-end">
                <Statistic titleBottom="Gross profit %" amount="8.9,9%" />
              </Col>
              <Col span={16}>
                <ColumnSeries
                  chartdiv="business-performance-b"
                  categoryField="country"
                  data={businessPerformanceDataB}
                  xAxisVisible={false}
                  yAxesVisible={false}
                  seriesProperties={[
                    {
                      columnName: "value",
                      columnNameLabel: "value",
                      seriesFillColor: IconsColor.secondaryColor,
                    },
                  ]}
                />
              </Col>
            </Row>
          </WidgetLayout>
        </Col>

        {/* Business Saving Account */}
        <Col span={12}>
          <WidgetLayout>
            <WidgetHeader
              title="Business Saving Account"
              className="mb-32"
              rightSide={
                <>
                  <Image
                    src={AmericanBankLogo}
                    alt="AmericanBankLogo"
                    height={15}
                    width={117}
                  />
                  <MoreOutlined className="ml-12" />
                </>
              }
            />
            <Row className="widget-content">
              <Col span={8}>
                <div>
                  <Statistic
                    titleBottom="Statement Balance"
                    className="mb-24"
                    amount="12,232.67"
                  />
                </div>
                <span className="secondary-color bottom">
                  <CheckCircleFilled className="mr-4" />
                  Reconciled
                </span>
              </Col>
              <Col span={16} className="align-items-end mt-27  h-160 ">
                <LineSeries
                  chartdiv="business-saving-account"
                  className=" "
                  seriesStrokeColor={IconsColor.secondaryColor}
                  seriesFillColor={IconsColor.secondaryColor}
                />
              </Col>
            </Row>
          </WidgetLayout>
        </Col>

        {/* Total cast in and out */}
        <Col span={12}>
          <WidgetLayout>
            <WidgetHeader
              title="Total cast in and out"
              className="total-cast-widget-header"
            />
            <Col className="widget-content h-245">
              <ColumnSeries
                chartdiv="total-cast-in-and-out"
                categoryField="month"
                data={totalCastInAndOut}
                isLegend={true}
                columnNames={["in", "out"]}
                legendMarkers={{
                  width: 8,
                  height: 6,
                }}
                xRendererProperties={{
                  cellStartLocation: 0.3,
                  cellEndLocation: 0.7,
                }}
                xLabelsProperty={{
                  paddingRight: -10,
                }}
                seriesProperties={[
                  {
                    columnName: "in",
                    columnNameLabel: "Cash in",
                    seriesFillColor: IconsColor.primaryColor,
                  },
                  {
                    columnName: "out",
                    columnNameLabel: "Cash out",
                    seriesFillColor: IconsColor.secondaryColor,
                  },
                ]}
                // xAxisVisible={false}
                yAxesVisible={false}
              />
            </Col>
          </WidgetLayout>
        </Col>

        {/* Invoice owed to you */}
        <Col span={12}>
          <WidgetLayout>
            <WidgetHeader
              title="Invoice owed to you"
              className="mb-32"
              rightSide={
                <span className="primary-color ">New sales invoice</span>
              }
            />
            <Col span={24} className="row">
              <Statistic
                titleBottom="0 Draft bills"
                titleTop="0.00"
                titleTopClass="h5 dark-1-dark semibold"
                className="mr-48"
              />
              <Statistic
                titleBottom="17 Awaiting payment"
                titleTop="4,808.00"
                titleTopClass="h5 dark-1-dark semibold"
                className="mr-48"
              />
              <Statistic
                titleBottom="4 Overdue"
                titleTop="4,808.00"
                titleTopClass="h5 dark-1-dark semibold"
              />
            </Col>
            <Col span={24} className="widget-content h-150">
              <ColumnSeries
                chartdiv="invoice-owed-to-you"
                categoryField="month"
                data={invoiceOwnData}
                isLegend={false}
                xLabelsProperty={{
                  paddingRight: -15,
                }}
                seriesProperties={[
                  {
                    columnName: "value",
                    columnNameLabel: "Data",
                    columnWidth: 24,
                    seriesFillColor: IconsColor.primaryColor,
                  },
                ]}
                // xAxisVisible={false}
                yAxesVisible={false}
              />
            </Col>
          </WidgetLayout>
        </Col>

        {/* Account Watchlist */}
        <Col span={12}>
          <WidgetLayout>
            <WidgetHeader title="Account Watchlist" className="mb-32" />
            <Col span={24} className="h-185 p-0 m-0">
              <Table
                columns={columns}
                dataSource={data}
                className="w-100 widget-table bg-dark-6-white "
                rowClassName={() => "bg-dark-6-white rm-td-border"}
                pagination={false}
                bordered={false}
              />
            </Col>
          </WidgetLayout>
        </Col>
      </Row>
    </>
  );
}
