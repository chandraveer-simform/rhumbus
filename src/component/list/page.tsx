import { List as AntdList } from "antd";
import { ListGridType, ListItemLayout, ListSize } from "antd/es/list";
import "./list.scss";

export interface ListInterface {
  bordered?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  dataSource?: T[];
  extra?: React.ReactNode;
  grid?: ListGridType;
  id?: string;
  itemLayout?: ListItemLayout;
  loadMore?: React.ReactNode;
  loading?: boolean;
  renderItem?: (item: T, index: number) => React.ReactNode;
  size?: ListSize;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function List({
  bordered,
  className,
  style,
  dataSource,
  extra,
  grid,
  id,
  itemLayout,
  loadMore,
  loading,
  renderItem,
  size,
  header,
  footer,
}: ListInterface) {
  return (
    <AntdList
      bordered={bordered}
      loading={loading}
      className={className}
      style={style}
      dataSource={dataSource}
      extra={extra}
      grid={grid}
      id={id}
      itemLayout={itemLayout}
      loadMore={loadMore}
      renderItem={renderItem}
      size={size}
      header={header}
      footer={footer}
    />
  );
}
