import { lazy } from "react";
import { Navigate, useParams } from "react-router-dom";
const DummyTable = lazy(() => import("../DummyTable/DummyTable"));
const DummyList = lazy(() => import("../DummyList/DummyList"));
const DummyChart = lazy(() => import("../DummyChart/DummyChart"));

export default function RenderComponentBasedOnId() {
  let { id } = useParams();

   if (!id) {
     const path = window.location.pathname;
     const parts = path.split("/");
     return <Navigate to={`/${parts[parts.length - 1]}`} replace />;
  }
  
  switch (id) {
    case "dummyTable":
      return <DummyTable />;
    case "dummyList":
      return <DummyList />;
    case "dummyChart":
      return <DummyChart />;
    default:
      return <Navigate to="/dummyTable" />;
  }
}