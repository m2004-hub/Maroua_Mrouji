

let books = ["1984", "Le Petit Prince", "L'Étranger"];
console.log("Initial books:", books);


books.push("Les Misérables");
console.log("After push:", books);


books.unshift("Harry Potter");
console.log("After unshift:", books);


books.pop();
console.log("After pop:", books);

// Supprimer le premier livre
books.shift();
console.log("After shift:", books);



console.log("\n=== Gestion des catégories ===");

let categories = new Set(["Fiction", "Science", "Histoire"]);
console.log("Initial categories:", Array.from(categories));


categories.add("Philosophie");
console.log("After add 'Philosophie':", Array.from(categories));


categories.add("Science");
console.log("After trying to add duplicate 'Science':", Array.from(categories));


categories.delete("Fiction");
console.log("After delete 'Fiction':", Array.from(categories));


console.log("\n=== Gestion des emprunts ===");

let borrows = new Map();


borrows.set("1984", "Alice");
borrows.set("L'Étranger", "Bob");
borrows.set("Le Petit Prince", "Charlie");
console.log("Initial borrows:", Array.from(borrows.entries()));


borrows.delete("1984");
console.log("After delete '1984':", Array.from(borrows.entries()));


console.log("Is 'L'Étranger' borrowed?", borrows.has("L'Étranger")); 
console.log("Is '1984' borrowed?", borrows.has("1984"));