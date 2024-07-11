import { Box } from "@mui/material"

const Price: React.FC<{ number: number, price: string, text: React.ReactNode }> = (props) => {
    return (
        <>
            {props.price === '30.500,00' ?
                <Box className="flex flex-col">
                    <p className="text-xl font-semibold text-[#4D4D4D]"><span className="font-extrabold">{props.number}x </span>R$ {props.price}</p>
                    {props.text}
                </Box> :
                <Box className="flex flex-col">
                    <p className="text-xl font-semibold text-[#4D4D4D]"><span className="font-extrabold">{props.number}x </span>R$ {props.price}</p>
                    <span className="text-sm text-[#AFAFAF]">{props.text}</span>
                </Box>
            }
        </>
    )
}

export default Price