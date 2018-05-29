import React from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import CustomButton from '../../components/common/CustomButton';
import CustomInput from '../../components/common/CustomInput';
import { validations, login } from '../../utils/constraints';
import styles from './styles';

const LoginForm = ({
  handleSubmit, error, submitting, signIn
}) => {
  return (
    <View>
      <Field
        name="email"
        inputLabel="Email"
        inputType="email"
        component={CustomInput}
      />
      <Field
        name="password"
        inputLabel="Password"
        inputType="password"
        component={CustomInput}
      />
      <CustomButton
        title="SIGN IN" type="default"
        onPress={handleSubmit(signIn)} disabled={submitting}
      />
      {error && <Text style={styles.loginError}>{error}</Text>}
    </View>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'logIn',
  validate: validations(login)
})(LoginForm);
