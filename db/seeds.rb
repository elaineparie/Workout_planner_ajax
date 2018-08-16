# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

DATA = {
  :member_keys =>
    ["name", "email", "password"],
  :members => [
    ["Elaine Anderson", "eparie@bu.edu", "hithere"],
    ["Gabbi Gilbert", "imgabbi@yahoo.com", "password"],
    ["Mackenzie Kinnon", "immackenzie@gmail.com", "password"],
    ["Rebecca Tinkham", "imrebecca@hotmail.com", "password"],
  ],
  :exercise_keys =>
   ["name", "type", "points"],
  :exercises => [
    ["Run 20 mins", "cardio", 10],
    ["3 sets of squats", "lower body", 15],
    ["push ups", "upper body", 10],
    ["Jumping Jacks", "cardio", 8],
    ["Crunches", "abs", 7]
  ]
}

def main
  make_members
  make_exercises_and_workouts
end

def make_users
  DATA[:users].each do |user|
    new_user = User.new
    user.each_with_index do |attribute, i|
      new_user.send(DATA[:user_keys][i]+"=", attribute)
    end
    new_user.save
  end
end

def make_admin
  DATA[:admins].each do |name|
    User.create(name: name, admin: true, password: 'password')
  end
end

def make_attractions_and_rides
  DATA[:attractions].each do |attraction|
    new_attraction = Attraction.new
    attraction.each_with_index do |attribute, i|
      new_attraction.send(DATA[:attraction_keys][i] + "=", attribute)
    end
    rand(1..8).times do
      customers = []
      User.all.each {|u| customers << u if u.admin != true}
      new_attraction.users << customers[rand(0...customers.length)]
    end
    new_attraction.users.each {|c| c.save}
    new_attraction.save
  end
end

main
