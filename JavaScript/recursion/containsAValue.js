var nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: "foo2",
					},
				},
			},
		},
	},
};
function contains(obj, value) {
	for (let nestedObj of Object.values(obj)) {
		if (nestedObj === value) {
			return true;
		}
		if (typeof nestedObj === "object") {
			return contains(nestedObj, value);
		}
	}
	return false;
}
console.log(contains(nestedObject, 44));


function contains(object, searchValue) {
  if (typeof object !== "object" || object === null) {
    return object === searchValue;
  }
  for (const value of Object.values(object)) {
    if (contains(value, searchValue)) {
      return true;
    }
  }
  return false;
}