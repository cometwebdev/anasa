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

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
