import LineSeries from "@/component/_charts/lineSeries/lineSeries";
import WidgetLayout from "../layout";
import { Col, Row } from "antd";
import WidgetHeader from "../_component/widgetHeader/page";
import React from "react";

export default function CommonWidget({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WidgetLayout>
      <div className="widget-header pb-32">
        <WidgetHeader />
      </div>
      <Row className="widget-content">{children}</Row>
    </WidgetLayout>
  );
}
