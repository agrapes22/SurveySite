Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'user/index'
      post 'user/create'
      get 'survey/index'
      post 'survey/create'
      get '/show/:id', to: 'survey#show'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end