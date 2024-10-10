import "./App.css";
import { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const Layout = lazy(() => import("./components/Layout"));
const Task = lazy(() => import("./pages/Task"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const CreateTask = lazy(() => import("./pages/CreateTask"));
const EditTask = lazy(() => import("./pages/EditTask"));
const TaskDetails = lazy(() => import("./pages/TaskDetails"));
const Spinner = lazy(() => import("./components/Spinner"));
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Suspense
        fallback={
          <>
            <Spinner />
          </>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Task />} />
              <Route path="/create" element={<CreateTask />} />
              <Route path="/task/:id" element={<TaskDetails />} />
              <Route path="/edit" element={<EditTask />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Suspense>
    </>
  );
}

export default App;
