import { StyleSheet } from "react-native";

import theme from "../../assets/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    profileImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    infoCard: {
        borderRadius: 8,
        backgroundColor: '#fff',
        width: '90%',
        minWidth: 350,
        padding: 16,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 15,
    },
    cartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    infoText: {
        fontSize: 16,
        fontWeight: 'regular',
    },
    divider: {
        marginVertical: 3,
    },
    logoutButton: {
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
      },
});