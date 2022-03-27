import React from 'react'
import { Spinner, Square } from "@chakra-ui/react"

export const View3DSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
    />
)

const View3DContainer = React.forwardRef(({ children, ...rest }: any, ref: any) => {
    return (
        <Square
            ref={ref}
            position='relative'
            {...rest}
        >
            {children}
        </Square>
    )
})
View3DContainer.displayName = "View3DContainer";


const Loader = () => {
    return (
        <View3DContainer>
        </View3DContainer>
    )
}

export { View3DContainer }
export default Loader
