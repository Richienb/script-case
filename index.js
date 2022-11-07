"use strict"

const mapString = require("map-string")

const superscript = require("./superscript.json")
const subscript = require("./subscript.json")

const convert = (input, dictionary) => {
	if (typeof input !== "string") throw new TypeError("`input` must be a string!")
	return mapString(input, (char) => dictionary[char] || char)
}

exports.superscript = (input) => convert(input, superscript)
exports.subscript = (input) => convert(input, subscript)
