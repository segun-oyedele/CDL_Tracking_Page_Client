import { useAppSelector } from "@/store/hooks";

export const TrackingInformation = () => {
  const { latestInfo, exception } = useAppSelector((state) => state.tracking);
  const {
    orderTrackingId,
    referenceNumber,
    trackingEvents,
    exceptionDetails,
    driverName,
    city,
    state,
    zipcode,
  } = latestInfo;
  console.log(latestInfo);
  const error =
    exception === undefined
      ? false
      : !!exception && exception.toLowerCase().includes("nd")
      ? true
      : false;

  return (
    <div className="border border-[#1C5894] rounded-[10px] py-4 px-8 grid grid-cols-[repeat(2,_1fr)]">
      <div>
        <h2 className="text-[#1C5894] inter-eb lg:text-2xl mb-4">
          TRACKING INFORMATION
        </h2>

        <div className="mb-2">
          <p>
            <span className="text-sm lg:text-lg inter-sb">
              Tracking number(s):
            </span>{" "}
            <span className="text-xs lg:text-sm text-slate-500 inter-m">
              {orderTrackingId}
            </span>
          </p>
        </div>

        <div>
          <p>
            <span className="text-sm lg:text-lg inter-sb">
              Package Reference: 
            </span>{" "}
            <span className="text-xs lg:text-sm text-slate-500 inter-m">
              {referenceNumber}
            </span>
          </p>
        </div>

        {city && state && zipcode && (
          <div>
            <p>
              <span className="text-sm lg:text-lg inter-sb">Destination: </span>
              <span className="text-xs lg:text-sm text-slate-500 inter-m">
                {city}, {state} - {zipcode}
              </span>
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col items-end justify-start text-right">
        <h2
          className={`${
            error ? "text-[#BC2E2E]" : "text-[#166534]"
          } inter-eb lg:text-2xl mb-4`}
        >
          Latest Update
        </h2>

        <div className="mb-2">
          <p>
            {error &&
              trackingEvents.toLowerCase() ===
                "Package Scanned At Delivery".toLowerCase() && (
                <>
                  {" "}
                  <span className="lg:text-xl text-[#BC2E2E] inter-eb">
                    EXCEPTION
                  </span>{" "}
                  <br />{" "}
                </>
              )}

            {!error && (
              <>
                {" "}
                <span className="lg:text-xl inter-eb">
                  {trackingEvents}
                </span>{" "}
                <br />{" "}
              </>
            )}

            <span
              className={`${error ? "text-[#BC2E2E]" : ""} text-xs lg:text-sm`}
            >
              {exceptionDetails}
            </span>
          </p>
        </div>
        {!!driverName && (
          <div>
            <p>
              <span className="text-sm lg:text-xl inter-eb">
                Driver Information
              </span>{" "}
              <br />
              <span className="text-xs lg:text-lg">{driverName}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
