import Footer from "../components/Footer/Footer";
import Topbar from "../components/Topbar/Topbar";
import "./Layout.scss";

const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="authenticated-container">{children}</div>
      <Footer />
    </>
  );
};

export default AuthenticatedLayout;
