import { Box } from "@mui/material"
import TimelineItem from "../molecules/TimelineItem"
import { useStore } from "@/store/value"
import TimelinePrice from "../atoms/TimelinePrice"

const TimelineBox: React.FC<{ pixConfirmation?: boolean }> = (props) => {
    const parcelNumber = useStore((state) => state.price.parcelNumber)
    const arrayNumber = Array.from({ length: parcelNumber }, (_, index) => index + 1)

    return (
        <Box className="flex justify-between w-[80%] mt-3 pb-3 border-b-2 border-b-[#E5E5E5]">
            <Box className="flex flex-col relative gap-2">
                {arrayNumber.map((key, index) => {
                    if (index === 0) {
                        return <>
                            <TimelineItem pixConfirmation={props.pixConfirmation} color="#03D69D" text={<span className="font-semibold text-[#4D4D4D]">{key}ª entrada no Pix </span>} />
                            <Box className="w-[2px] h-5 bg-[#E5E5E5] absolute top-[18px] left-[7px]" />
                        </>
                    }
                    return <>
                        <TimelineItem color="#E5E5E5" text={<span className="font-semibold text-[#4D4D4D]">{key}ª entrada no cartão </span>} />
                    </>
                })}
            </Box>
            <Box className="flex flex-col gap-2">
                {arrayNumber.map((key, index) => {
                    return <TimelinePrice />
                })}
            </Box>
        </Box>
    )
}

export default TimelineBox