import React from "react";
import { counterItems } from "../constants/index";
import CountUp from "react-countup";

const AnimatedCounter = () => {
	return (
		<div id="counter" className="padding-x-lg xl:mt-0 mt-32">
			<div className="mx-auto grid-4-cols">
				{counterItems.map((item, index) => (
					<div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
						<div
							key={index}
							className="counter-number text-white text-5xl font-bold mb-2"
						>
							<CountUp end={item.value} suffix={item.suffix} />
						</div>
						<div className="text-white-50 text-lg">{item.label}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnimatedCounter;
