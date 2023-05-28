import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Loader } from './loader/Loader';
import { Navigation } from './navigation/Navigation';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main
        style={{
          paddingLeft: '30px',
          paddingRight: '30px',
        }}
      >
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </main>
    </div>
  );
};
