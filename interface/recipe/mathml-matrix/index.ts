import type { RecipeMathmlFormula } from '$stylist/mathml/interface/recipe/mathml-formula';
import type { MathmlFence } from '$stylist/mathml/type/alias/mathml-fence';

/** Matrix: rows of numbers or symbols in fences, drawn as a formula. */
export interface RecipeMathmlMatrix extends Omit<RecipeMathmlFormula, 'nodes' | 'children'> {
	/** Cells by row; numbers become `mn`, letters `mi`, signs `mo`. */
	rows: (string | number)[][];
	/** Fences around the table. */
	fence?: MathmlFence;
}
