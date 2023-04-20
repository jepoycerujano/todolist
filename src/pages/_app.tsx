import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/nav-bar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl bg-white shadow-custom-light dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-9">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
