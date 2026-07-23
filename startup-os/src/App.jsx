import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<div>Tasks</div>} />
          <Route path="crm" element={<div>CRM</div>} />
          <Route path="wiki" element={<div>Wiki</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
