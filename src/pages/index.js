import { MainLayout } from '@/shared/layouts';

import { Hero, TrackSection } from '../components/home';

export default function Home() {

  return (
    <MainLayout
      title="CDL Tracking || Home"
    >
      <Hero />

      <TrackSection />
    </MainLayout>
  );
};
