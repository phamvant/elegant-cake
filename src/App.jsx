import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import CakeList from "./components/CakeList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CakeDetail from "./components/CakeDetail";
import PageTransition from "./components/PageTransition";
import AllCakes from "./components/AllCakes";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen font-display">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/elegant-cake/"
            element={
              <PageTransition type="fade">
                <CakeList />
              </PageTransition>
            }
          />
          <Route
            path="/elegant-cake/cake/:id"
            element={
              <PageTransition type="slide">
                <div className="pt-22">
                  <CakeDetail />
                </div>
              </PageTransition>
            }
          />
          <Route
            path="/elegant-cake/cakes"
            element={
              <PageTransition>
                <div className="pt-22">
                  <AllCakes />
                </div>
              </PageTransition>
            }
          />
          <Route
            path="/elegant-cake/about"
            element={
              <PageTransition>
                <div className="pt-22 text-center text-[--color-brown] text-3xl">
                  About Page (Coming Soon)
                </div>
              </PageTransition>
            }
          />
          <Route
            path="/elegant-cake/contact"
            element={
              <PageTransition>
                <div className="pt-22">
                  <Contact />
                </div>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
