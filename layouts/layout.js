import Container from "../layouts/container";
import Alert from "../components/alert";
import Menubar from "../components/menubar";
import Footer from "../components/footer";
import ContentAsideRight from "../components/content-aside-right";

export default function Layout({ children }) {
  const alertMessage = "Yipeee... We are live! 🙌 ";
  const showAlert = false;

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-200">
      {showAlert && <Alert alertMessage={alertMessage} />}
      <Menubar />
      <main>
        <Container>
          <div className="md:grid md:grid-cols-3 gap-6 mt-4 pb-8">
            <div className="col-span-2 mt-4">{children}</div>
            <div className="col-span-1 mt-4">
              <ContentAsideRight />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
