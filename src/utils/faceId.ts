import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

rnBiometrics
  .simplePrompt({promptMessage: 'Authenticate with Face ID'})
  .then(result => {
    const {success} = result;
    if (success) {
      console.log('Successfully authenticated with Face ID');
    } else {
      console.log('User cancelled Face ID authentication');
    }
  })
  .catch(() => {
    console.log('Face ID authentication failed');
  });
