// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { Fonts } from '../style';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const API_URL_GET = 'https://kickers-backend-5e360941484b.herokuapp.com/api/player/getPlayersLeaderboard';
// const UserProfile = ({ name, image, isFollowing, onPressFollow }) => (
//   <View style={styles.userProfileContainer}>
//     <Image source={{ uri: image }} style={styles.profileImage} />
//     <View style={styles.userInfo}>
//       <Text style={styles.userName}>{name}</Text>
//       <TouchableOpacity
//         style={[styles.followButton, { backgroundColor: isFollowing ? '#408639' : 'transparent', borderBlockColor:'green' }]}
//         onPress={onPressFollow}
//         disabled={isFollowing}
//       >
//         <Text style={[styles.followButtonText, {color: isFollowing? 'white' : '#408639'}]}>{isFollowing ? 'Following' : 'Follow'}</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// );

// const UserProfileList = () => {
//   const [userList, setUserList] = useState([
//     { id: 1, name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg', isFollowing: false },
//     { id: 2, name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/2.jpg', isFollowing: true },
//     { id: 3, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 4, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 5, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 6, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 7, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 8, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 9, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 10, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 11, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 12, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 13, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 14, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 15, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     { id: 16, name: 'Bob Johnson', image: 'https://randomuser.me/api/portraits/men/3.jpg', isFollowing: false },
//     // Add more users as needed
//   ]);
// const [Name , setName] = useState()
// console.log('asdasd',Name)
//   const handleFollowToggle = (userId) => {
//     setUserList(prevList =>
//       prevList.map(user =>
//         user._id === userId ? { ...user, isFollowing: !user.isFollowing } : user
//       )
//     );
//   };
//   const fetchDataAndStore = async () => {
//     try {
//       const token = await AsyncStorage.getItem('accessToken');

//       if (token) {
//         const response = await fetch(API_URL_GET, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
         
//         });
//         // console.warn(token)
//         if (response.ok) {
//           const data = await response.json();
//           setName(data.data);
//           console.log("response",data.data)
//         } 
//         else {
//           console.error('Error fetching user data:', response.statusText);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching and storing user data:', error);
//     }
//   };
// useEffect(() => {
//   fetchDataAndStore();
// }, []);
//   return (
//     <View style={styles.mainContainerFollow}>

  
//     <FlatList
//       data={userList}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <UserProfile
//           name={item.name}
//           image={item.image}
//           isFollowing={item.isFollowing}
//           onPressFollow={() => handleFollowToggle(item.id)}
//         />
        
//       )}
//     />
//       </View>
//   );
// };

// const styles = StyleSheet.create({
//     mainContainerFollow:{
//         backgroundColor:'white',
//         paddingTop:10,
//         flex:1,
//         paddingHorizontal:15,
//     },
//   userProfileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//     borderTopWidth: 0.25,
//     borderBottomWidth: 0.25,
//     borderRightWidth: 0.25,
//     borderLeftWidth: 0.25,
//     backgroundColor:'rgba(64, 134, 57, 0.05)',
//     borderRadius:10,
//     borderColor:'rgba(0, 0, 0, 0.25)',
//     marginBottom:10
//   },
//   profileImage: {
//     width: 45,
//     height: 45,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   userInfo: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   userName: {
//     fontSize: 16,
//     fontFamily:Fonts.BOLD,
//     color:'#212121'
//   },
//   followButton: {
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     borderWidth:1,
//     borderColor:'green',
//     marginRight:10
    
//   },
//   followButtonText: {
//     fontFamily:Fonts.MEDIUM,
//   },
// });

