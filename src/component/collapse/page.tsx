import type { CollapseProps } from "antd";
import { Collapse as AntdCollapse } from "antd";
import "./collapse.scss";

export default function Collapse({
  className = "",
  items,
  bordered,
  defaultActiveKey,
}: {
  className?: string;
  items: CollapseProps["items"];
  bordered?: boolean;
  defaultActiveKey: Array<T>;
}) {
  return (
    <AntdCollapse
      className={className}
      items={items}
      bordered={bordered}
      defaultActiveKey={defaultActiveKey}
    />
  );
}
