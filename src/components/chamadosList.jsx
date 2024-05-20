import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Dados de exemplo
const chamados = [
  { id: '1', subject: 'Problema no servidor', status: 'Aberto' },
  { id: '2', subject: 'Erro de login', status: 'Em andamento' },
  { id: '3', subject: 'Tela azul da morte', status: 'Fechado' },
  { id: '4', subject: 'Tela azul da morte', status: 'Fechado' },
];

const ChamadoList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.status}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Chamados</Text>
      <FlatList
        data={chamados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 50,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  subject: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});

export default ChamadoList;
