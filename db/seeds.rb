# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


    members = Member.create([{ name:"Elaine Anderson", email: 'eparie@bu.edu', password: 'password' }, { name:"Gab Gilbert", email: 'imgab@yahoo.com', password: 'password' }, { name:"Mack Kinnon", email: 'immackenzie@gmail.com', password: 'password' }])
    Routine.create
    ["Gabbi Gilbert", "imgabbi@yahoo.com", "password"],
    ["Mackenzie Kinnon", "immackenzie@gmail.com", "password"],
    ["Rebecca Tinkham", "imrebecca@hotmail.com", "password"],
  ],
  :exercise_keys =>
   ["name", "kind", "points"],
  :exercises => [
    ["Run 20 mins", "cardio", 10],
    ["3 sets of squats", "lower body", 15],
    ["push ups", "upper body", 10],
    ["Jumping Jacks", "cardio", 8],
    ["Crunches", "abs", 7]
  ],

  :workout_keys =>
   ["name", "points"],
  :workouts => [
    ["Morning workout", 60],
    ["Light day", 30],
    ["upper body", 40],
    ["lower body", 80]
  ]
}

def main
  make_members
  make_exercises_and_workouts
  make_workouts
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

def make_workouts
  DATA[:workouts].each do |workout|
    new_workout = Workout.new
    workout.each_with_index do |attribute, i|
    new_workout.send(DATA[:workout_keys][i]+"=", attribute)
    end
    new_workout.save
  end
end



main
