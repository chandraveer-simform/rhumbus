"use client";
import { Col, Row } from "antd";
import "./widgetHeader.scss";
import Link from "next/link";

export default function WidgetHeader({
  title,
  subTitle,
  rightSide,
  className,
}: {
  title?: string;
  subTitle?: string;
  rightSide?: React.ReactNode;
  className?: string;
}) {
  return (
    <Row className={`widget-header ${className}`}>
      <Col flex={1}>
        <h2>
          <Link href={"/bankaccount"}>{title}</Link>
        </h2>
        <span className="paragraph2 regular">{subTitle}</span>
      </Col>
      <Col className="right-side">{rightSide}</Col>
    </Row>
  );
}
