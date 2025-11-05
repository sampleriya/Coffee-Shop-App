import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const coffeeImage = require('../assets/images/coffee.jpg');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Icon - Top Right */}
      <TouchableOpacity style={styles.profileIcon}>
        <Text style={styles.profileText}>Login/SignUp</Text>
      </TouchableOpacity>

      {/* Scrollable Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Coffee Image at Top */}
        <Image 
          source={coffeeImage}
          style={styles.coffeeImage}
        />

        {/* Welcome Text Below Image */}
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to Coffee Shop</Text>
          <Text style={styles.subText}>Your perfect cup awaits!</Text>
        </View>

        {/* Horizontal Slider with Cards */}
        <Text style={styles.sectionTitle}>Popular Coffees</Text>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        >
          {/* Card 1 */}
          <View style={styles.card}>
            <View style={styles.cardImagePlaceholder}>
              {/* <Text style={styles.cardEmoji}>☕</Text> */}
               <Image 
          source={require("../assets/images/espresso.jpg")}
          style={styles.cardEmoji}
          resizeMode='cover'
        />
            </View>
            <Text style={styles.cardTitle}>Espresso</Text>
            <Text style={styles.cardPrice}>$3.99</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add +</Text>
            </TouchableOpacity>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <View style={styles.cardImagePlaceholder}>
             {/* // <Text style={styles.cardEmoji}>🥤</Text> */}
               <Image 
          source={require("../assets/images/cappuccino.jpg")}
          style={styles.cardEmoji}
          resizeMode='cover'
        />
            </View>
            <Text style={styles.cardTitle}>Cappuccino</Text>
            <Text style={styles.cardPrice}>$4.49</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add +</Text>
            </TouchableOpacity>
          </View>

          {/* Card 3 */}
          <View style={styles.card}>
            <View style={styles.cardImagePlaceholder}>
              {/* <Text style={styles.cardEmoji}>🍵</Text> */}
                <Image 
          source={require("../assets/images/latte.jpg")}
          style={styles.cardEmoji}
          resizeMode='cover'
        />
            </View>
            <Text style={styles.cardTitle}>Latte</Text>
            <Text style={styles.cardPrice}>$4.99</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add +</Text>
            </TouchableOpacity>
          </View>

          {/* Card 4 */}
          <View style={styles.card}>
            <View style={styles.cardImagePlaceholder}>
              {/* <Text style={styles.cardEmoji}>🧋</Text> */}
                <Image 
          source={require("../assets/images/mocha.jpg")}
          style={styles.cardEmoji}
          resizeMode='cover'
        />
            </View>
            <Text style={styles.cardTitle}>Mocha</Text>
            <Text style={styles.cardPrice}>$5.49</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add +</Text>
            </TouchableOpacity>
          </View>

          {/* Card 5 */}
          <View style={styles.card}>
            <View style={styles.cardImagePlaceholder}>
              {/* <Text style={styles.cardEmoji}>🥛</Text> */}
                <Image 
          source={require("../assets/images/americano.jpg")}
          style={styles.cardEmoji}
          resizeMode='cover'
        />
            </View>
            <Text style={styles.cardTitle}>Americano</Text>
            <Text style={styles.cardPrice}>$3.49</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add +</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </ScrollView>

      {/* Bottom Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#322420',
  },
  profileIcon: {
    position: 'absolute',
    top: -40,
    right: 0,
  
   fontSize:5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  //color:'#1c59f3ff',
  },
  profileText: {
    fontSize: 13,
  color:'#2d1d21ff',

  },
  coffeeImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textContainer: {
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: '#FFCCBC',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 20,
    marginBottom: 15,
  },
  slider: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  card: {
    width: 150,
    backgroundColor: '#dfd3cdff',
    borderRadius: 15,
    padding: 7,
    marginRight: 15,
    alignItems: 'center',
  },
  cardImagePlaceholder: {
  width: 110,              // ← Image se thoda bada
  height: 110,             // ← Image se thoda bada
  backgroundColor: '#413531ff',
  borderRadius: 55,        // ← Half of width
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
  overflow:'hidden',
},
cardEmoji: {
  width: 110,              // Placeholder se chhota
  height: 110,
  borderRadius: 50,
  //overflow: 'hidden',      // ← Important: corners properly round
},
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#573434ff',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 13,
    color: '#b04829ff',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#35312eff',
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 15,
  },
  addButtonText: {
    color: '#dbccccff',
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#efe3daff',
    paddingVertical: 10,
    marginHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 50,
    marginTop:-10,
  },
  orderButtonText: {
    color: '#2a1818ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});