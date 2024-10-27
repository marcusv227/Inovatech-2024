import { View,StyleSheet, Button, Image } from "react-native";
import { Text , Appbar,Avatar, TextInput, Drawer, Card, Divider, Icon, Menu, IconButton   } from "react-native-paper";
import LogoSvg from "../../assets/logoProfile.svg"
import {User, Mail, Phone, IdCard} from 'lucide-react-native'
import { useState } from "react";
import { useRouter } from "expo-router";
import {styles} from '../styles/stylesProfile' 

export default function profile(){
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleExitLogin = () => {
        
        router.push('/signUp');
      };

    return (
        <View style={styles.container}>
            <Appbar.Header  style={styles.header}>
                <LogoSvg />
                <Text style={styles.textHeader}>Perfil</Text>
                <Menu visible={visible}
                
                  contentStyle={{backgroundColor: '#fafafa',  width: 120, }}
                  anchor={
                      <IconButton icon="cog" onPress={ openMenu}/>
                }
                style={styles.menu}>
                    <Menu.Item  leadingIcon="exit-to-app"   onPress={() => {
                      handleExitLogin()
                      closeMenu()
                      }} title="Sair" />
                    
                </Menu>
            </Appbar.Header>


          
            
            <View style={styles.profileContainer}>
            
            
            <View style={styles.Intro}>
           <Image 
              source={require('../../assets/tipografia.png')} 
              style={styles.image} 
            />

           </View>
            </View>

            <View style={styles.card}>

            <Card style={styles.infoCard}>
                <Card.Title title="Dados pessoais" titleStyle={styles.cartTitle} />
                <Divider style={styles.divider} />
                <Card.Content>

                     <View style={styles.infoItem}>
                        <User size={24} color="#2563eb"/>
                        <Text style={styles.infoText}>Fernado Vinicius Melo Dias de Lima</Text>
                    </View>
                    <Divider style={styles.divider} />
                    

                    <View style={styles.infoItem}>
                        <Mail size={24} color="#2563eb"/>
                        <Text style={styles.infoText}>fernanda@gmail.com</Text>
                    </View>
                    <Divider style={styles.divider} />

                    <View style={styles.infoItem}>
                        <IdCard size={24} color="#2563eb"/> 
                        <Text style={styles.infoText}>674.950.260-14</Text>
                    </View>
                    <Divider style={styles.divider} />

                    <View style={styles.infoItem}>
                        <Phone size={24} color="#2563eb"/> 
                        <Text style={styles.infoText}>(11)99999-9999</Text>
                    </View>
                </Card.Content>
            </Card>
            </View>
        </View>

        
    )
}

