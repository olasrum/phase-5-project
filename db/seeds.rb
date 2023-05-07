# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Item.destroy_all
Review.destroy_all

puts "🌱 Seeding spices..."

#create users
puts 'Seeding users..'

user1 = User.create!(username: 'feathers', password: '123')
user2 = User.create!(username: 'blackbird', password: '456')
user3 = User.create!(username: 'songbird', password: '789')
user4 = User.create!(username: 'beaky', password: '321')
user5 = User.create!(username: 'wings', password: '654')

# create items
puts 'Seeding items..'

item1 = Item.create(name: 'Zen house' , description: 'Birds will love the calming vibe of this birdhouse', image: 'https://images.pexels.com/photos/2925015/pexels-photo-2925015.jpeg?auto=compress&cs=tinysrgb&w=800', price: 50, amount: 1)
item2 = Item.create(name: 'Love nest' , description: 'For all the love birds out there', image: 'https://images.pexels.com/photos/14352624/pexels-photo-14352624.jpeg?auto=compress&cs=tinysrgb&w=800', price: 40, amount: 1)
item3 = Item.create(name: 'Suburban dream' , description: "Ideal for those birds who like living in the 'burbs", image: 'https://images.pexels.com/photos/7965255/pexels-photo-7965255.jpeg?auto=compress&cs=tinysrgb&w=800', price: 65, amount: 1)
item4 = Item.create(name: 'Farmers delight' , description: 'Beautiful barn style birdhouse for the country birds', image: 'https://images.pexels.com/photos/8811511/pexels-photo-8811511.jpeg?auto=compress&cs=tinysrgb&w=800', price: 60, amount: 1)
item5 = Item.create(name: 'Fairytale castle' , description: 'Birds will live happily ever after in this birdhouse', image: 'https://images.pexels.com/photos/14988378/pexels-photo-14988378.jpeg?auto=compress&cs=tinysrgb&w=800', price: 45, amount: 1)
item6 = Item.create(name: 'Magic garden' , description: 'This birdhouse oozes magical forest charm', image: 'https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?auto=compress&cs=tinysrgb&w=800', price: 55, amount: 1)
item7 = Item.create(name: 'Scandanavian chic' , description: 'If you love Ikea you will love this birdhouse', image: 'https://images.pexels.com/photos/2604668/pexels-photo-2604668.jpeg?auto=compress&cs=tinysrgb&w=800', price: 35, amount: 1)
item8 = Item.create(name: 'Parish house' , description: 'Perfect birdhouse for the church going birds', image: 'https://images.pexels.com/photos/15493499/pexels-photo-15493499.png?auto=compress&cs=tinysrgb&w=800', price: 45, amount: 1)
item9 = Item.create(name: 'Vintage delight' , description: 'A quirky retreat for the more retro birds', image: 'https://images.pexels.com/photos/11589651/pexels-photo-11589651.jpeg?auto=compress&cs=tinysrgb&w=800', price: 40, amount: 1)
item10 = Item.create(name: 'Keep it simple' , description: 'Simple design for the no fuss birds', image: 'https://images.pexels.com/photos/1359565/pexels-photo-1359565.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20, amount: 1)
item11 = Item.create(name: 'Log cabin' , description: 'Bring a touch of rustic charm to the backyard with a log cabin birdhouse', image: 'https://images.pexels.com/photos/774283/pexels-photo-774283.jpeg?auto=compress&cs=tinysrgb&w=800', price: 55, amount: 1)
item12 = Item.create(name: 'Double story' , description: "Two level birdhouse for birds who like the extra space to spread their wings", image: 'https://images.pexels.com/photos/7104280/pexels-photo-7104280.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20, amount: 1)
item13 = Item.create(name: 'Cardinal cottage' , description: 'Add a pop of color to the backyard with this charming red birdhouse', image: 'https://images.pexels.com/photos/14719224/pexels-photo-14719224.jpeg?auto=compress&cs=tinysrgb&w=800', price: 35, amount: 1)
item14 = Item.create(name: 'Cape Cod' , description: 'Bring some coastal charm to the backyard with this Cape Cod-inspired birdhouse', image: 'https://images.freeimages.com/images/previews/508/cape-cod-for-the-birds-1378208.jpg', price: 65, amount: 1)
item15 = Item.create(name: 'Surfs up' , description: 'Bring some beachy vibes to the backyard with this retro caravan birdhouse', image: 'https://images.unsplash.com/photo-1532704384331-d96a9862ec11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJpcmRob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', price: 60, amount: 1)
item16 = Item.create(name: 'White picket fence' , description: 'Charming green cottage birdhouse with a white picket fence', image: 'https://images.unsplash.com/photo-1655232491124-3850a4b74d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxiaXJkaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', price: 45, amount: 1)
item17 = Item.create(name: 'Spoilt for choice' , description: 'Add some variety to the backyard with this triple story birdhouse', image: 'https://images.unsplash.com/photo-1656343668367-ec95098b01fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxiaXJkaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', price: 65, amount: 1)
item18 = Item.create(name: 'Little yellow cottage' , description: 'Bring sunshine and style to the backyard with this cute yellow birdhouse featuring a green door', image: 'https://media.istockphoto.com/id/144228860/photo/birdsnest-with-bird-feeding.jpg?s=612x612&w=0&k=20&c=DVfVA0y9reNhmselOy1PcaSOhqK13hf26D3U7M2mdms=', price: 40, amount: 1)
item19 = Item.create(name: 'Minty fresh' , description: 'Freshen up the backyard with this delightful mint green birdhouse', image: 'https://media.istockphoto.com/id/614492376/photo/birdhouses-background.jpg?s=612x612&w=0&k=20&c=IkwNleO1ABSnx5_txkwQih3Q1gSmlTB9Ezj6mwqYLis=', price: 30, amount: 1)
item20 = Item.create(name: 'Love is in the air' , description: 'Invite love and romance into the garden with this adorable baby pink birdhouse', image: 'https://media.istockphoto.com/id/1323322027/photo/wooden-bird-house-on-blossoming-tree-outdoors.jpg?s=612x612&w=0&k=20&c=rmWR_NgsT8Lp__0rUpRh21Z7THQpq2x9dDHT4_7uKps=', price: 30, amount: 1)



#create reviews

puts 'Seeding reviews..'

Review.create(comment: 'Peaceful paradise', user_id: user1.id, item_id: item1.id)
Review.create(comment: 'Too noisy', user_id: user1.id, item_id: item1.id)
Review.create(comment: 'Cosy couple retreat', user_id: user2.id, item_id: item2.id)
Review.create(comment: 'Love this!', user_id: user2.id, item_id: item2.id)
Review.create(comment: 'Perfect for the family', user_id: user1.id, item_id: item3.id)
Review.create(comment: 'Nice but not quite for me', user_id: user1.id, item_id: item3.id)
Review.create(comment: 'Great space', user_id: user3.id, item_id: item4.id)
Review.create(comment: 'Perfect abode for country living', user_id: user3.id, item_id: item4.id)
Review.create(comment: 'The birds love their fairytale castle', user_id: user4.id, item_id: item5.id)
Review.create(comment: 'Love the big windows', user_id: user4.id, item_id: item5.id)
Review.create(comment: 'Fits in great with the forest surroundings', user_id: user5.id, item_id: item6.id)
Review.create(comment: 'The stairs are my favourite', user_id: user5.id, item_id: item6.id)
Review.create(comment: 'Clean, minimal and stylish', user_id: user1.id, item_id: item7.id)
Review.create(comment: 'Not a fan of the metal cage look', user_id: user1.id, item_id: item7.id)
Review.create(comment: 'Just heavenly', user_id: user2.id, item_id: item8.id)
Review.create(comment: 'I feel blessed having a birdhouse so nice', user_id: user2.id, item_id: item8.id)
Review.create(comment: 'All metal, gets too hot!', user_id: user3.id, item_id: item9.id)
Review.create(comment: 'Absolutely love love this', user_id: user4.id, item_id: item9.id)
Review.create(comment: 'Nice and traditional nothing more needed', user_id: user5.id, item_id: item10.id)
Review.create(comment: 'Functional but a bit bland', user_id: user3.id, item_id: item10.id)
Review.create(comment: 'Winter delight!', user_id: user1.id, item_id: item11.id)
Review.create(comment: 'Too cute', user_id: user1.id, item_id: item11.id)
Review.create(comment: 'Twice as nice', user_id: user2.id, item_id: item12.id)
Review.create(comment: 'Great!', user_id: user2.id, item_id: item12.id)
Review.create(comment: 'The pop of red looks great and the birds love it', user_id: user1.id, item_id: item13.id)
Review.create(comment: 'Just okay', user_id: user1.id, item_id: item13.id)
Review.create(comment: 'Looks so pretty in the backyard', user_id: user3.id, item_id: item14.id)
Review.create(comment: 'Very coastal and the birds are loving it', user_id: user3.id, item_id: item14.id)
Review.create(comment: 'Retro glamping fun for the birds', user_id: user4.id, item_id: item15.id)
Review.create(comment: 'The blue looks great in the garden', user_id: user4.id, item_id: item15.id)
Review.create(comment: 'Just too cute', user_id: user5.id, item_id: item16.id)
Review.create(comment: 'Love the picket fence', user_id: user5.id, item_id: item16.id)
Review.create(comment: "The best birdhouse I've ever had", user_id: user1.id, item_id: item17.id)
Review.create(comment: 'Thought I would like this better but not a fan', user_id: user1.id, item_id: item17.id)
Review.create(comment: 'Brings some sunshine to the garden', user_id: user2.id, item_id: item18.id)
Review.create(comment: 'The green door is my favourite bit', user_id: user2.id, item_id: item18.id)
Review.create(comment: "The green get's lost in the garden", user_id: user3.id, item_id: item19.id)
Review.create(comment: 'So fresh!', user_id: user4.id, item_id: item19.id)
Review.create(comment: 'Absolutely adorable', user_id: user5.id, item_id: item20.id)
Review.create(comment: 'Pink is my favourite colour', user_id: user3.id, item_id: item20.id)

#create orders

puts 'Seeding orders..'

Order.create(
    user_id: user1.id,
    order_number: 15639846,
    cart_items_attributes: [
      {
        item_id: item20.id,
        quantity: 1,
        user: User.find(user1.id)
      }
    ],
    first_name: "lulu",
    last_name: "henry",
    address: "1 long road",
    city: "longtown",
    state: "qld",
    postcode: "4444"
  )
  


puts "✅ Done seeding!"