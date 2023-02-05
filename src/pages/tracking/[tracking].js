import { MainLayout } from '@/shared/layouts';

import { fetchLatestEvents } from '@/store/tracking';
import { useAppSelector } from '@/store/hooks';
import getStore from '@/store/store';

import {
  TrackingInformation,
  TrackingNotFound,
  TrackingProgress,
  TrackingUpdate,
  TrackingMap
} from '@/components/tracking';

const TrackingId = () => {

  const { success } = useAppSelector( state => state.tracking );

  if(!success) {
    return (
    <MainLayout
      title="CDL Tracking || Details"
      showHeaderButton
      mainStyles="bg-white pt-8"
    >
      <TrackingNotFound />
    </MainLayout>
    )
  }

  return (
    <MainLayout
      title="CDL Tracking || Details"
      showHeaderButton
      mainStyles="bg-white pt-8"
    >
      <div className="container">
     
        <TrackingProgress />
     
        <TrackingInformation />

        <div className="grid gap-8 grid-rows-[auto_450px] lg:grid-rows-[1fr] lg:grid-cols-[minmax(300px,_382px)_2fr] pb-8 mt-5">
          <TrackingUpdate />

          <div className="relative">
            <TrackingMap />
          </div>
        </div>
     
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = async ({ query }) => {
  
  const { tracking } = query;

  const store = getStore();
  await store.dispatch(fetchLatestEvents({ tracking }));

  return {
    props: {
      initialState: store.getState(),
    }
  }
}

export default TrackingId