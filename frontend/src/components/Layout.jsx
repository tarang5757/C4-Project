import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
