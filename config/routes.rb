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
<<<<<<< HEAD
 get "/members/id/routines", to: "members#routines_index", as: "routines_index"
=======
 get "/members/:id/routies", to: "members#routines_index"
>>>>>>> 852f88e7b3389cb6d8c41428da53d22d04ba02a2
 get '/auth/facebook/callback' => 'sessions#create'
 get '/privatepolicyfb' => 'static_pages#privatepolicyfb'
 get '/logout' => 'sessions#destroy'
end
