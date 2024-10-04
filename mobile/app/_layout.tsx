import { Stack } from 'expo-router/stack';
import { PaperProvider } from 'react-native-paper';
import theme from '../assets/theme';

export default function Layout() {
    return (
        <PaperProvider theme={theme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </PaperProvider>
    );
}
