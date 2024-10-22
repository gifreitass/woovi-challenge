const PaymentTitle: React.FC<{ title: string }> = (props) => {
    return (
        <span className="bg-[#E5E5E5] font-extrabold pt-0.5 px-5 rounded-full absolute left-4 top-[-12px] text-[#4D4D4D]">{props.title}</span>
    )
}

export default PaymentTitle