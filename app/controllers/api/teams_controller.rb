class Api::TeamsController < ApplicationController
  
  def index
    # change this later to do currentUser.teams 
    # when we have joins table + associations going
    @teams = Team.all
    render "api/teams/index"
  end

  def show
    # change this to make sure currentUser is on that particular
    # team when we have joins table + associations going

    @team = Team.find_by(id: params[:id]) || Team.new
    render "api/teams/show"
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      # After Creating UserTeam Table, add current_user to this Team via joins table.
      UserTeam.create({team_id: @team.id, user_id: @current_user.id})
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update
    @team = @current.user.teams.find_by(id: params[:id])
    if @team.nil?
      render json: "No team found", status: 404
    elsif @team.update(team_params)
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
