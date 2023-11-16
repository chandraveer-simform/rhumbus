import LineSeries from "@/component/_charts/lineSeries/lineSeries";
import WidgetLayout from "../layout";
import Select from "@/component/select/page";
import Card from "@/component/card/page";
import { Col, Row } from "antd";
import AddLayer from "../_component/addLayer/page";
import {
  IconsColor,
  backOptions,
  dayOptions,
} from "../../../utilities/constants";

export default function InvoicesBillsWidget() {
  return (
    <WidgetLayout>
      <div className="widget-header pb-32">
        <h2>Projected balance from invoices and bills</h2>
        <div className="widget-top-left">
          <Select
            placeholder="Search to Select"
            options={backOptions}
            defaultValue="1"
            style={{ width: 212 }}
          />
          <Select
            placeholder="Select day"
            options={dayOptions}
            defaultValue="1"
            style={{ width: 141 }}
          />
        </div>
      </div>
      <Row className="widget-content">
        <Col span={7}>
          <Card className="nested-card">
            <AddLayer title="30 days summary" className="pb-24" />
            <Row className="pb-8">
              <Col span={12}>
                2<h5 className="regular">Today’s balance</h5>
              </Col>
              <Col span={12} className="text-align-right">
                <h5 className="semibold">1030,00</h5>
              </Col>
            </Row>
            <Row className="pt-8 pb-8">
              <Col span={12}>
                <h5 className="regular">Invoices owed to you</h5>
              </Col>
              <Col span={12} className="text-align-right">
                <h5 className="semibold">1500,00</h5>
              </Col>
            </Row>
            <Row className="pt-8 pb-8">
              <Col span={12}>
                <h5 className="regular">Bills to pay</h5>
              </Col>
              <Col span={12} className="text-align-right">
                <h5 className="semibold">-2890,99</h5>
              </Col>
            </Row>
            <AddLayer
              title="Projected balance"
              subTitle="in Mar 2"
              amount={"434.00"}
              className="pt-24"
            />
          </Card>
        </Col>
        <Col span={16}>
          <LineSeries
            chartdiv="chartdiv"
            seriesStrokeColor={IconsColor.primaryColor}
            seriesFillColor={IconsColor.primaryColorLight}
          />
        </Col>
      </Row>
    </WidgetLayout>
  );
}
