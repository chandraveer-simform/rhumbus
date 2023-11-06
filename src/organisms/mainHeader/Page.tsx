"use client";
import { Button, theme, Col, Row, Badge } from "antd";
import {
  PlusOutlined,
  QuestionCircleFilled,
  BellFilled,
} from "@ant-design/icons";
import SearchInput from "@/component/searchInput/Page";
import "./mainHeader.scss";
import Profile from "@/molecules/profile/page";

export default function MainHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Row
      className="main-header pl-32 border-bottom "
      align="middle"
      justify={"space-between"}
    >
      <Col span={12}>
        <SearchInput className="header-search-input" />
      </Col>
      <Col span={12} className="row main-header-right ">
        <Button onClick={() => {}} className="add-button mr-14">
          <PlusOutlined className="icon-properties" />
          Add
        </Button>
        <div className="ml-8 mr-8">
          <QuestionCircleFilled className="large-icon" />
        </div>
        <div className="ml-8 mr-12">
          <Badge dot={true} size="default" offset={[-5, 3]}>
            <BellFilled className="large-icon" />
          </Badge>
        </div>
        <div className="ml-12 mr-24">
          <Profile />
        </div>
      </Col>
    </Row>
  );
}
