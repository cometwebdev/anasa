Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resources :teams, only: [:create, :update, :index, :show]
    resources :projects, only: [:create, :update, :index, :show]
    resources :tasks, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]

  end
  root to: 'static_pages#root'
end
