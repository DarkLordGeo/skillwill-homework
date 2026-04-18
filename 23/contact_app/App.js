import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Switch, FlatList, StatusBar } from 'react-native';

export default function App() {


  const [searchKeyWord, setSearchKeyword] = useState("")

  const updateSearchKeyword = (e) => {
    setSearchKeyword(e)
  }

  console.log('search keyword: ', searchKeyWord)

  const data = [
    {
      title: 'angela',
    },
    {
      title: 'bob',
    },
    {
      title: 'sarah',
    },
  ];

  const searchFilter = data.map((item) => item).filter((name) => name.title.toLowerCase().includes(searchKeyWord.toLowerCase()))

  // console.log(data.map((item) => item).filter((name) => name.title.toLowerCase().includes(searchKeyWord.toLowerCase())))
  console.log(searchFilter)



  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>Contacts</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateSearchKeyword}
      />
      <View>
        <FlatList data={searchFilter} style={{ padding: 10, marginBottom: 10, width: 300 ,height:100}} renderItem={
          ({ title }) => {
            return (
              <>
                <Text style={{ color: "black", padding: 20 , width:200, height:50}}>{title}</Text>
              </>
            )
          }
        } />

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000'

  }, input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})


