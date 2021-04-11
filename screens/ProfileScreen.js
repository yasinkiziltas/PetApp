import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'

export default function ProfileScreen({navigation}) {
    const { logout } = useContext(AuthContext)

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
          showsVerticalScrollIndicator={false}>
          <Image
            style={styles.userImg}
            source={{uri: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
          />
          <Text style={styles.userName}>User</Text>

          <View style={styles.userBtnWrapper}>

          <TouchableOpacity
                  style={styles.userBtn}
                  onPress={() => {
                    navigation.navigate('EditProfile');
                  }}>
                  <Text style={styles.userBtnTxt}>Edit</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                  <Text style={styles.userBtnTxt}>Logout</Text>
                </TouchableOpacity>
          </View>
  
      
  
          {/* {posts.map((item) => (
            <PostCard key={item.id} item={item} onDelete={handleDelete} />
          ))} */}
        </ScrollView>
      </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    userImg: {
      height: 150,
      width: 150,
      borderRadius: 75,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    aboutUser: {
      fontSize: 12,
      fontWeight: '600',
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
    },
    userBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 10,
    },
    userBtn: {
      borderColor: '#2e64e5',
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
    userBtnTxt: {
      color: '#2e64e5',
    },
    userInfoWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginVertical: 20,
    },
    userInfoItem: {
      justifyContent: 'center',
    },
    userInfoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center',
    },
    userInfoSubTitle: {
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
    },
  });