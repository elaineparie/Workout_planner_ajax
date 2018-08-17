class WorkoutsController < ApplicationController
  #before_action :set_workout, only: [:show, :edit, :update, :destroy, :index]


    def index
      @workouts = Workout.all
    end

    def show
    end

    def new
      @workout = Workout.new
    end

    def edit
    end

    def create
      @workout = Workout.new(workout_params)
        if @workout.save
          redirect_to workout_path(@workout)
        else
          render :new
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
