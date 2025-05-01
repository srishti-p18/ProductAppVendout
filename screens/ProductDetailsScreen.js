import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  console.log('Product details:', product);

  const handleBuy = () => {
    console.log('Buy Now button clicked');
    Alert.alert('Buy Now', 'This is a placeholder action.');
  };

  const priceString = product.price.replace(/[^0-9.-]+/g, ''); 
  const price = parseFloat(priceString);

  if (isNaN(price)) {
    console.error('Invalid price:', product.price);
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: Invalid price format.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Button title="Buy Now" onPress={handleBuy} color="#2196F3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '80%', 
    height: undefined, 
    aspectRatio: 1, 
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  price: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductDetailsScreen;
