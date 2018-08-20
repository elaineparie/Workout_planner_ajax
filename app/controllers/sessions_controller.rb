class SessionsController < ApplicationController

  def destroy
    session[:member_id] = nil
    redirect_to root_url
  end

  def new
    render :layout => false
    @member = Member.new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]
       oauth_email = request.env["omniauth.auth"]["info"]["email"]
       oauth_name = request.env["omniauth.auth"]["info"]["name"]
       if member = Member.find_by(:name => oauth_name)
         session[:member_id] = member.id
         render member_path(member)
       else
         member = Member.create(:email => oauth_email, :name => oauth_name)
         oauth_email
         session[:member_id] = member.id
         render member_path(member)
       end
     else
       member = Member.find_by(:email => params[:email])
       if member && member.authenticate(params[:password])
         session[:member_id] == member.id
         redirect to root_path
       else
         render login_path
       end
     end
   end

   def destroy
     session[:member_id] = nil
     redirect_to root_url
   end

  private

  def session_params
      params.require(:member).permit(:email, :password)
  end

  def auth
   request.env['omniauth.auth']
  end

end
