import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ product, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image source={product.image} style={styles.thumbnail} />
    <View>
      <Text style={styles.name}>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
  },
  thumbnail: { width: 60, height: 60, marginRight: 10 },
  name: { fontWeight: 'bold', fontSize: 16 },
});

export default ProductItem;
