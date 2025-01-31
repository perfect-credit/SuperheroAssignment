import { HomeProvider } from "context/HomeContext";
import { HomeView } from "views/Home";

export const HomePage = () => {
  return (
    <HomeProvider>
      <HomeView />
    </HomeProvider>
  );
};
