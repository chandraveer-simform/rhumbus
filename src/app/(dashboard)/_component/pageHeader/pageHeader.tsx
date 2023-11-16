"use client";
import { Col, Row } from "antd";
import "./pageHeader.scss";

interface PageHeaderRightInterface {
  title: string;
  text?: string;
  textClass?: string;
  className?: string;
  pageHeaderRight?: React.ReactNode;
  pageHeaderRightClassName?: string;
}

export default function PageHeader({
  title,
  text,
  textClass = "",
  className = "",
  pageHeaderRight,
  pageHeaderRightClassName = "",
}: PageHeaderRightInterface) {
  return (
    <Row className={`page-header ${className}`}>
      <Col>
        <h1>{title} </h1>
        <h5 className={`regular ${textClass}`}>{text}</h5>
      </Col>
      <Col className={pageHeaderRightClassName}>{pageHeaderRight}</Col>
    </Row>
  );
}
