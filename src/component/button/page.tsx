import { Button as AntdButton } from "antd";
import "./button.scss";

export default function Button({
  children,
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [rest: string]: any;
}) {
  return (
    <AntdButton className={`antd-btn ${className}`} {...rest}>
      {children}
    </AntdButton>
  );
}
