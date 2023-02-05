import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

import { useAppSelector } from '@/store/hooks';

const libraries = ['places']

const mapCointainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  borderColor: '#1C5894',
  borderWidth: '2px'

}
const mapStyles = 'rounded-xl w-2/3'

export const TrackingMap = () => {


  const { latestInfo } = useAppSelector(state => state.tracking);
  const { lat, long: lng } = latestInfo;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const coords = [{ lat, lng }]

  const center = {
    lat: lat || 0,
    lng: lng || 0
  };

  if (loadError) return (
    <div className="flex items-center justify-center">
      <h2 className="max-w-2xl mx-auto text-[calc(1vw_+_1rem)] lg:text-2xl text-center text-gray-400 inter-b">Error loading Maps</h2>
    </div>
  )

  if (!isLoaded) return (
    <div className="flex items-center justify-center">
      <h2 className="max-w-2xl mx-auto text-[calc(1vw_+_1rem)] lg:text-2xl text-center text-gray-400 inter-b">Loading Maps</h2>
    </div>
  )

  return (
    <GoogleMap
      mapContainerStyle={mapCointainerStyle}
      zoom={10}
      center={center}
      options={{ styles: mapStyles }}
    >
      {
        isLoaded ? (
          <MarkerF
            title={'location'}
            position={{ lat, lng }}
            icon='https://res.cloudinary.com/geraldog09/image/upload/v1663718850/box-icon_hnwczc.svg'
            shape={{ coords }}
          />
        )
          : null
      }
    </GoogleMap>
  )
}
