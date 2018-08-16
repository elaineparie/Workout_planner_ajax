class MembersController < ApplicationController
  before_action :set_member, only: [:show, :edit, :update, :destroy]

  def new
    @member = Member.new
  end

  def create
   @member = Member.new(member_params)
     if @member.save
       session[:user_id] = @member.id
       redirect_to member_path(@member)
     else
       render :new
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
       :password
     )
   end
end
