import './Button.css';

export default function Button({text, disabled, ...props}) {
  return <button className={disabled ? 'disabled': undefined} disabled={disabled} {...props}>{text}</button>
}
