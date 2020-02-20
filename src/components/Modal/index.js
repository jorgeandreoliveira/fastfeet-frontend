import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, ModalBoxSetup, ModalBg } from './styles';
/*
visible: boolean,
dismiss: function on click on Close.
*/
export default class ModalSetup extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    dismiss: PropTypes.func.isRequired,
  };

  render() {
    const { visible, dismiss, children, client } = this.props;
    return (
      <>
        {visible ? (
          <ModalWrapper>
            <ModalBoxSetup width={client}>{children} </ModalBoxSetup>
            <ModalBg onClick={dismiss} />
          </ModalWrapper>
        ) : null}
      </>
    );
  }
}
