import React from 'react'

const CoinItem = (props) => {
    const {
			name,
			current_price,
			market_cap_change_percentage_24h,
			image,
			symbol,
		} = props;
    
	const market_cap_change_percentage_24h_toString = `${market_cap_change_percentage_24h}`;

  return (
		<>
			<div
				className="w-full h-auto py-4 px-6 flex justify-between"
				data-tracker={name}>
				<div className="flex items-center gap-4">
					<div className=" h-8 w-8 ">
						<img className="object-contain" src={image} alt="coinimg " />
					</div>
					<div>
						<div>{name}</div>
						<div>{symbol}</div>
					</div>
				</div>

				<div className={`flex flex-col items-end`}>
					<div>{` ${current_price}`}</div>

					<div
						className={
							market_cap_change_percentage_24h_toString.slice(0, 1) === "-"
								? ` text-red-500`
								: ` text-green-500`
						}>
						{market_cap_change_percentage_24h_toString.slice(0, 1) === "-"
							? ` ${market_cap_change_percentage_24h_toString} %`
							: `${"+".concat(market_cap_change_percentage_24h_toString)} %`}
					</div>
				</div>
			</div>
		</>
	);
}

export default CoinItem