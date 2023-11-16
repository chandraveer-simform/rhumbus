import { Card as AntdCard, CardProps } from "antd";
import "./card.scss";

export default function Card({
  children,
  className = "",
  title,
  bordered,
  ...rest
}: CardProps) {
  return (
    <AntdCard className={className} title={title} bordered={bordered} {...rest}>
      {children}
    </AntdCard>
  );
}
