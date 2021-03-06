Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root" # sets the root
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :show, :destroy] do
      resources :comments, only: [:index]
      resources :likes, only: [:index]
    end

    resources :users do 
      resources :posts, only: [:index] 
    end
    
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
  end
end
