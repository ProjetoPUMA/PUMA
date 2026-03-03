import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DocumentsPage from "./pages/DocumentsPage";
import CalendarsPage from "./pages/CalendarsPage";
import PageNotFound from "./pages/PageNotFound";
import MaterialPage from "./pages/MaterialPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import SelectionPage from "./pages/SelectionPage";
import SubjectsLayout from "./pages/layouts/SubjectsLayout";
import SubjectsPage from "./pages/SubjectsPage";

function App() {
  return (
    <Routes>
      <Route path="PUMA" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="materias" element={<SubjectsLayout />}>
          <Route index element={<SubjectsPage />} />
          <Route path="mural/:materia" element={<SelectionPage />} />
          <Route path="material/:materia" element={<MaterialPage />} />
          <Route path="atividades/:materia" element={<ActivitiesPage />} />
        </Route>
        <Route path="documentos" element={<DocumentsPage />} />
        <Route path="calendarios" element={<CalendarsPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
