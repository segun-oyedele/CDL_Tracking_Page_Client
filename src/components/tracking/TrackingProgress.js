import { useAppSelector } from '@/store/hooks';

import { DeliveredIcon, ForDeliveryIcon, InProgressIcon } from '@/shared/icons';

const statusContainerStyles = "flex flex-col items-center justify-center gap-2 text-center";

export const TrackingProgress = () => {

  const { exception, deliveryStatus } = useAppSelector((state) => state.tracking);
  const error = exception === undefined ? false : !!exception && exception.toLowerCase().includes("nd") ? true : false;
  const isInprogress = deliveryStatus.toLowerCase() === "CDL Origin Scan".toLowerCase() || deliveryStatus.toLowerCase() === "In Transit".toLowerCase() || deliveryStatus.toLowerCase() === "Package Scanned At Delivery".toLowerCase() || deliveryStatus.toLowerCase() === "Label has been created".toLowerCase()
  const isForDelivery = deliveryStatus.toLowerCase() === "In Transit".toLowerCase() || deliveryStatus.toLowerCase() === "Package Scanned At Delivery".toLowerCase();
  const isDelivered = deliveryStatus.toLowerCase() === "Package Scanned At Delivery".toLowerCase();

  return (
    <div className="flex items-center justify-between mt-7 lg:mt-[59px] mb-11 lg:mb-24">
      <div className={ statusContainerStyles }>
        <InProgressIcon
          isCompleted={ isInprogress }
        />
        <span className={`${ isInprogress ? "text-[#388E3C]" : "text-[#C9C6C8]"} inter-m`}>IN PROGRESS</span>
      </div>
      <div className={ statusContainerStyles }>
        <ForDeliveryIcon 
          isCompleted={ isForDelivery }
        />
        <span className={`${ isForDelivery ? "text-[#388E3C]" : "text-[#C9C6C8]"} inter-m`}>OUT FOR DELIVERY</span>
      </div>
      <div className={ statusContainerStyles }>
        <DeliveredIcon
          isCompleted={ isDelivered }
          error={ error }
        />
        <span className={`${ error ? "text-[#BC2E2E]" : isDelivered ? "text-[#388E3C]" : "text-[#C9C6C8]"} inter-m`}>{ error ? "DELIVERY" : "DELIVERED" }</span>
      </div>
    </div>
  )
}
