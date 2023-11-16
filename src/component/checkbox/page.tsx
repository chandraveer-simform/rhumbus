import { Checkbox as AntdCheckbox } from "antd";
import "./checkbox.scss";

export default function Checkbox({
  children,
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [rest: string]: any;
}) {
  return (
    <AntdCheckbox className={`${className}`} {...rest}>
      {children}
    </AntdCheckbox>
  );
}
