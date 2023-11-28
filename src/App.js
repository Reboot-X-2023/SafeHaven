import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BookingHomepage from "./pages/booking-homepage";
import MyBookings from "./pages/my-bookings";
import Explore from "./pages/explore";
import NewBooking from "./pages/new-booking";
import Listing4 from "./pages/listing4";
import Listing3 from "./pages/listing3";
import Listing2 from "./pages/listing2";
import Listing1 from "./pages/listing1";
import SplashScreen from "./pages/splash-screen";
import HomeScreen from "./pages/home-screen";
import ExternalSymbols from "./pages/external-symbols";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/26-my-bookings":
        title = "";
        metaDescription = "";
        break;
      case "/23-explore":
        title = "";
        metaDescription = "";
        break;
      case "/231-new-booking":
        title = "";
        metaDescription = "";
        break;
      case "/231-listing-4":
        title = "";
        metaDescription = "";
        break;
      case "/231-listing-3":
        title = "";
        metaDescription = "";
        break;
      case "/231-listing-2":
        title = "";
        metaDescription = "";
        break;
      case "/231-listing-1":
        title = "";
        metaDescription = "";
        break;
      case "/0-splash-screen":
        title = "";
        metaDescription = "";
        break;
      case "/1-home-screen":
        title = "";
        metaDescription = "";
        break;
      case "/external-symbols":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BookingHomepage />} />
      <Route path="/26-my-bookings" element={<MyBookings />} />
      <Route path="/23-explore" element={<Explore />} />
      <Route path="/231-new-booking" element={<NewBooking />} />
      <Route path="/231-listing-4" element={<Listing4 />} />
      <Route path="/231-listing-3" element={<Listing3 />} />
      <Route path="/231-listing-2" element={<Listing2 />} />
      <Route path="/231-listing-1" element={<Listing1 />} />
      <Route path="/0-splash-screen" element={<SplashScreen />} />
      <Route path="/1-home-screen" element={<HomeScreen />} />
      <Route path="/external-symbols" element={<ExternalSymbols />} />
    </Routes>
  );
}
export default App;
