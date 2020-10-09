// import React, { useState } from 'react';
import React, { Component } from 'react';
import Modal from 'react-modal';

const WithModal = props => WrappedComponent => {
  class WithModal extends Component {
    constructor() {
      super();
      this.state = {
        modalIsOpen: false
      }
      this.setModalIsOpen = this.setModalIsOpen.bind(this)
    }

    setModalIsOpen(bool) {
      this.setState( () => ({ modalIsOpen: bool }) )
    }

    render() {
      const { modalIsOpen } = this.state;
      return (
        <Modal isOpen = {modalIsOpen} onRequestCLose = {() => setModalIsOpen(flase)}>
          {props.children}
        </Modal>
      )
    }
  }
}



// (
//   const [ modalIsOpen, setModalIsOpen ] = useState(false)
//   return (
//     <Modal isOpen = {modalIsOpen} onRequestCLose = {() => setModalIsOpen(flase)}>
//       {props.children}
//     </Modal>
//   )
// );

export default WithModal;