// export default UserProfileList;
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts } from '../style';
import Skeleton from "@thevsstech/react-native-skeleton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const API_URL = 'https://kickers-backend-5e360941484b.herokuapp.com/api/player/getProfile';
const API_URL_GET = 'https://kickers-backend-5e360941484b.herokuapp.com/api/player/getPlayersLeaderboard';
const API_POST = 'https://kickers-backend-5e360941484b.herokuapp.com/api/player/followPlayer'
const UserProfile = ({ name, image, isFollowing, onPressFollow }) => (
  <View style={styles.userProfileContainer}>
    <Image source={{ uri: image }} style={styles.profileImage} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{name}</Text>
      <TouchableOpacity
        style={[styles.followButton, { backgroundColor: isFollowing ? '#408639' : 'transparent', borderBlockColor:'green' }]}
        onPress={onPressFollow}
        disabled={isFollowing}
      >
        <Text style={[styles.followButtonText, {color: isFollowing? 'white' : '#408639'}]}>{isFollowing ? 'Following' : 'Follow'}</Text>
      </TouchableOpacity>
    </View>
  </View>
);


const UserProfileList = () => {
  const [ID, setId] = useState('');
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const  userData={
    "playerId":ID
  }
  const fetchDataAndStoreIDGEt = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
  
      if (token) {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
         
        });
        // console.warn(token)
        if (response.ok) {
          const data = await response.json();
          setId(data.data._id);
        } 
        else {
          console.error('Error fetching user data:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error fetching and storing user data:', error);
    }
  };

  const fetchDataAndStore = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');

      if (token) {
        const response = await fetch(API_URL_GET, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserList(data.data); // Set API response data to userList
        } else {
          console.error('Error fetching user data:', response);
        }
      }
    } catch (error) {
      console.error('Error fetching and storing user data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };
  
  const handleFollowToggle = async (userId) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.post(API_POST, userData, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
  
      if (response.status === 200) {
        setUserList((prevList) =>
          prevList.map((user) =>
            user._id === userId ? { ...user, isFollowing: !user.isFollowing } : user
          )
        );
        console.log('Successfully followed/unfollowed user.',response.data);
      } else {
        console.log('Error following/unfollowing user:', response.data);
      }
    } catch (error) {
      console.error('Error following/unfollowing user:', error);
    }
  };
  useEffect(() => {
    fetchDataAndStore();
    fetchDataAndStoreIDGEt();
  }, []);

  return (
    <View style={styles.mainContainerFollow}>
      {loading ? (
        <FlatList
            data={[1, 2, 3, 4,5,6,7,8,9,10]} 
            renderItem={() => (
                <Skeleton
                    highlightColor={'rgba(64, 134, 57, 0.25)'} 
                    backgroundColor={'rgba(64, 134, 57, 0.05)'} 
                    borderRadius={'20'} 
                    visible={false}
                >
                    <View style={{ height: 50, borderRadius: 10, marginTop: 10 }} />
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent:'space-between', marginTop: 10 }}>
                      
                        {/* <View style={{ marginLeft: 20 }}>
                            <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                        </View> */}
                    </View>
                    {/* <View style={{ width: 120, height: 20, borderRadius: 4, marginTop: 5 }} />       */}
                </Skeleton>
            )}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        />
    ) :
      <FlatList
        data={userList} // Use API response data for FlatList data
        keyExtractor={(item) => item._id.toString()} // Assuming _id is unique identifier for each item
        renderItem={({ item }) => (
          <UserProfile
            name={item.name}
            
            image={item.avatar ? `https://kickers-backend-5e360941484b.herokuapp.com/${item.avatar}`: 'https://randomuser.me/api/portraits/men/1.jpg'} // Use item.avatarPath if available, else use default image URL
            isFollowing={item.isFollowing} // Assuming isFollowing is available in API response
            onPressFollow={() => handleFollowToggle(item._id)} // Assuming item._id is unique identifier for each item
          />
        )}
      />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerFollow:{
    backgroundColor:'white',
    paddingTop:10,
    flex:1,
    paddingHorizontal:15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
    borderRightWidth: 0.25,
    borderLeftWidth: 0.25,
    backgroundColor:'rgba(64, 134, 57, 0.05)',
    borderRadius:10,
    borderColor:'rgba(0, 0, 0, 0.25)',
    marginBottom:10
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 8,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontFamily:Fonts.BOLD,
    color:'#212121'
  },
  followButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'green',
    marginRight:10
    
  },
  followButtonText: {
    fontFamily:Fonts.MEDIUM,
  },
});

export default UserProfileList;
