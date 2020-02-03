import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    fontSize: 16,
  },
  inputLabelContainer: {
    alignSelf: 'stretch',
    marginTop: 10,
  },
  label: {
    marginLeft: 22,
    marginBottom: 2,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: "Roboto"
  },
  title: {
    color: '#FFF',
    fontSize: 40,
    position: 'absolute',
    top: 80,
    fontFamily: "Roboto"
  },
  LinkContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  LinkPassword: {
    marginRight: 22,
    color: '#FFF',
    marginTop: 5,
    fontSize: 14,
    fontFamily: "Roboto"
  },
  btnContainer: {
    padding: 5,
    margin: 5,
    marginHorizontal: 'auto',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: 200,
  },
  btnConfirmar: {
    backgroundColor: '#f78d23',
    margin: 5,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  btnCadastro: {
    marginTop: 5,
    padding: 5,
    height: 40,
  },
  confirmarText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: "Roboto"
  },
  linkCadastro: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: "Roboto"
  },
  errorMsg: {
    marginLeft: 25,
    fontStyle: 'italic',
    color: '#cc2525',
    fontWeight: 'bold',
    fontFamily: "Roboto"
  },
  backIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 20,
  },
});

export default styles;
