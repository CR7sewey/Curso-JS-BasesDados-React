import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      {isPageLoading ? (
        <div className="loading" />
      ) : (
        <section className="page">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
