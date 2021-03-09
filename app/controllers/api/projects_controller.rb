class Api::ProjectsController < ApplicationController

  def index
    @projects = current_user.projects
    render "api/projects/index"
  end

  def show
    @project = current_user.projects.find_by(id: params[:id]) || Project.new
    render "api/projects/show"
  end

  def create
    @project = Project.new(project_params)
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
    params.require(:project).permit(:name, :description)
  end
end

