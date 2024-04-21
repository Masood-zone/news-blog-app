import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import { useScrollToTop } from "../../utils/scrollToTop";

function Layout() {
  useScrollToTop();
  return (
    <div className="max-w-full h-auto mx-auto max-xl:w-full max-md:w-full">
      <Navbar />
      <div className="max-w-6xl h-screen mt-[105px] mx-auto px-2 py-2 max-md:p-1">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
