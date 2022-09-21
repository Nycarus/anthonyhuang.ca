import * as React from "react"
import { createTheme , ThemeProvider } from '@mui/material/styles';

export default class ThemeController extends React.Component {
    constructor(props) {
        super(props);
        if (typeof window !== 'undefined') {
            this.state = localStorage.getItem("themeValue") ? {"mode": localStorage.getItem("themeValue")} : {"mode": "light"};
        }
        else{
            this.state = {"mode": "light"}
        }
        this.changeTheme = this.changeTheme.bind(this);
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
        const lightTheme = createTheme({
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

        const darkTheme = createTheme({
            palette : {
                mode: "dark"
            }
        });

        return(
            <ThemeProvider theme={this.state.mode === "light" ? lightTheme : darkTheme}>
                {React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, {"changeTheme": this.changeTheme});
                })}
            </ThemeProvider>
        );
    }
}