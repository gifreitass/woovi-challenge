import { Radio } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const RadioInput: React.FC<{ value: number, number: number }> = (props) => {
    return (
        <Radio checkedIcon={<CheckCircleIcon sx={{ color: '#03D69D' }} />} checked={props.value === props.number} sx={{ color: "#E5E5E5", '& .MuiSvgIcon-root': { fontSize: 28 }, bottom: '10px', right: '-10px' }} />
    )
}

export default RadioInput