const Button = ({btnText, addStyles, onClickHandler, children}) => {
    return ( <button className={`outline-1 outline-bg-secondary px-2 md:px-4 py-1 rounded-xs cursor-pointer text-xs md:text-sm ${addStyles}`} onClick={onClickHandler}>{children} {btnText}</button> );
}
 
export default Button;