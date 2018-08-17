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

def make_members
  DATA[:members].each do |member|
    new_member = Member.new
    member.each_with_index do |attribute, i|
      new_member.send(DATA[:member_keys][i]+"=", attribute)
    end
    new_member.save
  end
end

def make_exercises_and_workouts
  DATA[:exercises].each do |exercise|
    new_exercise = Exercise.new
    exercise.each_with_index do |attribute, i|
      new_exercise.send(DATA[:exercise_keys][i] + "=", attribute)
    end
    rand(1..8).times do
      members = []
      Member.all.each {|u| members << u}
      new_exercise.members << members[rand(0...members.length)]
    end
    new_exercise.members.each {|c| c.save}
    new_exercise.save
  end
end

main
