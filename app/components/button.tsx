import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    size: 'big' | 'small';
    icon?: boolean;
    inverted?: boolean;
}
const Button: React.FC<ButtonProps> = ({onClick, children, size, icon=false, inverted=false}) => {
    let additionalClass;
    if(!icon){
        if(size === 'big'){
            additionalClass = 'px-6 py-3 text-lg'
        } else {
            additionalClass = 'px-4 py-2 text-base'
        }
    } else {
        additionalClass = 'p-2 text-base'
    }

    let invertStyle;
    if(!inverted){
        invertStyle = 'border-foreground/70 hover:bg-foreground/100 hover:text-background/100 hover:border-background/100';
    } else {
        invertStyle = 'border-background/70 hover:bg-background/100 hover:text-foreground/100 hover:border-foreground/100';
    }
    
    return(
        <button className={`bg-transparent rounded-lg border flex justify-center items-center gap-2
            transition-colors duration-150
            ${additionalClass}
            ${invertStyle}
            
        `}
        onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;