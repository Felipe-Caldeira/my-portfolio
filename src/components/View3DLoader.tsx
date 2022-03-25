import React from 'react'
import { Box, Square } from "@chakra-ui/react"

const View3DContainer = React.forwardRef(( {children, ...rest} :any, ref:any ) => {
    return (
        <Square
            ref={ref}
            {...rest}
        >
            { children }
        </Square>
    )
})


const Loader = function() {
    return (
        <View3DContainer>
        </View3DContainer>
    )
  }

export { View3DContainer }
export default Loader
