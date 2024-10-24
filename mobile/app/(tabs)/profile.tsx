import { View,StyleSheet } from "react-native";
import { Text , Appbar,Avatar  } from "react-native-paper";
import LogoSvg from "../../assets/logoProfile.svg"


export default function profile(){
    return (
        <Appbar.Header  style={styles.container}>
            <LogoSvg />
            <Text>Perfil</Text>
            <Avatar.Text size={43} label="XD"/>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'space-between',
        alignItems: 'center',
        
    }
})