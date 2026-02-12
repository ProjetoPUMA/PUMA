import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./pages/layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import SubjectsPage from "./pages/SubjectsPage"
import DocumentsPage from "./pages/DocumentsPage"
import CalendarsPage from "./pages/CalendarsPage"


function App() {

  return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="materias" element={<SubjectsPage />} />
          <Route path="documentos" element={<DocumentsPage />} />
          <Route path="calendarios" element={<CalendarsPage />} />

        </Route>
      </Routes>
      
  )
}

export default App
