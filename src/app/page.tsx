import React from 'react';

import { getTrends } from '@/services/wikipedia';

export default async function Home(): Promise<React.ReactElement> {
  const trendsData = await getTrends();

  console.info(trendsData);
  return <main>Hello World</main>;
}
