const test = require("ava")
const scriptCase = require(".")

test("main", (t) => {
	t.is(scriptCase.superscript("hello world"), "ʰᵉˡˡᵒ ʷᵒʳˡᵈ")
	t.is(scriptCase.subscript("hello world"), "ₕₑₗₗₒ wₒᵣₗd")
})
