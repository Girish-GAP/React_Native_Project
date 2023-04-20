import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
} from 'react-native';
import {Box, Flex} from '@react-native-material/core';
import {Divider} from '@react-native-material/core';
import {Stack, Button} from '@react-native-material/core';

const imageSource = require('./src/assets/images/Welcomebanner.png');

const App = () => {
  return (
    <Box>
      <ImageBackground
        style={style.image}
        source={imageSource}
        resizeMode="contain">
        <Box style={style.Container}>
          <Box style={style.textContainer}>
            <Text style={style.heading}>Welcome!</Text>
            <Text style={style.subheading}>Login with your Phone Number</Text>
          </Box>
        </Box>
      </ImageBackground>

      <Box style={style.Container2}>
        <Text style={style.text}>Phone Number</Text>
        <TextInput
          style={style.input}
          // onChangeText={onChangeText}
          placeholder="Please enter your phone number"
          value={''}
        />
        <Button
          style={[style.button, {marginTop: 30}]}
          color="#1CA7B1"
          tintColor="white"
          title="Send OTP"
          uppercase={false}
          titleStyle = {{fontSize : 16, fontWeight : 'bold', marginTop : 10}}
        />

        <Box style={style.orContainer}>
          <Divider style={style.divider} trailingInset={16} color="#9D9D9D" />
          <Text style={{color: '#9D9D9D'}}>Or Sign in With</Text>
          <Divider style={style.divider} leadingInset={16} color="#9D9D9D" />
        </Box>

        <Button
          style={[style.button, {marginTop: 2}]}
          color="#1CA7B1"
          tintColor="white"
          title="Sign in with Google"
          uppercase={false}
          titleStyle = {{fontSize : 16, fontWeight : 'bold', marginTop : 10}}
        />
        <Button
          style={[style.button, {marginTop: 15}]}
          color="#1CA7B1"
          tintColor="white"
          title="Sign in with Facebook"
          uppercase={false}
          titleStyle = {{fontSize : 16, fontWeight : 'bold', marginTop : 10}}
        />
      </Box>
    </Box>
  );
};

const style = StyleSheet.create({
  image: {
    width: '100%',
  },
  Container: {
    height: 321,
  },
  textContainer: {
    marginTop: 60,
    marginLeft: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  subheading: {
    fontSize: 15,
    color: 'white',
  },
  Container2: {
    // height : '100%',
    margin: 20,
  },

  text: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    margin: 5,
  },

  input: {
    height: 50,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#1CA7B1',
  },

  orContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: '32%',
    marginTop: 35,
    marginBottom: 34,
  },

  button: {
    height: 48,
    alignItems : 'center'
  },
});

export default App;
