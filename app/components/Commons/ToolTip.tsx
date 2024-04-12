const ToolTip = ({ title, position }: { title: string; position?: string;}) => {
    return (
        <span className={`absolute left-[50%] -translate-x-[50%] bottom-[100%] text-[12px] min-w-[70px] bg-[rgb(var(--btn-bg))] text-[rgb(var(--btn-text))] px-2 py-1 rounded transition-all duration-500 opacity-0 invisible group-hover:bottom-[calc(100%+10px)] group-hover:opacity-100 group-hover:visible after:absolute after:top-[calc(100%-3px)] after:left-[50%] after:-translate-x-[50%] after:border-8 after:border-t-[rgb(var(--btn-bg))] after:border-r-transparent after:border-b-transparent after:border-l-transparent`}>
            {title}
        </span>
    );
}
 
export default ToolTip;