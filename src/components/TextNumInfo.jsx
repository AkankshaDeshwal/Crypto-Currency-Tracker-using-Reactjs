const TextNumInfo = ({text, num}) => {
    return ( 
        <div className="flex flex-col gap-2 items-start">
                        <span className="text-xs">{text}</span>
                        <h1 className="text-sm">{num}</h1>
                    </div>
     );
}
 
export default TextNumInfo;