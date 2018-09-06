Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'static_pages#home'
resources :members do
  resources :routines
end
resources :exercises
resources :workouts
resources :routines do
  resources :exercises
end

 get "/login", to: "sessions#new"
 post "/sessions/create", to: "sessions#create"
 get '/auth/facebook/callback' => 'sessions#create'
 get '/privatepolicyfb' => 'static_pages#privatepolicyfb'
 get '/logout' => 'sessions#destroy'
 get '/most_routines' => 'members#most_routines'
end
