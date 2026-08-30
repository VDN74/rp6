import "./button.css"

const Button = ({children, use, disabled, handler}) => {
  return <button className={`btn btn_${use}`} disabled={disabled} onClick={handler}>{children}</button>;
};

export default Button;

// class Button {
// 	constructor({text, use, disabled, handler}) {
//     this._text = text;
//   }

// 	_getTemplate() {
// 		return `<button>${this._text}</button>`
// 	}

//   _addListeners() {
//     this._element.addEventListener("click", () => {})
//   }
// }
