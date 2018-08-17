class WorkoutsController < ApplicationController
  #before_action :set_workout, only: [:show, :edit, :update, :destroy, :index]

  def index
    @workouts = Workout.all
    binding.pry
  end

  def create
  end

  def new
  end

  def show
  end
end

private
#def set_workout
#  @workout = Workout.find(params[:id])
#end

def workout_params
  params.require(:workout).permit(
    :name,
    :type,
    :points
  )
end
