import React from 'react'
interface IInputLoginProps {
label: string
value: string
type?: string


onPressEnter?: () => void
onChange: (newValue: string) => void

}
export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>( (props, ref) => {
    return(
        <>
         <label>
                <span>{props.label}</span>
                <input 
                ref={ref}
                type={props.type}
                value={props.value} 
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key ==='Enter'
                 ? props.onPressEnter && props.onPressEnter() : undefined}
                
                />
            </label>
        </>
    )
});