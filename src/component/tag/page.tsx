import { Tag as AntdTag } from "antd";
import "./tag.scss";

export default function Tag({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [rest: string]: any;
}) {
  return (
    <AntdTag className={`antd-tag ${className}`} {...rest}>
      {children}
    </AntdTag>
  );
}
