'use client';

import { PuffLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="grid place-items-center" style={{ height: '60vh' }}>
      <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
      />
    </div>
  );
}
