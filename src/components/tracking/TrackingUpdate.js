import { Timeline } from "antd";
import { BsCircle } from "react-icons/bs";
import { useAppSelector } from "@/store/hooks";

import { TrackingUpdateItem } from "./TrackingUpdateItem";

export const TrackingUpdate = () => {
  const { trackingEvents, delivered } = useAppSelector(
    (state) => state.tracking
  );
  return (
    <div className="w-full h-[450px] bg-[#1C5894] rounded-[10px]">
      <div className="flex items-center justify-center h-[50px]">
        <h3 className="text-2xl font-medium leading-6 text-white !mb-0">
          TRACKING UPDATE
        </h3>
      </div>
      <div className="flex justify-between bg-[#1C5894] rounded-b-[10px] px-6 py-3 h-[400px] overflow-y-auto no-scrollbar">
        <div className="py-4">
          <Timeline
            pending={
              delivered ? (
                false
              ) : (
                <div className="text-white pl-[14px]">Delivery</div>
              )
            }
            reverse={true}
            pendingDot={<BsCircle size={40} className="fill-white" />}
            className="mb-[40px] relative"
            mode={"left"}
          >
            <div className="h-fit">
              <div
                className={`${
                  delivered ? "border-solid h-[calc(100%_-_120px)]" : "border-dashed h-[calc(100%_-_40px)]"
                } absolute top-[20px] bottom-[00px] left-[4px]  border-white border-l-[3px]`}
              />
              {trackingEvents.map((item, index) => {
                return (
                  <TrackingUpdateItem
                    key={item.id}
                    isLast={index === 0}
                    {...item}
                  />
                );
              })}
            </div>
          </Timeline>
        </div>
      </div>
    </div>
  );
};
