import { Box } from "@mui/material"
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TimelineItem: React.FC<{ text: React.ReactNode, color: string, pixConfirmation?: boolean }> = (props) => {
    return (
        <Box className="flex gap-1">
            {props.pixConfirmation ?
                <CheckCircleIcon sx={{ color: props.color, width: '16px', zIndex: 10 }} /> : <PanoramaFishEyeIcon sx={{ color: props.color, width: '16px', zIndex: 10 }} />
            }
            {props.text}
        </Box>
    )
}

export default TimelineItem