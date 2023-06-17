import Button from './Button'
import '../style/ButtonBox.css'
export default function ButtonBox(props) {
  return (
    <div className="component-button-panel">
      <div>
        <Button name="AC" dark clickHandler={props.clickHandler} />
        <Button name="+/-" dark clickHandler={props.clickHandler} />
        <Button name="%" dark clickHandler={props.clickHandler} />
        <Button name="÷" orange clickHandler={props.clickHandler} />
      </div>
      <div>
        <Button name="7" clickHandler={props.clickHandler} />
        <Button name="8" clickHandler={props.clickHandler} />
        <Button name="9" clickHandler={props.clickHandler} />
        <Button name="×" orange clickHandler={props.clickHandler} />
      </div>
      <div>
        <Button name="4" clickHandler={props.clickHandler} />
        <Button name="5" clickHandler={props.clickHandler} />
        <Button name="6" clickHandler={props.clickHandler} />
        <Button name="-" orange clickHandler={props.clickHandler} />
      </div>
      <div>
        <Button name="1" clickHandler={props.clickHandler} />
        <Button name="2" clickHandler={props.clickHandler} />
        <Button name="3" clickHandler={props.clickHandler} />
        <Button name="+" orange clickHandler={props.clickHandler} />
      </div>
      <div>
        <Button name="0" wide clickHandler={props.clickHandler} />
        <Button name="." clickHandler={props.clickHandler} />
        <Button name="=" orange clickHandler={props.clickHandler} />
      </div>
    </div>
  )
}
