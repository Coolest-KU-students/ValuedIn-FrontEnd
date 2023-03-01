import { Themes } from './Themes';

const Theme = (state = { Theme:  getThemeStyle(getStoredTheme()) }, action) => {
    if (action.type) 
        return getThemeStyle(action.type === '@@INIT' ? getStoredTheme() : action.type);
    else
     return state;
};

export default Theme;

const getStoredTheme = () => {
    localStorage.getItem('Theme');
};

const getThemeStyle = (theme) => {
    return Themes.Light; //Only light theme
};
