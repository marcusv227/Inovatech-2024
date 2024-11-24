import { View, Text, StyleSheet, Image } from 'react-native';
import { Card as PaperCard, Divider } from 'react-native-paper';
import { Button } from '../src/components/button';
import { styles } from './styles/stylesCard';

export default function Card({ userData, onLogout }) {

    const { name, email } = userData;

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Profile.png')}
                style={styles.profileImage}
            />
            <PaperCard style={styles.infoCard}>
                <PaperCard.Title title="Dados pessoais" titleStyle={styles.cartTitle} />
                <Divider style={styles.divider} />
                <PaperCard.Content>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoText}>{name}</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.infoItem}>
                        <Text style={styles.infoText}>{email}</Text>
                    </View>
                </PaperCard.Content>
            </PaperCard>
            <Button
                children='Logout'
                style={styles.logoutButton}
                onPress={onLogout}
            />
        </View>
    );
}
