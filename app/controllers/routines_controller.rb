class RoutinesController < ApplicationController
  before_action :set_routine, only: [:show, :edit, :update, :destroy]
  before_action :redirect, only: [:edit, :update, :destroy]
  def new
    @routine = Routine.new
    @exercises = Exercise.all
  end

  def create
    @routine = Routine.new(routine_params)
    @routine.member = current_member
    if @routine.save
      @workout = Workout.new(:routine_id => @routine.id, :level => workout_params[:level])
      @workout.save
    redirect_to routine_path(@routine)
    else
    render new_routine_path
    end
  end

  def edit
  end

  def update
    if @routine.update(routine_params)
      redirect_to routine_path(@routine)
    else
      render :edit
    end
  end

  def index
      if params[:member_id]
        @routines = current_member.routines
      else
        @routines = Routine.all
      end
      respond_to do |format|
           format.html { render :show }
           format.json { render json: @routine}
         end
  end

  def show
    respond_to do |format|
         format.html { render :show }
         format.json { render json: @routine}
       end
  end

  def destroy
  @routine.destroy
  redirect_to member_path(current_member)
  end

  private
  def redirect
    if !current_member.routines.include?(@routine)
      redirect_to "/routines?error=cannot view that page"
    end
  end

  def set_routine
    @routine = Routine.find(params[:id])
  end

  def routine_params
    params.require(:routine).permit(:name, :kind, exercise_ids:[], exercise_attributes: [:name, :kind, :sets, :reps, :lbs], workout_attributes: [:level])
  end

  def workout_params
    params.require(:workout).permit(:level)
  end

end
