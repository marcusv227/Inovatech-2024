// theme.tsx
import { MD3LightTheme } from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4A90E2', 
    safe: '#7ED321',    
    alert: '#D9534F',    
    informative: '#F5A623',
    text: '#4A4A4A',     
    background: '#FFFFFF',
  },
};

export default theme;
