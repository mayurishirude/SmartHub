import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const [isPublicOpen, setPublicOpen] = useState(false);
  const [isPrivateOpen, setPrivateOpen] = useState(false);

  const togglePublic = () => {
    setPublicOpen(!isPublicOpen);
  };

  const togglePrivate = () => {
    setPrivateOpen(!isPrivateOpen);
  };

  return (
    <> 
     <StatusBar backgroundColor="#61dafb" />
       <View style={styles.container}>
      
      <TouchableOpacity onPress={togglePublic} style={styles.card}>
        <Text style={styles.cardHeader}>
          Public
        </Text>
          <View style={styles.arrowContainer}>
            <AntDesign name={isPublicOpen ? 'up' : 'down'} size={20} color="black" />
          </View>
       
      </TouchableOpacity>
      {isPublicOpen && (
        <View style={styles.cardContent}>
          <Text>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
        </View>
      )}

      {/* Private Accordion */}
      <TouchableOpacity onPress={togglePrivate} style={styles.card}>
        <Text style={styles.cardHeader}>
          Private
              </Text>
          <View style={styles.arrowContainer}>
            <AntDesign name={isPrivateOpen ? 'up' : 'down'} size={20} color="black" />
          </View>
    
      </TouchableOpacity>
      {isPrivateOpen && (
        <View style={styles.cardContent}>
          <Text>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>
      )}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  card: {
    backgroundColor: '#f0f7f7',
    borderRadius: 8,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    fontSize: 18,
  },
 
  cardContent: {
    padding: 14,
 
  },
  arrowContainer: {
    marginTop:14,
    marginRight:10
  }
});

export default App;
