class Api::ProjectsController < ApplicationController

  def index
    # so these are projects only 
    @projects = current_user.projects
    render "api/projects/index"
  end

  def show
    # add following line back in when we have redirects for who has access to what
    #@project = current_user.projects.find_by(id: params[:id]) || Project.new
    @project = Project.find_by(id: params[:id])
    render "api/projects/show"
  end

  def create
    @project = Project.new(project_params)
    @project.owner_id = current_user.id
    # should probably also make sure user belongs to the team that 
    # the project is being saved to
    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = current_user.projects.find_by(id: params[:id])
    if @project.nil?
      render json: "No project found", status: 404
    elsif @project.update(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :team_id, :status, :color, :icon)
  end
end

