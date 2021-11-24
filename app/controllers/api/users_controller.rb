class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    # unsafe to allow any user to find any other user, but will test for now
    @user = User.find_by(id: params[:id]) || User.new
    render "api/users/show"
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.nil?
      render json: "No user found", status: 404
    elsif @user.id != current_user.id
      render json: "Cannot modify another users profile", status: 422
    elsif @user.update(about_me: user_params[:about_me])
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :about_me)
  end
end
