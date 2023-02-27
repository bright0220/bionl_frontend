import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "./contexts";
import { EditProvider } from "./contexts";
import { queryClient } from "./lib/react-query";
import { AppRoutes } from "./router";

function App() {
  return (
    <Router>
      <AuthProvider>
        <EditProvider>
          <QueryClientProvider client={queryClient}>
            {/* TODO: Add this only for dev environment, to be removed IF production */}
            <ReactQueryDevtools />
            <AppRoutes />
          </QueryClientProvider>
        </EditProvider>
      </AuthProvider>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        position="top-right"
        theme="dark"
      />
    </Router>
  );
}

export default App;
