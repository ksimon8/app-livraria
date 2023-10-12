import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, View, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login({navigation}) {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.topo}>
                <Image
                    style={styles.login}
                    source={require('../assets/imagens/login.png')}
                />
            </View>

            { /* TITULO DE LOGIN */}
            <Text style={styles.texto}>Login</Text>

            {/*  TEXTINPUT DE EMAIL */}
            <View style={styles.containerTextInput}>
                <MaterialIcons
                    name='email'
                    size={20}
                    color={'#666'}
                />
                <TextInput style={styles.textInput} placeholder='E-MAIL' keyboardType='email-address' />
            </View>

            <View style={styles.containerTextInput}>
                <MaterialIcons
                    name='form-textbox-password'
                    size={20}
                    color={'#666'}
                />
                <TextInput style={styles.textInput} placeholder='SENHA' secureTextEntry={true} />
            </View>

            {/* BOTÃO DE LOGIN */}
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>

            {/*LOGIN ALTERNATIVO (REDES SOCIAIS)*/}
            <Text style={styles.logarCom}>
                Logar com...
            </Text>

            <View style={styles.containerLoginCom}>
                <TouchableOpacity style={styles.btnLoginCom}>
                    <Image
                        source={require('../assets/imagens/google.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLoginCom}>
                    <Image
                        source={require('../assets/imagens/facebook.png')}
                    />
                </TouchableOpacity>
            </View>

    {/*CRIAÇÃO DE USUARIO*/}
    <View style={styles.containerLoginCom}>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('createUser')
        }

        }>

            <Text style={styles.botaoRegistro}>
                Criar conta
            </Text>
        </TouchableOpacity>
    </View>


        </SafeAreaView>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    },

    topo: {
        alignItems: 'center'
    },

    login: {
        width: 250
    },

    texto: {
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
        marginBottom: 30
    },

    containerTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },

    textInput: {
        padding: 10
    },

    btnLogin: {
        backgroundColor: '#3489EB',
        padding: 20,
        borderRadius: 10,
        margimBottom: 20
    },

    txtLogin: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#FFF'
    },

    logarCom: {
        textAlign: 'center',
        color: '#666',
        marginBottom: 20

    },
    containerLoginCom: {
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 20
    },

    btnLoginCom: {
        borderBottomColor: '#DDD',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginRigth: 10
    },

    botaoRegistro: {
        color: '#3480EB',
        fontWeight: '700'
    }
});