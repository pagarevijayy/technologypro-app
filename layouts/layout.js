// import Alert from "../components/alert";
// import Footer from "../components/footer";
import Meta from "../components/meta";
//  need header?

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        {/* header here? */}
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
