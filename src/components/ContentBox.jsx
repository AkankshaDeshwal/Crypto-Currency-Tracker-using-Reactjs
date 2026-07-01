const ContentBox = ({children}) => {
    return ( 
        <div className="w-full md:w-1/5 outline-1 outline-muted bg-bg-secondary p-6 rounded-md">
            {children}
        </div>
     );
}
 
export default ContentBox;