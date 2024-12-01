import styles from './Button.module.css'
function Button(props) {
    const {text,icon,isSecondry,...rest} = props
  return (
    <div>
        <button {...rest} className={isSecondry ? styles.Secondry_btn : styles.Primery_btn}>{icon}{text}</button>
    </div>
  )
}

export default Button