let name = "My name is Fahim Fahim Sarker";

// 1. indexOf()
console.log(name.indexOf("Fahim"));
// Output: 11

// 2. lastIndexOf()
console.log(name.lastIndexOf("Fahim"));
// Output: 17

// 3. includes()
console.log(name.includes("Sarker"));
// Output: true

// 4. startsWith()
console.log(name.startsWith("My"));
// Output: true

// 5. endsWith()
console.log(name.endsWith("Sarker"));
// Output: true

// 6. length
console.log(name.length);

// 7. toUpperCase()
console.log(name.toUpperCase());

// 8. toLowerCase()
console.log(name.toLowerCase());

// 9. slice()
console.log(name.slice(11, 16));
// Output: Fahim

// 10. replace()
console.log(name.replace("Fahim", "Frontend"));
// Replaces only the first occurrence

// 11. replaceAll()
console.log(name.replaceAll("Fahim", "Developer"));

// 12. split()
console.log(name.split(" "));

// 13. charAt()
console.log(name.charAt(0));

// 14. repeat()
console.log("Fahim ".repeat(3));
