class RoutinesController < ApplicationController
before_action :set_routine, only: [:show, :edit, :update, :destroy, :index]
  def new
    @routine = Routine.new
    @exercises = Exercise.all
  end

  def create
  @routine = Routine.new(routine_params)
  if @routine.save
  redirect_to routine_path(@routine)
else
  render new_routine_path
  end
end

  def show
  end

  private

  def set_routine
    @exercise = Exercise.find(params[:id])
  end

    def routine_params
      params.require(:routine).permit(:name, :kind, exercise_ids:[], exercise_attributes: [:name, :points, :kind])
    end

end
