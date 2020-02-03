import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';

import isEmail from 'validator/lib/isEmail';
import LinearGradient from 'react-native-linear-gradient';
import {TextInputMask} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      telefone: '',
      phoneBR: '',
      email: '',
      senha: '',
      senhaConfirmacao: '',

      showNameErrorMsg: false,
      showEmailErrorMsg: false,
      showTelErrorMsg: false,
      showSenhaErrorMsg: false,
      showSenhaConfirmacaoErrorMsg: false,

      errorMailMsg: '',
      errorTelMsg: '',
      errorSenhaMsg: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <LinearGradient colors={['#D06600', '#E69A09']} style={styles.gradient}>
        <Icon
          name="chevron-left"
          size={40}
          color="#FFF"
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.backIcon}
        />
        <Text style={styles.title}>CADASTRO</Text>

        <View style={[styles.inputLabelContainer]}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            value={this.state.nome}
            onChangeText={value => this.setState({nome: value})}
            placeholder="Nome"
            style={styles.input}
          />
          {this.state.showNameErrorMsg && (
            <Text style={styles.errorMsg}>Campo nome é obrigatório</Text>
          )}
        </View>

        <View style={[styles.inputLabelContainer]}>
          <Text style={styles.label}>Telefone</Text>

          <TextInputMask
            style={styles.input}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            value={this.state.telefone}
            onChangeText={text => {
              this.setState({
                telefone: text,
              });
            }}
          />

          {this.state.showTelErrorMsg && (
            <Text style={styles.errorMsg}>{this.state.errorTelMsg}</Text>
          )}
        </View>

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
          {this.state.showSenhaErrorMsg && (
            <Text style={styles.errorMsg}>{this.state.errorSenhaMsg}</Text>
          )}
        </View>

        <View style={styles.inputLabelContainer}>
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput
            value={this.state.senhaConfirmacao}
            onChangeText={value => this.setState({senhaConfirmacao: value})}
            placeholder="*****"
            secureTextEntry
            style={styles.input}
          />
          {this.state.showSenhaConfirmacaoErrorMsg && (
            <Text style={styles.errorMsg}>Deve ser igual à senha digitada</Text>
          )}
        </View>

        <View style={styles.btnContainer}>
          <TouchableHighlight
            style={styles.btnConfirmar}
            onPress={() => this.handleCadastro()}>
            <Text style={styles.confirmarText}>Cadastrar</Text>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }

  handleCadastro() {
    const {nome, email, senha, telefone, senhaConfirmacao} = this.state;

    if (nome == '') {
      this.setState({showNameErrorMsg: true});
    } else {
      this.setState({showNameErrorMsg: false});
      this.validate();
    }

    if (email == '') {
      this.setState({
        showEmailErrorMsg: true,
        errorMailMsg: 'Campo de email é obrigatório',
      });
    } else if (!isEmail(email)) {
      this.setState({
        showEmailErrorMsg: true,
        errorMailMsg: 'Formato de e-mail invalido',
      });
    } else {
      this.setState({showEmailErrorMsg: false});
      this.validate();
    }

    if (telefone == '') {
      this.setState({
        showTelErrorMsg: true,
        errorTelMsg: 'Campo de Telefone é obrigatório',
      });
    } else if (telefone.length < 10) {
      this.setState({
        showTelErrorMsg: true,
        errorTelMsg: 'Dígitos insuficientes.',
      });
    } else {
      this.setState({showTelErrorMsg: false});
      this.validate();
    }

    if (senha == '') {
      this.setState({
        showSenhaErrorMsg: true,
        errorSenhaMsg: 'Campo de senha é obrigatório',
      });
    } else if (senha.length <= 6) {
      this.setState({
        showSenhaErrorMsg: true,
        errorSenhaMsg: 'Senha deve ter no mínino 7 caracteres',
      });
    } else if (senhaConfirmacao !== senha) {
      this.setState({showSenhaErrorMsg: false});
      this.setState({showSenhaConfirmacaoErrorMsg: true});
    } else {
      this.setState({showSenhaErrorMsg: false});
      this.setState({showSenhaConfirmacaoErrorMsg: false});
      this.validate();
    }
  }

  validate() {
    const {
      nome,
      email,
      senha,
      telefone,
      senhaConfirmacao,
      showNameErrorMsg,
      showTelErrorMsg,
      showEmailErrorMsg,
      showSenhaErrorMsg,
      showSenhaConfirmacaoErrorMsg,
    } = this.state;

    if (
      nome &&
      telefone &&
      email &&
      senha &&
      senhaConfirmacao &&
      !showNameErrorMsg &&
      !showTelErrorMsg &&
      !showEmailErrorMsg &&
      !showSenhaErrorMsg &&
      !showSenhaConfirmacaoErrorMsg
    )
      this.props.navigation.navigate('Main');
  }
}
