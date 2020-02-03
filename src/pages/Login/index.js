import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import isEmail from 'validator/lib/isEmail';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',

      errorMailMsg: '',
      errorPassMsg: '',
      showEmailErrorMsg: false,
      showPasswordErrorMsg: false,
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <LinearGradient colors={['#D06600', '#E69A09']} style={styles.gradient}>
        <Icon
          name="x"
          size={40}
          color="#FFF"
          onPress={() => this.props.navigation.navigate('Main')}
          style={styles.backIcon}
        />
        <Text style={styles.title}>LOGIN</Text>

        <View style={[styles.inputLabelContainer]}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={this.state.email}
            onChangeText={value => this.setState({email: value})}
            placeholder="email@email.com"
            style={styles.input}
          />
          {this.state.showEmailErrorMsg && (
            <Text style={styles.errorMsg}>{this.state.errorMailMsg}</Text>
          )}
        </View>

        <View style={styles.inputLabelContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            value={this.state.senha}
            onChangeText={value => this.setState({senha: value})}
            placeholder="*****"
            secureTextEntry
            style={styles.input}
          />
          {this.state.showPasswordErrorMsg && (
            <Text style={styles.errorMsg}>{this.state.errorPassMsg}</Text>
          )}
        </View>

        <TouchableHighlight style={styles.LinkContainer}>
          <Text style={styles.LinkPassword}>ESQUECI MINHA SENHA</Text>
        </TouchableHighlight>

        <View style={styles.btnContainer}>
          <TouchableHighlight
            onPress={() => this.handleConfirmar()}
            style={styles.btnConfirmar}>
            <Text style={styles.confirmarText}>CONFIRMAR</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Cadastro')}
            style={styles.btnCadastro}>
            <Text style={styles.linkCadastro}>ME CADASTRAR</Text>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }

  handleConfirmar() {
    const {email, senha, showEmailErrorMsg, showPasswordErrorMsg} = this.state;

    if (email == '') {
      this.setState({
        showEmailErrorMsg: true,
        errorMailMsg: 'Campo de Email é obrigatorio',
      });
    } else if (!isEmail(email)) {
      this.setState({
        showEmailErrorMsg: true,
        errorMailMsg: 'Formato de e-mail invalido',
      });
    } else {
      this.setState({showEmailErrorMsg: false});
    }

    if (senha == '') {
      this.setState({
        showPasswordErrorMsg: true,
        errorPassMsg: 'Campo de Senha é obrigatorio',
      });
    } else if (senha.length < 7) {
      this.setState({
        showPasswordErrorMsg: true,
        errorPassMsg: 'Senha deve ter no mínino 7 caracteres',
      });
    } else {
      this.setState({showPasswordErrorMsg: false});
    }

    if (email && senha && !showEmailErrorMsg && !showPasswordErrorMsg)
      this.props.navigation.navigate('Main');
  }
}
