import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { ChamadoContext } from '../context/ChamadoContext';
import CustomButton from '../components/CustomButton';
const ChamadoFormScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const { addChamado } = useContext(ChamadoContext);

  const handleSubmit = () => {
    const newChamado = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      description,
      status: 'Aberto',
    };
    addChamado(newChamado);
    setName('');
    setEmail('');
    setSubject('');
    setDescription('');
    navigation.navigate('Acompanhamento');
  };

  return (
    <View style={styles.container}>
      <Image style={{ marginBottom: 50, width:60, height:30 }} source={require('../../assets/logo.png')} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Assunto"
        placeholderTextColor="#999"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descrição"
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <CustomButton title="Abrir Chamado" onPress={handleSubmit} />

      <CustomButton title="Chamados" onPress={() => navigation.navigate('Acompanhamento')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    zIndex: 0,
    backgroundColor: 'white',
    textAlign: 'center',
  },
});

export default ChamadoFormScreen;
