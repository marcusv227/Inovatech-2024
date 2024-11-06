import { View, Image } from "react-native";
import { Text, Appbar, Menu, IconButton } from "react-native-paper";
import { Button } from "../src/components/button";
import SafewaysSvg from "../assets/SafewaysLogo.svg";
import { useState } from "react";
import { styles } from './styles/stylesProfile';

interface ProfileDataProps {
    onLoginPress: () => void;
    onRegisterPress: () => void;
}

const ProfileData: React.FC<ProfileDataProps> = ({ onLoginPress, onRegisterPress }) => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.header}>
                <SafewaysSvg />
                <Text style={styles.textHeader}>Perfil</Text>
                <Menu visible={visible}
                    contentStyle={{ backgroundColor: '#fafafa', width: 120, }}
                    anchor={
                        <IconButton icon="cog" onPress={openMenu} />
                    }
                    style={styles.menu}>
                    <Menu.Item leadingIcon="exit-to-app" onPress={() => {
                        closeMenu();
                    }} title="Sair" />
                </Menu>
            </Appbar.Header>

            <View style={styles.profileContainer}>
                <View style={styles.intro}>
                    <Image
                        source={require('../assets/Safeways.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        children='Login'
                        onPress={onLoginPress}
                    />
                    <Button
                        children='Cadastrar'
                        onPress={onRegisterPress}
                    />
                </View>
            </View>
        </View>
    );
}

export default ProfileData;