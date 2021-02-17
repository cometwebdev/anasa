class Api::TeamsController < ApplicationController

  def create
    @team = team.new(team_params)
    if @team.save
      # After Creating UserTeam Table, add current_user to this Team via joins table.
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update
    @team = team.find_by(id: params[:id])
    if @team.update(team_params)
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  private

  def team_params
    params.require(:team).permit(:name, :description)
  end
end
