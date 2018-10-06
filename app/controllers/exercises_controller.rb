
class ExercisesController < ApplicationController
  before_action :set_exercise, only: [:show, :edit, :update, :destroy]
  before_action :redirect, only: [:edit, :update, :destroy]

  def index
    @exercises = Exercise.all
    respond_to do |format|
         format.html { redirect_to :index }
         format.json { render json: @exercises}
    end
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
    @exercise.member = current_member
    if @exercise.save
      @workout = Workout.new
      @workout.exercise_id = @exercise.id
      @workout.routine_id = params["exercise"]["routine_id"].to_i
      @workout.save
      respond_to do |format|
           format.html { redirect_to exercise_path(@exercise) }
           format.json { render json: @exercise}
      end
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

  def destroy
    @exercise.destroy
    redirect_to member_path(current_member)
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
