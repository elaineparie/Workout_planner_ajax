class ApplicationController < ActionController::Base

  before_action :current_member
before_action :require_logged_in, except: [:new, :create, :home]

def logged_in?
  !!current_member
end

private
  def require_logged_in
    redirect_to new_member_path unless logged_in?
  end

  def current_member
    @current_member ||= Member.find(session[:member_id]) if session[:member_id]
  end
  helper_method :current_user
end
