class Api::TasksController < ApplicationController

  def create
    @task = Task.new(task_params)
    if @task.taskable_type == "User" && @task.assignee_id.nil?
      @task.assignee_id = current_user.id
    end
    if @task.save
      render "/api/tasks/show"
    else
      render @task.errors.full_messages, status: 422
    end
  end

  def update
    #@task = current_user.tasks.find_by(id: params[:id]) || current_user.modifiable_tasks.find_by(id: params[:id])
    @task = Task.find_by(id: params[:id])
    if @task.nil?
      render json: "No task found", status: 404
    elsif @task.update(task_params)
      render "/api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    #@task = current_user.tasks.find_by(id: params[:id])
    @task = Task.find_by(id: params[:id])

    if @task.nil?
      render json: "No task found", status: 404
    else
      @task.destroy
      render "/api/tasks/show"
    end
  end

  private

  def task_params
    params.require(:task).permit(:taskable_id, :taskable_type, :name, :assignee_id)
  end
end