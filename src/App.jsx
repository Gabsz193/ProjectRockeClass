import React from "react";
import HomeScreen from "./layouts/pages/HomeScreen";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import LoginScreen from "./layouts/pages/LoginScreen";
import ProfessorInicioScreen from "./layouts/pages/Dashboard/ProfessorInicioScreen";
import ProfessorFilterScreen from "./layouts/pages/Dashboard/ProfessorFilterScreen";
import ProfessorCadastraAluno from "./layouts/pages/Dashboard/ProfessorCadastraAluno";
import EmConstrucaoScreen from "./layouts/pages/EmConstrucaoScreen";
import ProfessorAlunoDashboard from "./layouts/pages/Dashboard/ProfessorAlunoDashboard";
import ProfessorCadAlunoSucesso from "./layouts/pages/Dashboard/ProfessorCadAlunoSucesso";
import ProfessorVisualizarGeral from './layouts/pages/Dashboard/ProfessorVisualizarGeral'
import CadastroScreen from "./layouts/pages/CadastroScreen";
import ColocarNota from "./layouts/pages/Dashboard/ColocarNota";
import ConselhoTela from "./layouts/pages/Dashboard/ConselhoTela";
import TelaConselhoTri from "./layouts/pages/Dashboard/TelaConselhoTri";
import ProfessorConselhoTriAluno from "./layouts/pages/Dashboard/ProfessorConselhoTriAluno";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeScreen />
    },
    {
      path: '/Login',
      element: <LoginScreen />
    },
    {
      path: '/Professor/Inicio',
      element: <ProfessorInicioScreen />
    },
    {
      path: '/Professor/Filter-students',
      element: <ProfessorFilterScreen />
    },
    {
      path: '/Professor/Register-students',
      element: <ProfessorCadastraAluno />
    },
    {
      path: '/Construcao',
      element: <EmConstrucaoScreen />
    },
    {
      path: '/Professor/Filter-students/Aluno',
      element: <ProfessorAlunoDashboard />
    },
    {
      path: '/Professor/AlunoCadastrado',
      element: <ProfessorCadAlunoSucesso/>
      
    },
    {
      path: '/Professor/Visualizar-Geral',
      element: <ProfessorVisualizarGeral/>
    },
    {
      path: '/Cadastro',
      element: <CadastroScreen/>
    },
    {
      path: '/Teste',
      element: <ColocarNota />
    },
    {
      path: '/Professor/Conselho',
      element: <ConselhoTela />
    },
    {
      path: '/Professor/Conselho/Trimestre',
      element: <TelaConselhoTri />
    },
    {
      path: '/Professor/Conselho/Trimestre/Materia',
      element: <ProfessorConselhoTriAluno />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
        <Route />
      </RouterProvider>
    </div>
  );
}

export default App;
