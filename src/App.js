import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';

const Home = () => <h1>Home</h1>;

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/auth" element={<Authentication />} />
            </Route>
        </Routes>
    );
};

export default App;
