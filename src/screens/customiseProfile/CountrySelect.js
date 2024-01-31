// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

// const CountryList = () => {
 
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all?fields=name,flags')
//       .then((response) => response.json())
//       .then((data) => {
//         setCountries(data);
//         setFilteredCountries(data);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.countryItem, selectedCountry === item && styles.selectedCountry]}
//       onPress={() => handleCountrySelect(item)}
//     >
//       <Image style={styles.flag} source={{ uri: item.flags.png }} />
//       <Text>{item.name.common}</Text>
//     </TouchableOpacity>
//   );

//   const handleCountrySelect = (country) => {
  
//     setSelectedCountry(country);
//   };

//   const handleSearch = (text) => {
//     setSearchText(text);
//     const filtered = (countries || []).filter(
//       (country) =>
//         country.name?.common?.toLowerCase().includes(text.toLowerCase()) ||
//         country.cca2?.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredCountries(filtered);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search for a country"
//         value={searchText}
//         onChangeText={handleSearch}
//       />
//       <FlatList
//       style={{color:'black'}}
//         data={filteredCountries}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.cca3}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   searchBar: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   countryItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   selectedCountry: {
//     backgroundColor: '#e0e0e0', // Highlight color for selected country
//   },
//   flag: {
//     width: 30,
//     height: 20,
//     marginRight: 10,
//   },
// });

// export default CountryList;




