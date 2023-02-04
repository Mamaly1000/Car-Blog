import ImgCarousel from "./components/carousel/Carousel";
import "./App.css";
import ThemeContext from "./context/themeContext";
import Layout from "./layout/Layout";
import CarStore from "./components/CarShop/CarStore";
import { Provider } from "react-redux";
import store from "./redux/store";
import OveralViews from "./components/OverallViews/OveralViews";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonQuestions from "./components/CommonQ/CommonQuestions";
import Journal from "./components/Journal/Journal";
import Introduction from "./components/introduction/Introduction";

AOS.init();
function App() {
  return (
    <Provider store={store}>
      <ThemeContext>
        <Layout>
          <ImgCarousel />
          <Introduction />
          <CarStore />
          <OveralViews />
          <CommonQuestions />
          <Journal />
        </Layout>
      </ThemeContext>
    </Provider>
  );
}

export default App;
