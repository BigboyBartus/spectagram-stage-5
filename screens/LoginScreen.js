import React from "react";
import{Text,View, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import Firebase from 'firebase'

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={email:'',password:'',userSignedIn:false}

    }
    render(){
        return(
            <View>
                <TextInput
                placeholder={'enter email'}
                placeholderTextColor={'black'}
                autoFocus
                onChangeText={text=>this.setState({email:text})}
                />
                    
                    <TextInput
                placeholder={'enter password'}
                placeholderTextColor={'black'}
                autoFocus
                onChangeText={text=>this.setState({password:text})}
                />
                <TouchableOpacity>
                <Text>
                    Submit
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('registerScreen')}>
                    <Text>
                        Register User
                    </Text>
                </TouchableOpacity>
            


            </View>
        )
    }
}