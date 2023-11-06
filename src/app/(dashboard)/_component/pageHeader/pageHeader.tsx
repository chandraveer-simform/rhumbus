"use client";

import { Col, Row } from "antd";
import "./pageHeader.scss";

interface PageHeaderRightInterface {
  title: string;
  text?: string;
  textClass?: string;
  className?: string;
  pageHeaderRight?: React.ReactNode;
}

export default function PageHeader({
  title,
  text,
  textClass = "",
  className = "",
  pageHeaderRight,
}: PageHeaderRightInterface) {
  return (
    <Row className={`page-header ${className}`}>
      <Col>
        <h1>{title} </h1>
        <h5 className={`regular ${textClass}`}>{text}</h5>
      </Col>
      <Col>{pageHeaderRight}</Col>
    </Row>
  );
}
