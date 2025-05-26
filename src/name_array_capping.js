// Create a function that accepts an array of names, and returns an array 
// of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

export default function capMe(names) {
  var lowercaseNames = names.map(name => name.toLowerCase());
  return lowercaseNames.map(name => name.charAt(0).toUpperCase() + name.slice(1))
}