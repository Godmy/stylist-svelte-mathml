import type { MATHML_FENCE } from '$stylist/mathml/const/record/mathml-fence';

/** Fence kind of a fenced expression (matrix, group). */
export type MathmlFence = keyof typeof MATHML_FENCE;
