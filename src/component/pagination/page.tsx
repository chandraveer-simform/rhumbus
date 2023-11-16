import { Pagination as AntdPagination, PaginationProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import Select from "../select/page";
import Link from "next/link";
import "./pagination.scss";

export const comparisonOptions = [
  {
    value: "10",
  },
  {
    value: "20",
  },
  {
    value: "30",
  },
  {
    value: "40",
  },
];

export default function Pagination({
  pageClassName = "",
  className = "",
  total,
  itemRender,
  ...rest
}: {
  pageClassName?: string;
  className?: string;
  total: number;
  itemRender: PaginationProps["itemRender"];
  [rest: string]: any;
}) {
  return (
    <div className={`antd-pagination ${pageClassName}`}>
      <div className="w-100 row align-items-center">
        <h5>Showing </h5>
        <Select
          className="comparison-select ml-12 mr-12"
          placeholder=""
          defaultValue="10"
          suffixIcon={<CaretDownOutlined className="icon-properties" />}
          options={comparisonOptions}
        />
        <span className="paragraph2">items per page</span>
      </div>

      <div className="row align-items-center">
        <AntdPagination
          className={`${className}`}
          total={total}
          itemRender={itemRender}
          showSizeChanger={false}
          {...rest}
        />
        <Link className="njs-link ml-24" href="/posts/first-post">
          End
        </Link>
      </div>
    </div>
  );
}
