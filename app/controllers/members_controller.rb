class MembersController < ApplicationController

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
