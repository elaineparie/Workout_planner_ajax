class SessionsController < ApplicationController

  def destroy
    session[:member_id] = nil
    redirect_to root_url
  end

  def new
    @member = Member.new
    @members = Member.all
  end

  def create
    @member = Member.find_by(email: params[:member][:email])
    if @member && @member.authenticate(params[:member][:password])
      session[:member_id] = @member.id
      redirect_to member_path(@member)
    else
      redirect_to login_path
    end
  end

end
