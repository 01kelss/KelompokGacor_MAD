import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  Exterior,
  Lengkap,
  Mesin,
  Nano,
  Homelogo,
  Salju,
  Poles,
} from '../../assets/icon';
import {Gap} from '../../components';

const Service = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/Logo/Homebg2.png')}
      style={styles.background}>
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.searchContainer}>
          {/* <Text style={styles.headerText}></Text> */}
          <Gap height={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#000"
          />
        </View>
        {/* <Gap height={58}/>
        <Text style={styles.categoryText}></Text> */}
        <Gap height={36} />
        <View style={styles.drinkContainer}>
          <View style={styles.drinkItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
              <Image source={Exterior} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Cuci Exterior</Text>
            <Text style={styles.drinkText}>Rp. 30.000</Text>
          </View>
          <View style={styles.drinkItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
              <Image source={Salju} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Cuci Salju</Text>
            <Text style={styles.drinkText}>Rp. 60.000</Text>
          </View>
          <View style={styles.drinkItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
              <Image source={Lengkap} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Cuci Lengkap</Text>
            <Text style={styles.drinkText}>Rp. 50.000</Text>
          </View>
          <View style={styles.drinkItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
              <Image source={Poles} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Poles Mobil</Text>
            <Text style={styles.drinkText}>Rp. 200.000</Text>
          </View>
          <View style={styles.drinkItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
              <Image source={Nano} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Nano Coating</Text>
            <Text style={styles.drinkText}>Rp. 1.000.000</Text>
          </View>
          <View style={styles.drinkItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
              <Image source={Mesin} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Cuci Mesin</Text>
            <Text style={styles.drinkText}>Rp. 100.000</Text>
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.footer}>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.footerButton}>
              <Homelogo width={-20} />
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </ImageBackground>
  );
};

export default Service;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  scrollViewContainer: {
    paddingBottom: 60,
  },
  searchContainer: {
    paddingHorizontal: 56,
    paddingVertical: 20,
  },
  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'RubikBubbles-Regular',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    // paddingHorizontal: 56,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    paddingVertical: 9,
  },
  categoryText: {
    color: '#000',
    fontSize: 40,
    fontWeight: '900',
    marginHorizontal: 16,
    marginVertical: 16,
    textAlign: 'center',
    fontFamily: 'RubikBubbles-Regular',
  },
  drinkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  drinkItem: {
    alignItems: 'center',
    marginBottom: 16,
    width: '50%',
  },
  drinkImage: {
    width: 140,
    height: 140,
    marginBottom: 8,
    borderRadius: 20,
  },
  drinkText: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 100,
    right: 100,
    backgroundColor: '#eef3fc',
    borderTopWidth: 1,
    borderTopColor: '#ffff',
    elevation: 10,
    borderRadius: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
  },
  footerButton: {
    paddingHorizontal: 10,
  },
  addText: {
    fontSize: 14,
  },
});