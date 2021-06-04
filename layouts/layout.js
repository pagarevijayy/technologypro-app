import Alert from "../components/alert";
import Menubar from "../components/menubar";
import Container from "../layouts/container";

export default function Layout({ children }) {
  const alertMessage = "Yipeee... We are live! 🙌 ";
  const showAlert = false;

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-200">
      {showAlert && <Alert alertMessage={alertMessage} />}
      <Menubar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
