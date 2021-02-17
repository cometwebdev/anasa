class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  #HCRLLL
  helper_method :current_user, :logged_in?
  before_action :require_logged_in, only: [:logout!]
  before_action :require_logged_out, only: [:login!]

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    unless current_user
      render json: ['You must be logged in to access this'], status: 401
    end
  end

  def require_logged_out
    if current_user
      render json: ['You must be logged out to access this'], status: 400
    end
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

end
