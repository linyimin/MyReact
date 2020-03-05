import React, { useContext } from 'react';
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

function HookApp() {
    return (
        <ThemeContext.Provider value={themes.light}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    console.log(theme);


    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
      </button>
    );
}

export default HookApp;