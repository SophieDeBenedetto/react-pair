import React from 'react'

const modes = ["ruby", "javascript"]

const ModeSelect = (props) => {
  function triggerChangeMode(e) {
    debugger;
    props.changeMode(e.target.value)
  }

  function renderModeSelect() {
    return ["ruby", "javascript"].map(mode => {
      if (mode == props.mode) {
        return <option value={mode} selected>{mode}</option>
      } else {
        return <option value={mode}>{mode}</option>
      }
    })
  }
  return (
    <select onChange={triggerChangeMode}>
      {renderModeSelect()}
    </select>
  )
}

export default ModeSelect