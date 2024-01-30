import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import TopBar from '@/components/Navbar/TopBar';

export default function App({ Component, pageProps }) {
  // return (
  //   <>
  //     <main className=" font-buch">
  //       <TopBar />
  //       <div className="container mx-auto">
  //         <div className="my-[52px]">
  //           <Component {...pageProps} />
  //         </div>
  //       </div>
  //     </main>
  //     <ToastContainer />
  //   </>
  // );

  return <Component {...pageProps} />;
}
