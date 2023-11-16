import { CollapseProps } from "antd";
import WidgetLayout from "../layout";
import Select from "@/component/select/page";
import AddLayer from "../_component/addLayer/page";
import { dayOptions } from "../../../utilities/constants";
import Collapse from "@/component/collapse/page";

const text = (
  <p style={{ paddingLeft: 24 }}>A dog is a type of domesticated animal.</p>
);

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <div className="justify-content-between">
        <h5 className="regular">Within a week 1</h5>
        <h5 className="semibold">209.09</h5>
      </div>
    ),
    children: text,
  },
  {
    key: "2",
    label: (
      <div className="justify-content-between">
        <h5 className="regular">Within a week 2</h5>
        <h5 className="semibold">209.09</h5>
      </div>
    ),
    children: text,
  },
  {
    key: "3",
    label: (
      <div className="justify-content-between">
        <h5 className="regular">Within a week 3</h5>
        <h5 className="semibold">209.09</h5>
      </div>
    ),
    children: text,
  },
];

export default function DataCollapseWidget() {
  return (
    <WidgetLayout>
      <AddLayer
        title="Invoices owed to you"
        amount={"2,190.99"}
        className="pb-24"
        Filters={
          <>
            <Select
              placeholder="Select day"
              options={dayOptions}
              defaultValue="2"
              style={{ width: 110 }}
              bordered={false}
              className=""
            />
          </>
        }
      />
      <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />
    </WidgetLayout>
  );
}
