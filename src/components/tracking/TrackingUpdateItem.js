import Image from "next/image";
import moment from "moment";
import { Timeline } from "antd";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";

import "antd/dist/antd.css";
import { useAppSelector } from "@/store/hooks";

export const TrackingUpdateItem = ({
  trackingEvents,
  tarckingEventsTimestamp,
  vpod,
  isLast,
}) => {
  const { exception } = useAppSelector((state) => state.tracking);
  let error =
    exception === null
      ? false
      : exception?.toLowerCase().includes("nd") && exception?.length !== null;
  const fDate = moment(tarckingEventsTimestamp).format("MM/DD/YYYY");
  const time = moment(tarckingEventsTimestamp).format("hh:mm A");

  return (
    <Timeline.Item
      className={`!pb-8 `}
      dot={
        trackingEvents === 'Business closed' ? (
          <HiOutlineExclamationCircle
            size={40}
            className={
              "fill-[#ff0000] mt-[-8px] mb-[-8px]"
            }
          />
        ) : trackingEvents === "Package Scanned At Delivery" ? (
          <GiPlainCircle
            size={40}
            className={"fill-[#fff] mt-[-8px] mb-[-8px] "}
          />
        ) : (
          <AiFillCheckCircle
            size={40}
            className={"bg-[#1C5894] mt-[-8px] mb-[-8px] "}
          />
        )
      }
    >
      <div
        className={`${
          isLast ? "hidden" : "flex"
        } absolute bottom-[45px] -left-[22px] h-full border-white border-l-[3px]`}
      />
      <div className="grid grid-cols-[90px_1fr] pl-[14px] gap-[20px] justify-between text-left text-white">
        <div
          className={`inter text-sm ${isLast ? "font-bold" : "font-normal"} ${
            error && trackingEvents === "Package Scanned At Delivery"
              ? "text-[#BC2E2E] inter-b"
              : ""
          }`}
        >
          {fDate}
        </div>

        <div className="flex">
          <div
            className={`inter text-sm ${isLast ? "font-bold" : "font-normal"} ${
              error && trackingEvents === "Package Scanned At Delivery"
                ? "text-[#BC2E2E] inter-b"
                : ""
            }`}
          >
            {trackingEvents}

            <div
              className={`inter text-sm  ${
                isLast ? "font-bold" : "font-normal"
              }${
                error && trackingEvents === "Package Scanned At Delivery"
                  ? "text-[#BC2E2E] inter-b"
                  : ""
              }`}
            >
              {time}
            </div>
          </div>

          <div className="transition duration-300 ease-in-out deliveryImage hover:scale-[2.25] z-50">
            {trackingEvents === "Package Scanned At Delivery" ? (
              <Image
                unoptimized
                src={`data:image/jpeg;base64,${vpod}`}
                alt="delivered picture"
                width={70}
                height={50}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Timeline.Item>
  );
};
