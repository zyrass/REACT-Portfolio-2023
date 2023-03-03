// Load all actions
import * as Actions from "../Actions/themeAction";

// Load all themes
import {
    darkTheme,
    brownTheme,
    redTheme,
    purpleTheme,
    blueTheme,
} from "../../Themes/themes";

// Generate a random theme + initialState
const arrayThemes = [darkTheme, brownTheme, redTheme, purpleTheme, blueTheme];
const initialState = {
    theme: arrayThemes[Math.floor(Math.random() * arrayThemes.length)],
};

// export themeReducer
export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.APPLY_THEME: {
            // Old methods (shallow copy)
            // return Object.assign({},{theme:action.payload});

            // New methods (deep copy)
            return JSON.parse(JSON.stringify({ theme: action.payload }));
        }
        default: {
            return state;
        }
    }
};