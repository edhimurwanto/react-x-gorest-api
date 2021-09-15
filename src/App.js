import logo from './logo.svg';
import './App.css';
import {ThemeContext, themes} from './theme/ThemeContext';
import {useState} from 'react';

function App() {

    const toggleTheme = (newTheme) => {

        setTheme({
            ...theme,
            theme: newTheme
        })
    }

    const [theme, setTheme] = useState({
        theme: themes.dark,
        toggleTheme: toggleTheme
    });

    return (
        <ThemeContext.Provider value={theme}>
            <div className="App">
                <Toolbar/>
            </div>
        </ThemeContext.Provider>
    );
}

const Toolbar = () => {
    return (
        <div>
            <Button/>
        </div>
    )
}

const Button = () => {

    return (
        <ThemeContext.Consumer>
            {
                ({theme, toggleTheme}) => {
                    return (
                        <div style={{backgroundColor: '#fff'}}>
                            <button type='button'
                                    style={{backgroundColor: theme.background, color: theme.foreground}}
                                    onClick={() => {
                                        const newTheme = theme === themes.dark ? themes.light : themes.dark;
                                        toggleTheme(newTheme);
                                    }}
                            >BUTTON
                            </button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )

}

export default App;
