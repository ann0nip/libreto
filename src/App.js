import { Routes, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
};

export default App;
