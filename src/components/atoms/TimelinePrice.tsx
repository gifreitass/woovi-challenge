import { useStore } from "@/store/value"

const TimelinePrice = () => {
    const parcelPrice = useStore((state) => state.price.amount)

    return (
        <span className="text-[#4D4D4D] font-extrabold">R$ {parcelPrice}</span>
    )
}

export default TimelinePrice