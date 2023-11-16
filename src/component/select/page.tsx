"use client";
import { Select as AntdSelect } from "antd";

export default function Select({
  showSearch,
  className,
  placeholder,
  style,
  options,
  defaultValue = "",
  bordered,
  suffixIcon,
  onChange,
  ...rest
}: {
  showSearch?: boolean;
  className?: string;
  placeholder: string;
  style?: object;
  options: Array<T>;
  bordered?: boolean;
  defaultValue?: any;
  suffixIcon?: React.ReactNode;
  onChange?: (value: string[]) => void;
  rest?: Object;
}) {
  return (
    <AntdSelect
      showSearch={showSearch || false}
      className={className}
      style={style}
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={options}
      bordered={bordered}
      defaultValue={defaultValue}
      suffixIcon={suffixIcon}
      onChange={onChange}
      {...rest}
    />
  );
}
