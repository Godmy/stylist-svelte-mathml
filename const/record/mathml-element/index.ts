/**
 * MathML Core elements inside `<math>` (the root itself belongs to html: HtmlMath).
 * `content`: `token` — character data only; `empty` — no children; `row` — any
 * number of children inferred as one row; `fixed` — exactly `arity` children;
 * `scripts` — base and script pairs; `table`/`table-row` — mtr/mtd children only;
 * `semantics` — presentation child followed by annotations; `annotation` — text;
 * `annotation-xml` — markup. Sources: MDN MathML element reference.
 */
export const MATHML_ELEMENT = {
	mi: { description: 'Identifier', content: 'token', arity: 0, level: 'token' },
	mn: { description: 'Numeric literal', content: 'token', arity: 0, level: 'token' },
	mo: {
		description: 'Operator, fence, separator or accent',
		content: 'token',
		arity: 0,
		level: 'token'
	},
	ms: { description: 'String literal', content: 'token', arity: 0, level: 'token' },
	mtext: { description: 'Text', content: 'token', arity: 0, level: 'token' },
	mspace: { description: 'Space', content: 'empty', arity: 0, level: 'token' },
	mrow: { description: 'Horizontal group', content: 'row', arity: 0, level: 'layout' },
	mfrac: { description: 'Fraction', content: 'fixed', arity: 2, level: 'layout' },
	msqrt: { description: 'Square root', content: 'row', arity: 0, level: 'layout' },
	mroot: { description: 'Root with index', content: 'fixed', arity: 2, level: 'layout' },
	mstyle: { description: 'Style change', content: 'row', arity: 0, level: 'layout' },
	merror: { description: 'Error message', content: 'row', arity: 0, level: 'layout' },
	mpadded: { description: 'Adjusted space', content: 'row', arity: 0, level: 'layout' },
	mphantom: { description: 'Invisible content', content: 'row', arity: 0, level: 'layout' },
	msub: { description: 'Subscript', content: 'fixed', arity: 2, level: 'script' },
	msup: { description: 'Superscript', content: 'fixed', arity: 2, level: 'script' },
	msubsup: {
		description: 'Subscript and superscript',
		content: 'fixed',
		arity: 3,
		level: 'script'
	},
	munder: { description: 'Underscript', content: 'fixed', arity: 2, level: 'script' },
	mover: { description: 'Overscript', content: 'fixed', arity: 2, level: 'script' },
	munderover: {
		description: 'Underscript and overscript',
		content: 'fixed',
		arity: 3,
		level: 'script'
	},
	mmultiscripts: {
		description: 'Prescripts and tensor indices',
		content: 'scripts',
		arity: 0,
		level: 'script'
	},
	mprescripts: { description: 'Prescripts separator', content: 'empty', arity: 0, level: 'script' },
	mtable: { description: 'Table or matrix', content: 'table', arity: 0, level: 'table' },
	mtr: { description: 'Table row', content: 'table-row', arity: 0, level: 'table' },
	mtd: { description: 'Table cell', content: 'row', arity: 0, level: 'table' },
	semantics: {
		description: 'Semantic annotations',
		content: 'semantics',
		arity: 0,
		level: 'semantics'
	},
	annotation: {
		description: 'Text annotation',
		content: 'annotation',
		arity: 0,
		level: 'semantics'
	},
	'annotation-xml': {
		description: 'XML annotation',
		content: 'annotation-xml',
		arity: 0,
		level: 'semantics'
	},
	maction: {
		description: 'Legacy action, renders its first child',
		content: 'row',
		arity: 0,
		level: 'semantics'
	}
} as const;
