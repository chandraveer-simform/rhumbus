import { Breadcrumb as AntdBreadcrumb } from "antd";
import "./breadcrumb.scss";

export default function Breadcrumb({
  separator,
  items,
  className = "",
  ...rest
}: {
  separator?: string | React.ReactNode;
  items: { path?: string; title?: string; href?: string; separator?: string }[];
  className?: string;
  [rest: string]: any;
}) {
  return (
    <AntdBreadcrumb
      className={` ${className}`}
      separator={separator}
      items={items}
      {...rest}
    />
  );
}
