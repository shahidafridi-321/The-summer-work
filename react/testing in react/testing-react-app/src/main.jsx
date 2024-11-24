import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PercentageStat } from "./PercentState.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div>
			<h1>Male Population</h1>
			<div>
				<PercentageStat label="Class 1" total={360} score={203} />
				<PercentageStat label="Class 2" total={206} />
				<PercentageStat label="Class 3" score={107} />
				<PercentageStat label="Class 4" />
			</div>
		</div>
		<div>
			<h1>Male Population</h1>
			<div>
				<PercentageStat label={8} total="0" score={203} />
				<PercentageStat label="Class 2" total={0} />
				<PercentageStat label="Class 3" score={(f) => f} />
				<PercentageStat label="Class 4" total={{}} score="0" />
			</div>
		</div>
	</StrictMode>
);
