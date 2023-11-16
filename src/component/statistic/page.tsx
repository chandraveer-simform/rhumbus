"use client";
import { Col, Row } from "antd";
import "./statistic.scss";

export default function Statistic({
  titleTop,
  titleTopClass = "",
  amount,
  titleBottom,
  className = "",
}: {
  titleTop?: string;
  titleTopClass?: string;
  amount?: number | string;
  titleBottom?: string;
  className?: string;
}) {
  return (
    <Row className={`${className} add-layer`}>
      <Col>
        {titleTop && (
          <h5 className={`dark-3-dark regular mb-4 ${titleTopClass}`}>
            {titleTop}
          </h5>
        )}
        <span className="big-number">{amount}</span>
        {titleBottom && (
          <h5 className="dark-3-dark regular mt-4">{titleBottom}</h5>
        )}
      </Col>
    </Row>
  );
}
