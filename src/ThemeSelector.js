// Dependancies
import { useDispatch } from "react-redux";
import styled from "styled-components";

// Load applyTheme
import { applyTheme } from "../../Store/Actions/themeActions";

// Load all themes
import {
    darkTheme,
    brownTheme,
    // greenTheme,
    blueTheme,
    purpleTheme,
    // pinkTheme,
    redTheme,
} from "../../Themes/themes";

const BTN = styled.button`
  width: 40px;
  height: 40px;
  border: 1px dotted ${(props: any) => props.theme.primary};
  border-radius: 4px;
  margin: 0 5px;
`;

function ThemeSelector() {
    const dispatch = useDispatch();
    const handledChangedTheme = (theme: any) => {
        dispatch(applyTheme(theme));
    };

    return (
        <div style={{ display: "flex" }}>
            <BTN
                onClick={() => handledChangedTheme(darkTheme)}
                style={{ backgroundColor: "#252525" }}
            ></BTN>

            <BTN
                onClick={() => handledChangedTheme(brownTheme)}
                style={{ backgroundColor: "#7f4828" }}
            ></BTN>

            <BTN
                onClick={()=> handledChangedTheme(greenTheme)}
                style={{ backgroundColor: '#2b611c' }}
            ></BTN>

            <BTN
                onClick={() => handledChangedTheme(blueTheme)}
                style={{ backgroundColor: "#253d73" }}
            ></BTN>

            <BTN
                onClick={() => handledChangedTheme(purpleTheme)}
                style={{ backgroundColor: "#81329c" }}
            ></BTN>

            <BTN
                onClick={()=> handledChangedTheme(pinkTheme)}
                style={{ backgroundColor: '#ab0057' }}
            ></BTN>

            <BTN
                onClick={() => handledChangedTheme(redTheme)}
                style={{ backgroundColor: "#b10001" }}
            ></BTN>
        </div>
    );
}

export default ThemeSelector;