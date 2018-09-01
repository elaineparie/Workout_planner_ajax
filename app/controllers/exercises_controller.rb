
class ExercisesController < ApplicationController
  before_action :set_exercise, only: [:show, :edit, :update, :destroy]
  before_action :redirect, only: [:edit, :update]

  def index
    @exercises = Exercise.all
  end

  def show
  end

  def new
    @exercise = Exercise.new
    @exercises = Exercise.all.map{|exercise|exercise.kind}
    @exercises = @exercises.compact.uniq
  end

  def edit
  end

  def create
    @exercise = Exercise.new(exercise_params)
      if @exercise.save
        redirect_to exercise_path(@exercise)
      else
        render :new
      end
    end

    def update
    if @exercise.update(exercise_params)
      redirect_to exercise_path(@exercise)
    else
      render :edit
    end
  end

  private

  def redirect
    if !current_member.exercises.include?(@exercise)
      redirect_to "/exercises?error=cannot view that page"
    end
  end

  def set_exercise
    @exercise = Exercise.find(params[:id])
  end

  def exercise_params
    params.require(:exercise).permit(
      :name,
      :kind,
      :sets,
      :reps,
      :lbs
    )
  end

end
