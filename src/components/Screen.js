import PropTyes from 'prop-types'
import '../style/Screen.css'
export default function Screen(props) {
  return (
    <div className="component-display">
      <div>{props.value}</div>
    </div>
  )
}
Screen.propTypes = { value: PropTyes.string }
