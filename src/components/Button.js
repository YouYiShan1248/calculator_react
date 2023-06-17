import PropTypes from 'prop-types'
import '../style/Button.css'
export default function Button(props) {
  const className = `component-button ${props.orange ? 'orange' : ''} ${
    props.wide ? 'wide' : ''
  } ${props.dark ? 'dark' : ''}`
  return (
    <div className={className}>
      <button onClick={() => props.clickHandler(props.name)}>
        {props.name}
      </button>
    </div>
  )
}
Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  dark: PropTypes.bool
}
