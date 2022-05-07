import React, { Suspense } from 'react';

import AppRouter from './router'
//scss files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={null}>
        <AppRouter />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
