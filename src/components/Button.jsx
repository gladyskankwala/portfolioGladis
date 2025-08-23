

function Button({title, id, containerClass}) {
    return(
        <button id={id} className={`flex items-center gap-2 px-4 py-2 rounded-md ${containerClass}`}>
            <span className="relative incline-flex overflow-hidden
            font-general text-xs uppercase">
                <div>{title}</div>
            </span>
        </button>
    )

}

export default Button