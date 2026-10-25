/** Global attributes of every MathML Core element, beyond the shared HTML ones. */
export interface SlotMathmlGlobal {
	/** Display style (`true`) or inline style (`false`) for the subtree. */
	displaystyle?: boolean;
	/** Script level: absolute (`0`) or relative (`'+1'`, `'-1'`). */
	scriptlevel?: number | `+${number}` | `-${number}`;
	/** Text color (CSS color). */
	mathcolor?: string;
	/** Background color (CSS color). */
	mathbackground?: string;
	/** Font size (CSS length). */
	mathsize?: string;
}
