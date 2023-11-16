"use client";

import { Col, Row } from "antd";
import "./addLayer.scss";

export default function AddLayer({
  title,
  subTitle,
  Filters,
  amount,
  className,
}: {
  title?: string;
  subTitle?: string;
  Filters?: any;
  amount?: number | string;
  className?: string;
}) {
  return (
    <Row className={`${className} add-layer`}>
      <Col span={12}>
        <h5 className="medium">{title}</h5>
        <span className="paragraph2 regular">{subTitle}</span>
        <div className="widgets-filters">{Filters && Filters}</div>
      </Col>
      <Col span={12} className="text-align-right">
        <span className="big-number">{amount}</span>
      </Col>
    </Row>
  );
}
