import { useEffect } from "react";

import { captureFirstTouchAttribution } from "#/lib/attribution.ts";

export function FirstTouchCapture() {
	useEffect(() => {
		captureFirstTouchAttribution();
	}, []);

	return null;
}
