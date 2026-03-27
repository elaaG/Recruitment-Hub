import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { CandidateDetail } from "./pages/CandidateDetail";
import { Analytics } from "./pages/Analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/candidate/:id",
    Component: CandidateDetail,
  },
  {
    path: "/analytics",
    Component: Analytics,
  },
]);
