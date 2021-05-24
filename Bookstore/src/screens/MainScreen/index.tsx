import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Buy Again',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Whish List',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Account',
  },
  {
    id: 'd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Catagories',
  },
  {
    id: 'ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Apple Pay',
  },
  {
    id: '8694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Deals',
  },
  {
    id: 'bacbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Coupons',
  },
  {
    id: '38afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Featured items',
  },
  {
    id: '594a0f-3da1-471f-bd96-145571e29d72',
    title: 'Popular now-days',
  },
  {
    id: 'dacbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Security',
  },
  {
    id: 'ac8afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'View Documentation',
  },
  {
    id: '864a0f-3da1-471f-bd96-145571e29d72',
    title: 'Features',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.aa}>Check all orders -></Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
  aa: {
    fontSize: 28,
    marginLeft: 15,
    marginBottom: 30,
  },
});

export default App;
