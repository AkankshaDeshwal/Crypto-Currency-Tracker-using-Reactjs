const ContentBox = ({children}) => {
    return ( 
        <div className="w-1/4 outline-1 outline-muted bg-bg-secondary p-6 rounded-md">
            {children}
        </div>
     );
}
 
export default ContentBox;