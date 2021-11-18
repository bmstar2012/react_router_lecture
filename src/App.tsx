import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Detail} from './pages/detail';

function App() {
    return (
        <div>
            <header>This is header</header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
