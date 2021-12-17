class Api::TasksController < ApplicationController

  def create
    @task = Task.new(task_params)

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
      render json: "Task updated successfully"
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
      render json: "Task deleted successfully"
    end
  end

  private

  def task_params
    params.require(:task).permit(:taskable_id, :taskable_type, :name)
  end
end