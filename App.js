import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import menuData from './menu.json';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {

  function HomepageScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <VerticalMenu navigation={navigation} />
      </View>
    )
  }

  function OfficeScreen() {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.whiteText}>Office</Text>
      </View>
    )
  }

  function KitchenScreen() {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.whiteText}>Kitchen</Text>
      </View>
    )
  }

  function BedroomScreen() {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.whiteText}>Bedroom</Text>
      </View>
    )
  }

  function VerticalMenu({ navigation }) {
    let menu_items = menuData.menu_items;

    return (
      <SafeAreaView>
        <View style={styles.vertical_menu}></View>
        <Text style={styles.menuItemText}>+</Text>
        {menu_items.map((element) => (
          <TouchableOpacity onPress={() => navigation.navigate(element.page)}>
            <Text style={styles.menuItemText}>{element.title}</Text>
          </TouchableOpacity>
        ))}

      </SafeAreaView>
    )
  }



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomepageScreen} />
        <Stack.Screen name="Office" options={{ headerStyle: { backgroundColor: 'black' }, headerTitleStyle: { color: 'white' } }} component={OfficeScreen} />
        <Stack.Screen name="Kitchen" options={{ headerStyle: { backgroundColor: 'black' }, headerTitleStyle: { color: 'white' } }} component={KitchenScreen} />
        <Stack.Screen name="Bedroom" options={{ headerStyle: { backgroundColor: 'black' }, headerTitleStyle: { color: 'white' } }} component={BedroomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  whiteText: {
    color: "white",
    fontSize: 30
  },
  containerCenter: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vertical_menu: {
    paddingLeft: 30,
    paddingTop: 100
  },
  menuItemText: {
    fontSize: 70,
    fontWeight: "300",
    color: "white"
  },
});
