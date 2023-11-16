import { Switch as AntdSwitch } from "antd";
import "./switch.scss";

export default function Switch({
  beforeText,
  className = "",
  afterText,
  switchClassName,
  ...rest
}: {
  beforeText?: string;
  className?: string;
  afterText?: string;
  switchClassName?: string;
  [rest: string]: any;
}) {
  return (
    <div className={`row antdSwitch ${className}`}>
      {beforeText} <AntdSwitch className={`${switchClassName}`} {...rest} />{" "}
      {afterText}
    </div>
  );
}
