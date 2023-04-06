import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import TaskOriented from './TaskOriented';
import ObjectOriented from './ObjectOriented';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/task' element={<TaskOriented />} />
      <Route path='/object' element={<ObjectOriented />} />
    </Routes>
  );
}
