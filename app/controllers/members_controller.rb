class MembersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def new
    @user = User.new
  end

  private
   def set_user
     @user = User.find(params[:id])
   end

   def user_params
     params.require(:user).permit(
       :name,
       :email,
       :password
     )
   end
end
