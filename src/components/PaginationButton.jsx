const PaginationButton = ({currentPage, onClickHandler, disableButton, children}) => {
    return ( 
        <button disabled={disableButton} onClick={onClickHandler} className="text-foreground bg-bg-secondary p-2 cursor-pointer rounded-sm hover:bg-bg-primary disabled:bg-gray-400 disabled:cursor-not-allowed ">
                {children}
            </button>
     );
}
 
export default PaginationButton;