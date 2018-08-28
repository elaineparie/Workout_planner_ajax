class MembersController < ApplicationController
  before_action :set_member, only: [:show, :edit, :update, :destroy, :index]

def index
end

  def new
    @member = Member.new
  end

  def create
   @member = Member.new(member_params)
     if @member.valid? && @member.save
       session[:member_id] = @member.id
       redirect_to member_path(@member)
     else
       render :new
     end
   end

   def edit
   end

   def routines_index
    @routines = current_member.routines
   end

   def update
     if @member.update(member_params)
       redirect_to member_path(@member)
     else
       render :edit
     end
   end

   def show
   end

  private
   def set_member
     @member = Member.find(params[:id])
   end

   def member_params
     params.require(:member).permit(
       :name,
       :email,
       :password,
       :uid,
       :image
     )
   end
end
