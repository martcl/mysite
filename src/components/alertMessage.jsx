import React from 'react'

import { Layer, Box, Text, Button } from "grommet";
import { FormClose } from "grommet-icons";


class Toast extends React.Component {
  componentDidMount() {
    this.startAutoHideTimeout()
  }

  componentWillUnmount() {
    const { timeoutAutoHide } = this
    if (timeoutAutoHide) {
      clearTimeout(this.timeoutAutoHide)
    }
  }

  startAutoHideTimeout() {
    const { duration, onClose } = this.props
    if (duration) {
      this.timeoutAutoHide = setTimeout(() => {
        onClose()
      }, duration * 1000)
    }
  }

  render() {
    const { children, modal, position, full, ...rest } = this.props
    return (
      <Layer
        position={position || 'top'}
        full={full}
        modal={false}
        margin="none"
        responsive
        plain={modal ? false : true}
        {...rest}
      >
        {children}
      </Layer>
    )
  }
}


function AlertMessage ({ message, color, onClose, pos }) {
  return(
    <Toast
      margin="small"
      position={pos}
      responsive={false}
      onClose={onClose}
      duration={6}
    >
      <Box
        direction="row"
        justify="between"
        align="center"
        elevation="small"
        pad={{ vertical: `medium`, horizontal: `medium` }}
        background={color}
        width="medium"
        gap="small"
      >
        <Text size="medium">{message}</Text>
        <Button plain icon={<FormClose />} onClick={onClose} />
      </Box>
    </Toast>
  )};
  
export default AlertMessage