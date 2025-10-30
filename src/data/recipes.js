const recipes = [
  {
    id: 'r1',
    title: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.',
    difficulty: 'Medium',
    prepTime: '15 min',
    cookTime: '20 min',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Pecorino Romano', 'Black Pepper'],
    instructions: [
      'Cook spaghetti according to package directions.',
      'Crisp pancetta in a pan; remove and drain.',
      'Whisk eggs with grated Pecorino Romano and black pepper.',
      'Combine hot spaghetti with egg mixture, adding pancetta. Toss quickly to prevent scrambling.',
      'Serve immediately, garnished with more cheese and pepper.'
    ]
  },
  {
    id: 'r2',
    title: 'Chicken Stir-fry',
    description: 'Quick and healthy Asian-inspired stir-fry with chicken and vegetables.',
    difficulty: 'Easy',
    prepTime: '20 min',
    cookTime: '15 min',
    ingredients: ['Chicken breast', 'Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce', 'Ginger', 'Garlic'],
    instructions: [
      'Slice chicken into thin strips.',
      'Chop all vegetables.',
      'Heat oil in a wok or large pan.',
      'Stir-fry chicken until cooked through; remove from pan.',
      'Add vegetables and stir-fry until tender-crisp.',
      'Return chicken to pan, add soy sauce, ginger, and garlic. Toss to combine.',
      'Serve with rice.'
    ]
  },
  {
    id: 'r3',
    title: 'Vegetable Lasagna',
    description: 'Hearty and cheesy lasagna layered with fresh vegetables and rich tomato sauce.',
    difficulty: 'Hard',
    prepTime: '45 min',
    cookTime: '60 min',
    ingredients: ['Lasagna noodles', 'Ricotta cheese', 'Spinach', 'Zucchini', 'Marinara sauce', 'Mozzarella', 'Parmesan'],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Cook lasagna noodles al dente.',
      'Sauté spinach and zucchini.',
      'Mix ricotta with Parmesan.',
      'Layer sauce, noodles, ricotta mixture, vegetables, and mozzarella in a baking dish.',
      'Repeat layers, finishing with sauce and mozzarella.',
      'Bake for 45-50 minutes, then uncover and bake for another 10 minutes until bubbly and golden.'
    ]
  },
  {
    id: 'r4',
    title: 'Tomato Soup',
    description: 'Simple and comforting homemade tomato soup, perfect with grilled cheese.',
    difficulty: 'Easy',
    prepTime: '10 min',
    cookTime: '30 min',
    ingredients: ['Canned crushed tomatoes', 'Vegetable broth', 'Onion', 'Garlic', 'Basil', 'Cream (optional)'],
    instructions: [
      'Sauté onion and garlic in a pot.',
      'Add crushed tomatoes, vegetable broth, and basil.',
      'Bring to a simmer and cook for 20-25 minutes.',
      'Blend with an immersion blender until smooth (or use a regular blender, carefully).',
      'Stir in cream if desired. Season with salt and pepper.',
      'Serve hot.'
    ]
  },
  {
    id: 'r5',
    title: 'Beef Tacos',
    description: 'Classic beef tacos with seasoned ground beef and your favorite toppings.',
    difficulty: 'Medium',
    prepTime: '15 min',
    cookTime: '20 min',
    ingredients: ['Ground beef', 'Taco seasoning', 'Taco shells', 'Lettuce', 'Tomato', 'Cheese', 'Sour cream'],
    instructions: [
      'Brown ground beef in a skillet; drain fat.',
      'Stir in taco seasoning and water; simmer according to package directions.',
      'Warm taco shells.',
      'Fill shells with seasoned beef and your desired toppings.',
      'Serve immediately.'
    ]
  }
];

export default recipes;