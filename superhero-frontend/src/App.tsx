import { PATH } from "const";
import { HomePage, NotFoundPage } from "pages";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path={PATH.INVALID_PATH}
          element={<Navigate to={PATH.NOT_FOUND} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
