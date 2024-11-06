import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../src/components/button';
import ProfileData from '../profileData';
import SignIn from '../signIn';
import SignUp from '../signUp';
import { styles } from '../styles/stylesUser';

export default function user() {
  const [screen, setScreen] = useState('logo'); // controla qual tela exibir

  const renderScreen = () => {
    switch (screen) {
      case 'logo':
        return (
          <ProfileData
            onLoginPress={() => setScreen('login')}
            onRegisterPress={() => setScreen('register')}
          />
        );
      case 'login':
        return <SignIn setScreen={setScreen} />;
      case 'register':
        return <SignUp setScreen={setScreen} />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
}
