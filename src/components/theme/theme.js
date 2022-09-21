import * as React from "react"
import { createTheme , ThemeProvider } from '@mui/material/styles';

export default class ThemeController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"mode": "light"}
        this.changeTheme = this.changeTheme.bind(this);

        this.lightTheme = createTheme({
            palette : {
                primary : {
                    main : '#6200EE',
                }
            },
            components: {
                MuiPaper : {
                    styleOverrides : {
                        root: {
                            backgroundColor:"#f5f5f5"
                        }
                    }
                },
                MuiListItemButton: {
                    styleOverrides : {
                        root: {
                            backgroundColor:"#ffffff"
                        }
                    }
                }
            }
        });

        this.darkTheme = createTheme({
            palette : {
                mode: "dark"
            }
        });
    }

    componentDidMount() {
        if (typeof window !== `undefined`){
            this.setState(localStorage.getItem("themeValue") ? {"mode": localStorage.getItem("themeValue")} : {"mode": "light"})
        }
    }

    changeTheme() {
        if (this.state.mode === "light") {
            this.setState({"mode": "dark"});
            if (typeof window !== 'undefined') {
                localStorage.setItem("themeValue", "dark");
            }
        }
        else {
            this.setState({"mode": "light"});
            if (typeof window !== 'undefined') {
                localStorage.setItem("themeValue", "light");
            }
        }
    }

    render() {
        return(
            <ThemeProvider theme={this.state.mode === "light" ? this.lightTheme : this.darkTheme}>
                {React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, {"changeTheme": this.changeTheme, "themeColour" : this.state.mode});
                })}
            </ThemeProvider>
        );
    }
}