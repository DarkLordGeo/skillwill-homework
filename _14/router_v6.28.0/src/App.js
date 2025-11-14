import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import router from './router.js'

function App() {
  return (
    <>
      <Layout>
        <h1>Navigate:</h1>
        <Link to={"/"}>home</Link>
        <Routes>
          {router.map((data, index) => (
            <Route key={index} path={data.path} element={data.element} />
          ))}
        </Routes>
      </Layout>
    </>

  );
}

export default App;
