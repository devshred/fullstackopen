const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }

  var notificationStyle = {
    color: 'gray',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if(type === "info"){
    notificationStyle = { ...notificationStyle, color: 'green'}
  } else if(type === "error"){
    notificationStyle = { ...notificationStyle, color: 'red'}
  } else {
    console.log("unknown type of notification ", type)
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification