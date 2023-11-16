import { DatePicker as AntdDatePicker, DatePickerProps } from "antd";

export default function DatePicker({
  defaultValue,
  format,
  className = "",
  ...rest
}: DatePickerProps) {
  return (
    <AntdDatePicker
      className={`ant-datepicker ${className}`}
      defaultValue={defaultValue}
      format={format}
      {...rest}
    />
  );
}
