import React from "react";
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/89706085?v=4';
const urlGithub = 'https://github.com/DanielSilvaMonteiro';

const App = () =>{
 
    const handlePressGotoGithub = async () =>{
      console.log('verificando link');
      const res = await Linking.canOpenURL(urlGithub);
      if (res) {
      console.log('Link Aprovado');
      console.log('Abrindo link');
        await Linking.openURL(urlGithub);
      }
    };

    return (
  <SafeAreaView style={style.container}>
    <StatusBar backgroundColor = {colorGithub} barStyle = "dark" />
    <View style={style.content}>
        <Image 
        accessibilityLabel="Daniel fundo branco" 
        style ={style.avatar} 
        source={{uri: imageProfileGithub }}
        />
    <Text 
    accessibilityLabel="Nome Daniel SIlva Monteiro" 
    style={[style.defaultText, style.name]}>
        Daniel Monteiro
    </Text>
    <Text 
    accessibilityLabel="Nickname Daniel Silva Monteiro" 
    style={[style.defaultText, style.nickname]}>
        DanielSilvaMonteiro
    </Text>
    <Text accessibilityLabel="Descriçao HTML5 | CSS3 | JavaScript | Java | Análise e Desenvolvimento de Sistemas | Dio Campus Expert"
     style={[style.defaultText, style.description]}>
        HTML5 | CSS3 | JavaScript | Java | Análise e Desenvolvimento de Sistemas | Dio Campus Expert
    </Text>

    <Pressable onPress={handlePressGotoGithub}>
    <View style={style.button}>
        <Text style={[style.defaultText , style.textButton]}>Open in Github</Text>
    </View>
    </Pressable>

    </View>
  </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { //column
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela toda
        justifyContent: 'center',
        alignItems: 'center',
        //flexDirection: 'row',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },
    
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'lightblue',
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithub,        
    },

    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },

    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,        
    },

    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,        
    },

});