const Button = ({btnText, active, onClickHandler}) => {
    return ( <button className={`outline-1 outline-bg-secondary px-4 py-1 rounded-xs cursor-pointer  ${active}`} onClick={onClickHandler}>{btnText}</button> );
}
 
export default Button;