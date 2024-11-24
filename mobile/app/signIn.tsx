import { View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { Button } from '../src/components/button';
import { styles } from './styles/stylesSignIn';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginUser } from '../src/services/apiService'; // Função que interage com sua API

type FormDataProps = {
  email: string;
  password: string;
};

const loginSchema = yup.object({
  email: yup
    .string()
    .required('Informe o email')
    .email('Email inválido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha dever ter pelo menos 6 dígitos'),
});

export default function SignIn({ setScreen, onLogin }) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async ({ email, password }: FormDataProps) => {
    try {
      const userData = await loginUser(email, password);
      console.log(userData);
      onLogin(userData);
      setScreen('home');
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login, tente novamente!');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.logo}>
            <Text variant="headlineLarge">Login</Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Digite seu email..."
                  mode="outlined"
                  right={<TextInput.Icon icon="email" />}
                  theme={{ colors: { background: 'ffffff' } }}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.email?.message && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Senha</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Digite sua senha..."
                  mode="outlined"
                  secureTextEntry
                  right={<TextInput.Icon icon="eye" />}
                  theme={{ colors: { background: 'ffffff' } }}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.password?.message && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
          </View>

          <View style={styles.createButton}>
            <Button children="Voltar" mode="contained" icon="arrow-left" style={styles.button} onPress={() => setScreen('logo')} />
            <Button children="Entrar" mode="contained" icon="check" style={styles.button} onPress={handleSubmit(handleLogin)} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

SignIn.options = {
  headerShow: false,
};
