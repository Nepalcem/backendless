import dbData from "./components/db/db.json";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import TabSwitcher from "./components/TabSwitcher/TabSwitcher";
import RenderComponentBasedOnId from "./components/RenderComponent/RenderComponentBasedonID";

function App() {
  const navigate = useNavigate();
  const [initialLoad, setInitialLoad] = useState(true);
  const location = useLocation();

 useEffect(() => {
   if (initialLoad && location.pathname === "/") {
     navigate("/dummyTable", { replace: true });
     setInitialLoad(false);
   }
 }, [initialLoad, location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<TabSwitcher dbData={dbData} />}>
        <Route path="/:id" element={<RenderComponentBasedOnId />} />
      </Route>
    </Routes>
  );
}

export default App;
