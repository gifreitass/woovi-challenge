import { Box } from "@mui/material"
import SquareFlag from "../atoms/SquareFlag"

const Flag: React.FC<{ text: React.ReactNode }> = (props) => {
    return (
        <Box className="bg-[#133A6F] mx-5 px-2 py-1 rounded-md mt-1 relative">
            {props.text}
            <SquareFlag />
        </Box>
    )
}

export default Flag