class SessionsController < ApplicationController

  def destroy
    session[:member_id] = nil
    redirect_to root_url
  end

  def new
    @member = Member.new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]
       oauth_email = request.env["omniauth.auth"]["info"]["email"]
       oauth_name = request.env["omniauth.auth"]["info"]["name"]
       oauth_uid = request.env["omniauth.auth"]["uid"]
        if Member.find_by(:email => oauth_email) != nil
          member = Member.find_by(:email => oauth_email)
         session[:member_id] = member.id
         render member_path(member)
       else
         member = Member.create(:email => oauth_email, :name => oauth_name, :uid => oauth_uid)
         oauth_email
         session[:member_id] = member.id
         render member_path(member)
       end
     else
       member = Member.find_by(:email => params[:member][:email])
       if member && member.authenticate(params[:member][:password])
         session[:member_id] = member.id
         redirect_to member_path(member)
       else
         redirect_to login_path
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
