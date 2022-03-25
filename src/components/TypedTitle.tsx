import { Box, useBoolean } from '@chakra-ui/react';
import React from 'react'

const TypedTitle = ({titleText} : {titleText:string}) => {
    const [blink, setBlink] = useBoolean(true)
    const [text, setText] = React.useState("")

    React.useEffect(() => {
        // Interval for cursor blinker
        const blinkOnOff = setInterval(setBlink.toggle, 500)

        // Function to "type" the message in a slow, natural manner
        const slowType = (str:string, currText:string = "", currIdx:number = 0) => {
            if (currIdx == str.length) return
            currText += str[currIdx]
            setText(currText)
            setTimeout(() => { slowType(str, currText, currIdx + 1); }, 125 + (Math.random() - .5)*50)
        }

        // Delay start of typing message
        setTimeout(() => { slowType(titleText); }, 1500)

        return () => {
            clearInterval(blinkOnOff)
            setText("")
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box as="span" 
        minW={5} 
        whiteSpace='nowrap' 
        w={400} 
        overflow='hidden'
        flexGrow={1}
        >
            {'>'} {text}{blink && '_'}
        </Box>
    )
}

export default TypedTitle
