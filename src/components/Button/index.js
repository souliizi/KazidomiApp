import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Button as RNEButton} from 'react-native-elements';
import {styles} from './styles';
import {Theme, Components} from '../../styles/colors';

const {
  buttonStyle,
} = styles;

const Button = ({
  label,
  disabled,
  loading,
  onPress,
  containerStyle,
  type,
  color,
}) => {
  return (
    <RNEButton
      type={type}
      disabled={disabled}
      onPress={onPress}
      title={label}
      buttonStyle={buttonStyle}
      containerStyle={containerStyle}
      loading={loading}
      loadingStyle={{marginVertical: 7}}
      loadingProps={{color: Theme.PrimaryColor}}
    />
  );
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
  type: PropTypes.string,
};

Button.defaultProps = {
  label: 'SUBMIT',
  color: Components.Button,
  disabled: false,
  loading: false,
  onPress: () => {},
  containerStyle: {},
  type: 'solid',
};

export default Button;
