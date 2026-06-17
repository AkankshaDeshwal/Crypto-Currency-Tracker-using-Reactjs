const TextNumInfo = ({text, num, textSize, numSize}) => {
    return ( 
        <div className="flex flex-col gap-2 items-start">
                        <span className={textSize || "text-xs"}>{text}</span>
                        <h1 className={numSize || "text-sm"}>{num}</h1>
                    </div>
     );
}
 
export default TextNumInfo;