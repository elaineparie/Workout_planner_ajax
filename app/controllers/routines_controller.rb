class RoutinesController < ApplicationController

  def new
    @routine = Routine.new
    @exercises = Exercise.all
  end
end
