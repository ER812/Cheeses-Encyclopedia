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

user1= User.create!({
  username: "ER812",
  password: "Lamafarm1!"
})

comment1= Comment.create!({
notes: "mmmmmmm",
user_id: user1.id,
cheese_id: cheese1.id
})