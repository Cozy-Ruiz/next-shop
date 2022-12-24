import '../styles/globals.css';
import Header from "@components/Header";
import AppContext from '@context/AppContext';
import useInitialSatate from '@hooks/useInitialState';

export default function App({ Component, pageProps }) {
  const initalState = useInitialSatate();
  return (
    <AppContext.Provider value={initalState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
