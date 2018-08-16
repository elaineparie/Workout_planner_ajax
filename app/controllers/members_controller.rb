class MembersController < ApplicationController
  before_action :set_member, only: [:show, :edit, :update, :destroy]

  def new
    @member = Member.new
  end

  private
   def set_member
     @member = Member.find(params[:id])
   end

   def member_params
     params.require(:user).permit(
       :name,
       :email,
       :password
     )
   end
end
