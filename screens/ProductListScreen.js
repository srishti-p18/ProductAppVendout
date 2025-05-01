import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductContext } from '../context/ProductContext';
import ProductItem from '../components/ProductItem';

const ProductListScreen = ({ navigation }) => {
  const { products } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              onPress={() =>
                navigation.navigate('ProductDetails', { product: item })
              }
            />
          )}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.listContainer}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    overflow: 'auto',
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default ProductListScreen;
