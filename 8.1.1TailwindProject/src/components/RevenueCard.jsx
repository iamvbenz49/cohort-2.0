

export const RevenueCard = ({
    title,
    amount,
    orders,
    selected,
    days
}) => {
    return (
        <div className="bg-white rounded shadow-sm">
            <div>
                {title} ?
            </div>
            <div className="flex justify-between">
                <h1>`Rs. {amount}`</h1>
                <h1>`{orders} orders`</h1>
            </div>
            <div>
                    <h1>
                        {seleted?"":`Next Payment Date`}    
                    </h1>

                    <h1>
                        {day}
                    </h1>
            </div>    
        </div>
    )
}