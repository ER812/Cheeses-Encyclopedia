# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.delete_all
Cheese.delete_all
User.delete_all

cheese1 = Cheese.create!({
name: "La Taupiniere",
region: "Poitou-Charentes",
origin: "Traditional, farmhouse, unpasteurized, natural-rind cheese",
source: "Goat’s milk",
description: "225-250g dome-shaped cheese",
culinary_uses: "Table cheese, grilling"
})

cheese2 = Cheese.create!({
name: "Mâconnais",
region: "Burgundy",
origin: "Traditional, farmhouse and co-operative, unpasteurized, natural-rind cheese",
source: "Cow’s and goat’s milk",
description: "50-60g truncated cone with natural, fine white to pale blue rind",
culinary_uses: "Table cheese, grilling, in salads"
})

cheese3 = Cheese.create!({
name: "Morbier",
region: "Franche-Comte",
origin: "Traditional, farmhouse and creamery, unpasteurized, semi-soft cheese",
source: "Cow’s milk",
description: "5-9kg wheel. The yellow brown or pale grey rind is thick, moist and leathery.",
culinary_uses: "Table cheese, snacks, grilling, slicing"
  
})

cheese4 = Cheese.create!({
name: "Raschera",
region: "Cuneo",
origin: "Traditional, farmhouse and co-operative, semi-soft cheese",
source: "Cow’s with sheep’s or goat’s milk",
description: "7-10kg round or square. The think reddish-yellow crust with white or grey moulds",
culinary_uses: "Table cheese, grilling"
})

cheese5 = Cheese.create!({
name: "Lancashire", 
region: "Lancashire",
origin: "Traditional, farmhouse and creamery, hard cheese",
source: "Cow’s milk",
description: "4-18kg clothbound cylinder. The hard, thin, natural rind is pale gold. It bears the marks of the cloth and has some grey-blue mold.",
culinary_uses: "Table cheese, snacks, grilling, grating, melting"
})

cheese6 = Cheese.create!({
name: "Wellington",
region: "Berkshire",
origin: "Modern, farmhouse, unpasteurized, vegetarian, hard cheese",
source: "Cow’s milk (Guernesy)",
description: "2kg round, the natural crusty rind has moulds in various shades of grey and brown.",
culinary_uses: "Table cheese, grating"
})

cheese7 = Cheese.create!({
name: "Pencarreg",
region: "Cardganshire",
origin: "Modern, farmhouse, organic, vegetarian, soft-white cheese",
source: "Cow’s milk (Ayrshire, Shorthorn, and Friesian)",
description: "200g oval or 1.8kg round, each with a thick, soft-white penicillium rind.", 
culinary_uses: "Table cheese"
})

cheese8 = Cheese.create!({
name: "Limburger",
region: "Various",
origin: "Traditional, creamery, washed-rind cheese",
source: "Cow’s milk",
description: "200-675g brick. The smooth sticky washed rind is reddish-brown, with corrugated ridges.",
culinary_uses: "Table cheese, grilling, melting"
})

cheese9 = Cheese.create!({
name: "Liptauer", 
region: "Hungary",
origin: "Traditional, farmhouse, and co-operative, unpasteurized, fresh cheese",
source: "Sheep’s or cow’s milk",
description: "Spiced, white cheese sold in pots",
culinary_uses: "local dishes"
})

cheese10 = Cheese.create!({
name: "Capriole Banon",
region: "Indiana",
origin: "Traditional, farmhouse, fresh cheese",
source: "Goat’s milk (Alpine)",
description: "180g disc wrapped in marinated chestnut leaves",
culinary_uses: "Table cheese"
})

user1= User.create!({
  username: "ER812",
  password: "Lamafarm1!"
})

comment1= Comment.create!({
notes: "mmmmmmm",
user_id: user1.id,
cheese_id: cheese1.id
})