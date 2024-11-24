import React, { useState } from "react";
import { Appbar, Menu, IconButton, Text } from "react-native-paper";
import { styles } from "./styles/stylesProfile";
import SafewaysSvg from "../assets/SafewaysLogo.svg";

export default function Header() {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
    <Appbar.Header style={styles.header}>
        <SafewaysSvg />
        <Text style={styles.textHeader}>Usuário</Text>
        <Menu visible={visible}
            onDismiss={closeMenu}
            contentStyle={{ backgroundColor: '#fafafa', width: 120, }}
            anchor={
                <IconButton icon="cog" onPress={openMenu} />
            }
            style={styles.menu}>
            <Menu.Item title='Ajuda' leadingIcon="help" />
        </Menu>
    </Appbar.Header>
    );
}