import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SubjectsPage from "./pages/SubjectsPage";
import DocumentsPage from "./pages/DocumentsPage";
import CalendarsPage from "./pages/CalendarsPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="PUMA" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="materias" element={<SubjectsPage />} />
        <Route path="documentos" element={<DocumentsPage />} />
        <Route path="calendarios" element={<CalendarsPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
